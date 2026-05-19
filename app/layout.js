import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vido4k.aliwvide.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vido4K - Online Video Downloader",
    template: "%s | Vido4K"
  },
  description: "Fast browser-based video downloader for direct video file links and Vido4K premium unlock tools.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Vido4K - Online Video Downloader",
    description: "Fast browser-based video downloader for direct video file links.",
    url: siteUrl,
    siteName: "Vido4K",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
