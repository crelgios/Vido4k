# Vido4K

SEO-ready Next.js website for:

```txt
https://vido4k.aliwvide.com/
```

## Features

- Vido4K branding
- Free 4K video downloader UI
- Direct video file link validation
- Supports MP4, WebM, MOV, M4V and OGG direct URLs
- Blocks unsupported protected platform links
- SEO metadata
- Canonical URL
- Sitemap route
- Robots route
- FAQ schema
- WebApplication schema
- Open Graph image
- Favicon

## Run locally

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
```

## Deploy on Vercel

1. Upload this project to GitHub.
2. Import the GitHub repo in Vercel.
3. Deploy.
4. Go to Vercel Project Settings > Domains.
5. Add:

```txt
vido4k.aliwvide.com
```

## Hostinger DNS

In Hostinger DNS Zone for `aliwvide.com`, add:

```txt
Type: CNAME
Name: vido4k
Target: cname.vercel-dns.com
TTL: Default
```

Do not change `@` or `www` records if your main website already uses them.

## Google Search Console

After the domain is live, add this property:

```txt
https://vido4k.aliwvide.com/
```

Submit sitemap:

```txt
https://vido4k.aliwvide.com/sitemap.xml
```
