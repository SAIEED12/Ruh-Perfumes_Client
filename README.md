# Ruh Perfumes — Client

Storefront and admin dashboard for Ruh Perfumes, a Dhaka-based perfume house.
Built with Next.js 16 (App Router), React 19, HeroUI and Tailwind CSS 4.

The companion API lives in `RuhPerfumes-Server`. Both apps share one MongoDB Atlas
database — there is no MySQL anywhere in this project.

## What is here

- Editorial storefront: announcement bar, three-slide hero, scent-family grid,
  signature collection, house story, craft promises and gifting CTA
- Product pages with bottle-volume selection (the generic `sizes` field is reused
  as 30ml / 50ml / 100ml), reviews and wishlist
- Cart with guest + signed-in sync, checkout with cash on delivery
- Customer dashboard (orders, wishlist) and admin dashboard (products, categories,
  orders, customers, reviews)
- Hand-built SVG wordmark, generated PNG app icons and self-contained SVG campaign
  artwork — no external image service is required

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Fill in `.env.local`:

| Variable | Meaning |
|---|---|
| `MONGODB_URI` | `mongodb+srv://...` Atlas connection string |
| `MONGODB_DB` | Database name, e.g. `ruh_perfumes` |
| `BETTER_AUTH_URL` | This site's public URL; leave empty on localhost |
| `BETTER_AUTH_SECRET` | Long random string (`openssl rand -base64 32`) |
| `SERVER_URL` | Express API base URL, e.g. `http://localhost:5000` |
| `NEXT_PUBLIC_SITE_URL` | Public URL used in metadata; defaults to `http://localhost:3000` |

Then start the API from `../RuhPerfumes-Server` (`npm start`) and create an admin
account at `/signup`. Promote it to admin by setting `role: "admin"` on the `user`
document in MongoDB.

## Scripts

```bash
npm run dev     # development
npm run build   # production build
npm run lint    # eslint
npm run pack:cpanel  # build the cPanel standalone zip
node scripts/generate-icons.js  # regenerate app/icon.png and apple-icon.png
```

## Catalog

There is **no demo product data**. Add perfumes through
`/dashboard/admin/products`. A scent-category mapping guide for existing data is
in `../RuhPerfumes-Server/database/rebrand-categories.md`.

Contact details and the public URL are centralised in `lib/brand.js`. Replace the
placeholder email, phone and social links there.

See `DEPLOY-CPANEL.md` for hosting notes. Use `your-domain.com` in place of the real
domain until it is registered; nothing is hardcoded to a fake production domain.
