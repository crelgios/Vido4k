import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vido4k.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vido4K - Online Video Downloader",
    template: "%s | Vido4K"
  },
  description: "Fast browser-based video downloader for direct video file links.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Vido4K - Online Video Downloader",
    description: "Fast browser-based video downloader for direct video file links.",
    url: siteUrl,
    siteName: "Vido4K",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
