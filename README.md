# James Studio Construction

Marketing site for **James Studio Construction** (styled JAMESTUDIO CONSTRUCTION), owned by James Koban, based in DeSoto, TX. It is a static [Astro](https://astro.build) site aimed at local Google leads: phone calls and free-estimate requests.

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

`role: "home"` marks DeSoto. `role: "past"` marks cities where James has done work (McKinney and Garland). Other cities are the Dallas–Fort Worth service area, not a claim that a job was finished there.

## Change the email to the new Gmail

1. Set `email` in `src/config/site.ts`. That updates every address and `mailto:` link on the site.
2. Point the form provider at that same inbox. The form does not choose the destination itself (so a visitor cannot redirect leads):
   - **Formspree:** set the form’s notification email to the new Gmail, then put the form id in `form.formspreeId` and set `form.provider` to `"formspree"`.
   - **Web3Forms:** create the access key while signed in as the new Gmail, then put that key in `form.web3formsAccessKey` and set `form.provider` to `"web3forms"`.
   - **Netlify Forms:** set `form.provider` to `"netlify"`, deploy, then in the Netlify dashboard set the form notification email to the new Gmail. File uploads on Netlify Forms may require a paid plan.
3. Rebuild and deploy.

Until `form.provider` is set with a real id or key, the estimate form does not post anywhere. Submitting it opens an email draft to the address in `email`, and the page keeps the call button and email address on screen.

The form asks for name, phone, email, city, service, message, and an optional photo (up to 4).

## Add project photos

1. Put `.jpg`, `.png`, or `.webp` files in `src/assets/gallery/`.
2. Add an entry in `src/data/gallery.ts` with `alt`, `caption`, `category`, and `services`. Categories: `pergolas`, `fences`, `bathrooms`, `roofing`, `decks`, `carpentry`.
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
- One page per service, titled for DeSoto (for example “Bathroom Remodeling in DeSoto, TX”)
- Analytics tag renders only when `gaMeasurementId` is a real `G-` id
