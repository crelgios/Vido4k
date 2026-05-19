import "./globals.css";

const siteUrl = "https://vido4k.aliwvide.com";

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    title: "Vido4K - Online Video Downloader",
    description: "Fast browser-based video downloader for direct video file links.",
    url: siteUrl,
    siteName: "Vido4K",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
