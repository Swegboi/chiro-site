# McCandless Township Chiropractic

Static Astro site for `mccandlesstownshipchiropractic.com`.

## Local development

Use Node.js `22.12` or newer:

```sh
npm install
npm run dev
```

The development site is available at `http://localhost:4321`.

Build and preview the production output:

```sh
npm run build
npm run preview
```

## Before launch

Replace the remaining bracketed values in `src/data/site.ts` with information approved by the practice:

- Services and descriptions
- Approved biography and photography
- Parking, directions, payment, and insurance details

The Contact page includes a Google Maps iframe centered on `997 Cumberland Road, Pittsburgh, PA 15237`. It uses the public embed URL and does not require a Google Maps API key. Because an embedded map is a third-party service, keep it in the privacy review.

The office currently operates as a cash practice. Add `bookingUrl` only after confirming the approved scheduling service and exact booking URL. Until then, the main call to action correctly sends visitors to the office phone: `412-366-2663`.

Do not publish invented credentials, testimonials, treatment claims, outcome guarantees, or sensitive patient information.

## Routes

- `/` Home
- `/about/` About the practice
- `/services/` Services
- `/shockwave-therapy/` Focused shockwave therapy
- `/what-to-expect/` First-visit information
- `/faq/` Frequently asked questions
- `/reviews/` Public Google review excerpts
- `/contact/` Phone, hours, location, and directions
- `/privacy/` Privacy boundary

## Hosting

The site is statically generated into `dist/` and is ready to connect to Cloudflare Pages or another static host. Configure the production URL in `src/data/site.ts` before launch so canonical metadata points to the live domain.
