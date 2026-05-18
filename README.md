# Vido4K Video Downloader

A deployable Next.js App Router project for a safe direct video-file downloader UI.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Upload this project to GitHub.
2. Import the repo in Vercel.
3. Add environment variable:

```txt
NEXT_PUBLIC_SITE_URL=https://www.vido4k.com
```

4. Deploy.
5. Submit sitemap in Google Search Console:

```txt
https://www.vido4k.com/sitemap.xml
```

## Notes

- Adsterra Popunder script is included in `components/VideoDownloader.jsx`.
- The script is loaded on page interaction and also prepared after page load.
- Popunders may not show on every click because browsers, ad blockers, Adsterra approval, traffic quality, and fill rate can block or limit them.
