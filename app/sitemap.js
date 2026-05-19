function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://vido4k.aliwvide.com";
  return url.replace(/\/$/, "");
}

export default function sitemap() {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/premium-unlock`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5
    }
  ];
}
