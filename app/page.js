import Vido4KDownloader from "../components/Vido4KDownloader";

const siteUrl = "https://vido4k.aliwvide.com/";

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Vido4K",
  url: siteUrl,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  description:
    "Vido4K helps users prepare browser downloads from direct video file links such as MP4, WebM, MOV, M4V and OGG.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Vido4K download protected platform videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Vido4K is built for direct video file links only and does not bypass protected platforms or login restrictions."
      }
    },
    {
      "@type": "Question",
      name: "Which video file links are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vido4K supports direct MP4, WebM, MOV, M4V and OGG file URLs that the user owns or has permission to download."
      }
    },
    {
      "@type": "Question",
      name: "Does Vido4K store uploaded videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Vido4K works with direct file URLs in the browser and does not upload or store user videos on a server."
      }
    },
    {
      "@type": "Question",
      name: "Does Vido4K support 4K?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vido4K includes 4K and 2K quality labels for direct video files. The final file quality depends on the original direct video link."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Vido4KDownloader />
    </>
  );
}
