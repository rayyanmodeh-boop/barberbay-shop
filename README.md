# Barber bay Shop

A responsive, dependency-free barbershop website for West Bay, Doha.

## Publish with GitHub Pages

1. Open this repository on GitHub and select **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main**, folder **/ (root)**, and click **Save**.
4. Wait for GitHub's Pages deployment to finish. The Pages settings screen will show the published website address.

The expected address is `https://rayyanmodeh-boop.github.io/barberbay-shop/`. It becomes available after Pages is enabled and deployment succeeds. All images, fonts, styles, and scripts are stored in this repository; no build or dependency installation is required for hosting.

GitHub Pages availability depends on the repository's visibility and account plan. If Pages is unavailable for a private repository, use an eligible plan or another static hosting provider.

## Run

Use Node.js 18 or newer. No dependency installation is needed.

```sh
npm run dev
```

The server uses port 3000 by default; set `PORT` to change it. Run `npm run check` for JavaScript syntax checks. The static `index.html`, `styles.css`, and `app.js` can also be deployed to a static website host.

## Content and booking

- Appointment requests open WhatsApp addressed to the supplied business number. Requests are confirmed only when the shop replies. Verify this number accepts WhatsApp before launch.
- Hours are in Doha time. Friday appointment choices start at 1 PM; other days start at 9:30 AM.
- Actual prices were not supplied, so the site asks visitors to contact the team for pricing.
- The reviews section summarizes the supplied customer feedback without inventing individual testimonials.
- The location panel is an illustrative map placeholder with a Google Maps search link, not an exact geographic map.
- The locally stored interior image is AI-generated and illustrative. Replace it with the shop's own photography when available. Google Fonts are served locally with their OFL licenses.
