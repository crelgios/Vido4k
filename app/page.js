import Vido4KDownloader from "@/components/Vido4KDownloader";

const siteUrl = "https://vido4k.aliwvide.com";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Vido4K download protected platform videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Vido4K is built for direct video file links only and does not bypass protected platform restrictions."
      }
    },
    {
      "@type": "Question",
      name: "What video links are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vido4K supports direct MP4, WebM, MOV, M4V and OGG file URLs that the user owns or has permission to download."
      }
    },
    {
      "@type": "Question",
      name: "Can I select 4K quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vido4K includes labels for 4K 2160p, 2K 1440p, Full HD 1080p, HD 720p and original file downloads."
      }
    },
    {
      "@type": "Question",
      name: "Does Vido4K store videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Direct file links are downloaded through the user's browser. Vido4K does not store videos on the server."
      }
    }
  ]
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Vido4K",
  url: siteUrl,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  description:
    "Free direct 4K video downloader for MP4, WebM, MOV, M4V and OGG video file links.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  publisher: {
    "@type": "Organization",
    name: "Aliwvide",
    url: "https://www.aliwvide.com"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Vido4KDownloader />
    </>
  );
}
