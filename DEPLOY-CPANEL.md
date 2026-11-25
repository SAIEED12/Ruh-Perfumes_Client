# Deploying Ruh Perfumes client to cPanel

Prebuilt Next.js standalone app. Do **not** run `npm install`, `npm run build` or
`next start` on cPanel — the zip already contains the server, traced `node_modules`,
`.next` and `public`.

## 1. Build the artifact

```powershell
npm run pack:cpanel
```

This writes `ruhperfumes-client-cpanel.zip` at the project root. The pack script
builds the standalone output, copies `public` and `.next/static`, removes `.env`
and rejects Windows native binaries.

## 2. MongoDB Atlas

1. Create a cluster and database user.
2. Allow access from the host's IP (or `0.0.0.0/0` only if you understand the risk).
3. Use the same `MONGODB_URI` and `MONGODB_DB` on both the client and the API.
4. From the server project, run `node scripts/init-db.js` once to create indexes.

## 3. Create the cPanel Node.js app

**cPanel → Setup Node.js App → Create Application**

| Field | Value |
|---|---|
| Node.js version | 24 |
| Application mode | Production |
| Application root | your domain's root (placeholder: `your-domain.com`) |
| Application URL | your registered domain |
| Application startup file | `server.js` |
| Port | leave unset — cPanel/Passenger supplies it |

Upload `ruhperfumes-client-cpanel.zip` into the application root and extract it.
Enable **Show Hidden Files** in File Manager so `.next` is visible. These must be
directly inside the app root:

```text
server.js
package.json
next.config.mjs
node_modules/
.next/
public/
```

There must be **no** `.env` file in the app root.

## 4. Environment variables

Set these in the cPanel Node.js app's **Environment Variables** panel, then restart:

| Variable | Example |
|---|---|
| `MONGODB_URI` | `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority` |
| `MONGODB_DB` | `ruh_perfumes` |
| `BETTER_AUTH_URL` | `https://your-domain.com` |
| `BETTER_AUTH_SECRET` | long random string |
| `SERVER_URL` | `https://api.your-domain.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` |

`NEXT_PUBLIC_*` values are baked into the client bundle at build time, so rebuild
and re-upload the zip if you change `NEXT_PUBLIC_SITE_URL`.

## 5. First admin

Open `https://your-domain.com/signup`, create the account, then set its `role` to
`admin` in the Atlas `user` collection. Sign out and back in to refresh the session.

## Troubleshooting

| Symptom | Fix |
|---|---|
| 401 from the API | Check `SERVER_URL`, `BETTER_AUTH_SECRET`, JWT `kid` in the `jwks` collection, and `AUTH_BASE_URL` on the API |
| Uploaded image URLs are `http://` | Set `MEDIA_BASE_URL` on the API and restart it |
| Auth redirects to the wrong host | Check `BETTER_AUTH_URL` and `NEXT_PUBLIC_SITE_URL`, then restart |
| Products are empty | Expected — add perfumes in the admin dashboard |

Replace every `your-domain.com` placeholder with the real domain before launch.
