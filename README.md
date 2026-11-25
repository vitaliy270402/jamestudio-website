# Jamestudio Construction

Marketing site for **Jamestudio Construction** (styled JAMESTUDIO CONSTRUCTION), serving DeSoto, Cedar Hill, Lancaster, and the wider Dallas–Fort Worth area. It is a static [Astro](https://astro.build) site aimed at local Google leads: phone calls and free-estimate requests.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

## Where to edit the business

All contact details, services, service-area cities, the quote-form backend, and analytics live in one file:

`src/config/site.ts`

| What | Field |
| --- | --- |
| Phone | `phoneDisplay` and `phoneTel` |
| Email | `email` |
| Cities | `cities` |
| Hours | `hours` (leave `null` until known) |
| License | `license` (leave `null` until known) |
| Public URL | `siteUrl`, or the `SITE_URL` env var at build time |
| Google Analytics | `gaMeasurementId` (`G-XXXXXXXXXX`, or `""` to keep it off) |
| Quote form | `form.provider` plus the matching id or key |

Hours and the license number are unknown. The site hides them while those fields are `null`. Do not invent them.

`role: "past"` marks cities where James has done work (McKinney and Garland). DeSoto, Cedar Hill, and Lancaster lead the service area. Other cities are part of the wider Dallas–Fort Worth service area, not a claim that a job was finished there.

## Public email

The public address is `contact@jamestudioconstruction.com`, set as `email` in `src/config/site.ts`. That value is what the contact page, footer, `mailto:` links, the estimate form’s email fallback, and the structured data use.

The estimate form posts to [FormSubmit](https://formsubmit.co) through the activated alias in `form.formsubmitId`. That alias delivers to `contact@jamestudioconstruction.com`. Submissions arrive as a table with the subject “Free estimate request — Jamestudio Construction.”

The form asks for name, phone, email, city, service, and message. It checks those fields in the browser, shows a success or error state, and keeps the phone number and email on the page. There is a honeypot field.

Optional photos, videos, and documents (2 GB total) upload to Google Drive when `uploads.scriptUrl` in `src/config/site.ts` is the deployed Apps Script URL. While that value is empty, the upload control is hidden and the form still sends. See `apps-script/README.md` to deploy the script.

To point the form at a different inbox later, activate a new FormSubmit alias for that address and put it in `form.formsubmitId`. `form.provider` is `"formsubmit"`.

## Add project photos

1. Put `.jpg`, `.png`, or `.webp` files in `src/assets/gallery/`.
2. Add an entry in `src/data/gallery.ts` or `src/data/newWork.ts` with `alt`, `caption`, `category`, and `services`. Categories include pergolas, fences, bathrooms, kitchens, hardscape, painting, roofing, decks, doors and windows, flooring, whole-home remodels, and carpentry.
3. Rebuild. Astro makes AVIF and WebP copies at several widths. Images are lazy-loaded except the first hero photo.

A file with no catalog entry still appears on the gallery, captioned “Project photo”. Give it an entry so it lands in the right category.

Do not add photos that show faces, license plates, or children’s belongings. Four in-progress shots in the repo are already cropped so workers and vehicles are out of frame. One original yard photo was left out because it showed kids’ toys.

## Logo

- `public/brand/logo-drive.jpg` is the official logo file. The header and footer use a margin-trimmed copy of that same artwork (`src/assets/brand/logo-drive.jpg`) so the mark is large enough to read.
- `public/brand/logo.svg` is a recreation of the hammer monogram, the JAMESTUDIO wordmark, and CONSTRUCTION, traced from that JPEG. **It is not an original vector file from James.** Replace it when he has one.
- `public/favicon.svg` is the monogram from that recreation.
- Brand colors are navy `#1F1E3D` and orange `#F27E17`.

## Deploy

The build is a static `dist/` folder. Set `SITE_URL` to the live domain (no trailing slash) so canonical links, Open Graph, JSON-LD, and the sitemap use the real host. If you skip it, the build uses `siteUrl` in `src/config/site.ts`.

### Netlify

`netlify.toml` is included. Connect the repo, leave the build command as `npm run build` and the publish directory as `dist`, and set `SITE_URL`.

### Vercel

Import the repo. Vercel detects Astro. Set `SITE_URL`. `vercel.json` adds basic security headers. Use the static output; do not turn on a server runtime.

After deploy, submit `https://YOUR-DOMAIN/sitemap-index.xml` in Google Search Console. `robots.txt` points at that sitemap.

## SEO included

- Unique title and meta description on every page
- Canonical URL, Open Graph, and Twitter card tags
- `HomeAndConstructionBusiness` JSON-LD built from `src/config/site.ts`
- `sitemap-index.xml` and `robots.txt`
- One page per service, titled for Dallas & Fort Worth, TX (for example “Bathroom Remodeling in Dallas & Fort Worth, TX”)
- Analytics tag renders only when `gaMeasurementId` is a real `G-` id
