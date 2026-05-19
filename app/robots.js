function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://vido4k.aliwvide.com";
  return url.replace(/\/$/, "");
}

export default function robots() {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
