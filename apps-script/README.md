# Deploy the estimate upload script

Do this while signed in as jamesscllc@gmail.com. The script stores files in that account's Drive.

1. Open [script.google.com](https://script.google.com) and create a project named `Jamestudio website uploads`.
2. Replace the contents of `Code.gs` with `apps-script/Code.gs` from this repo.
3. Open Project Settings, turn on **Show "appsscript.json" manifest file in editor**, then replace `appsscript.json` with `apps-script/appsscript.json` from this repo. Save both files.
4. Choose **Deploy > New deployment**. Click the gear and select **Web app**.
5. Set **Execute as** to **Me** and **Who has access** to **Anyone**. Deploy.
6. Authorize the Drive prompt. The script only asks for files it creates, plus permission to call the Drive API.
7. Copy the web app URL. It ends in `/exec`.
8. Put that URL in `uploads.scriptUrl` in `src/config/site.ts`, then rebuild and deploy the site. Until that value is set, the contact page does not show the upload control.

Each estimate gets a folder under **Website Uploads**. The FormSubmit email includes the folder link and a link for each file. Open those links while signed in as the same Google account. A request can total 2 GB. If Drive, Gmail, and Photos together fill the free 15 GB, new uploads stop until files are deleted and Trash is emptied.
