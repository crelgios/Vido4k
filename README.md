# Vido4K

SEO-ready Next.js website for:

```txt
https://vido4k.aliwvide.com/
```

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## Vercel deployment

1. Upload this project to GitHub.
2. Import the repo in Vercel.
3. Deploy.
4. Go to Vercel Project Settings > Domains.
5. Add:

```txt
vido4k.aliwvide.com
```

## Hostinger DNS record

In Hostinger DNS Zone for `aliwvide.com`, add only this new record:

```txt
Type: CNAME
Name: vido4k
Target: cname.vercel-dns.com
TTL: Default
```

Do not change `@` or `www` records.

## Google Search Console

After deployment, add this property:

```txt
https://vido4k.aliwvide.com/
```

Submit sitemap:

```txt
https://vido4k.aliwvide.com/sitemap.xml
```
