# Vido4K Video Downloader

A deploy-ready Next.js App Router project for a direct video file downloader landing page.

## Features

- Next.js App Router
- Tailwind CSS
- No external icon package
- Inline SVG icons
- Adsterra Popunder script included in `components/VideoDownloader.jsx`
- SEO metadata
- Sitemap and robots files
- Privacy Policy, Terms, Contact, and FAQ pages

## Local setup

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Vercel environment variable

Set this in Vercel Project Settings > Environment Variables:

```txt
NEXT_PUBLIC_SITE_URL=https://www.vido4k.com
```

Replace the URL with your real domain if different.

## Google Search Console

After deployment, submit:

```txt
https://www.vido4k.com/sitemap.xml
```

Also inspect your homepage URL and click Request Indexing.

## Adsterra

The Popunder script is stored here:

```txt
components/VideoDownloader.jsx
```

Look for:

```js
ADSTERRA_POPUNDER_SRC
```

Replace it if Adsterra gives you a new script.
