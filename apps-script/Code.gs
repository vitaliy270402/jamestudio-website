/**
 * Jamestudio Construction — estimate file uploads.
 *
 * The browser never sends file bytes here. It asks this web app for a Drive
 * resumable session, then PUTs 8 MB chunks straight to that session URL.
 * Creating the session with the site's Origin header is what lets the browser
 * upload. Deploy steps are in apps-script/README.md.
 */
var ROOT_NAME = "Website Uploads";
var ROOT_KEY = "WEBSITE_UPLOADS_FOLDER_ID";
var MAX_BYTES = 2 * 1024 * 1024 * 1024;
var ALLOWED_ORIGINS = {
  "https://jamestudioconstruction.com": true,
  "https://www.jamestudioconstruction.com": true,
};

function doGet(e) {
  var params = (e && e.parameter) || {};
  var callback = String(params.callback || "").replace(/[^\w]/g, "");
  var result;
  try {
    var origin = String(params.origin || "");
    if (!ALLOWED_ORIGINS[origin]) {
      throw new Error("This site is not allowed to upload.");
    }
    var action = String(params.action || "");
    if (action === "quota") result = quota_();
    else if (action === "start") result = start_(params, origin);
    else if (action === "link") result = link_(params);
    else throw new Error("Unknown action.");
  } catch (err) {
    result = { ok: false, error: String(err && err.message ? err.message : err) };
  }
  var json = JSON.stringify(result);
  var body = callback ? callback + "(" + json + ")" : json;
  return ContentService.createTextOutput(body).setMimeType(
    ContentService.MimeType.JAVASCRIPT
  );
}

function quota_() {
  var about = api_("get", "https://www.googleapis.com/drive/v3/about?fields=storageQuota(limit,usage)");
  var quota = about.storageQuota || {};
  var limit = Number(quota.limit || 0);
  var usage = Number(quota.usage || 0);
  var remaining = limit > 0 ? Math.max(0, limit - usage) : MAX_BYTES;
  return { ok: true, remaining: remaining, limit: limit };
}

function start_(params, origin) {
  var size = Number(params.size || 0);
  if (!size || size < 1) throw new Error("Choose a file to upload.");
  if (size > MAX_BYTES) throw new Error("That file is over 2 GB.");
  var space = quota_();
  if (space.remaining < size) {
    throw new Error("There isn't room for those files right now.");
  }
  var folderId = String(params.folderId || "");
  if (!folderId || !fileExists_(folderId)) {
    folderId = createFolder_(requestFolderName_(), getRootFolder_());
  }
  var sessionUrl = createSession_(
    safeName_(params.name),
    String(params.mime || "application/octet-stream"),
    size,
    folderId,
    origin
  );
  return {
    ok: true,
    sessionUrl: sessionUrl,
    folderId: folderId,
    folderUrl: "https://drive.google.com/drive/folders/" + folderId,
    remaining: space.remaining,
  };
}

function link_(params) {
  var id = String(params.fileId || "");
  if (!id) throw new Error("Missing file.");
  var file = api_("get", "https://www.googleapis.com/drive/v3/files/" + encodeURIComponent(id) + "?fields=id,webViewLink");
  return {
    ok: true,
    url: file.webViewLink || "https://drive.google.com/file/d/" + id + "/view",
  };
}

function getRootFolder_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(ROOT_KEY);
  if (id && fileExists_(id)) return id;
  id = createFolder_(ROOT_NAME, "");
  props.setProperty(ROOT_KEY, id);
  return id;
}

function createFolder_(name, parentId) {
  var meta = {
    name: name,
    mimeType: "application/vnd.google-apps.folder",
  };
  if (parentId) meta.parents = [parentId];
  var created = api_("post", "https://www.googleapis.com/drive/v3/files", meta);
  return created.id;
}

function createSession_(name, mime, size, folderId, origin) {
  var response = UrlFetchApp.fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable",
    {
      method: "post",
      contentType: "application/json; charset=utf-8",
      payload: JSON.stringify({
        name: name,
        parents: [folderId],
      }),
      headers: {
        Authorization: "Bearer " + ScriptApp.getOAuthToken(),
        Origin: origin,
        "X-Upload-Content-Type": mime,
        "X-Upload-Content-Length": String(size),
      },
      followRedirects: false,
      muteHttpExceptions: true,
    }
  );
  var code = response.getResponseCode();
  if (code < 200 || code >= 400) {
    throw new Error("Drive did not start the upload (" + code + ").");
  }
  var headers = response.getAllHeaders();
  var location = headers.Location || headers.location;
  if (Array.isArray(location)) location = location[0];
  if (!location) throw new Error("Drive did not return an upload session.");
  return String(location);
}

function fileExists_(id) {
  var response = UrlFetchApp.fetch(
    "https://www.googleapis.com/drive/v3/files/" + encodeURIComponent(id) + "?fields=id,trashed",
    {
      method: "get",
      headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
      muteHttpExceptions: true,
    }
  );
  if (response.getResponseCode() !== 200) return false;
  var file = JSON.parse(response.getContentText());
  return file && file.id && !file.trashed;
}

function api_(method, url, body) {
  var options = {
    method: method,
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true,
  };
  if (body) {
    options.contentType = "application/json; charset=utf-8";
    options.payload = JSON.stringify(body);
  }
  var response = UrlFetchApp.fetch(url, options);
  var code = response.getResponseCode();
  var text = response.getContentText() || "{}";
  var parsed = {};
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    parsed = {};
  }
  if (code < 200 || code >= 300) {
    var message = parsed.error && parsed.error.message ? parsed.error.message : "Drive request failed (" + code + ").";
    throw new Error(message);
  }
  return parsed;
}

function requestFolderName_() {
  return (
    "Estimate " +
    Utilities.formatDate(new Date(), "America/Chicago", "yyyy-MM-dd HH:mm:ss")
  );
}

function safeName_(value) {
  var name = String(value || "upload").replace(/[\\\/]+/g, " ").replace(/\s+/g, " ").trim();
  if (!name) name = "upload";
  return name.slice(0, 180);
}
