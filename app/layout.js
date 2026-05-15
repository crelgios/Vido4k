import "./globals.css";

const siteUrl = "https://vido4k.aliwvide.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Vido4K",
  title: {
    default: "Free 4K Video Downloader | Vido4K",
    template: "%s | Vido4K"
  },
  description:
    "Download direct 4K, 2K, Full HD, MP4, WebM, MOV, M4V and OGG video file links safely with Vido4K.",
  keywords: [
    "4K video downloader",
    "free video downloader",
    "direct video downloader",
    "MP4 downloader",
    "WebM downloader",
    "MOV downloader",
    "2K video downloader",
    "Full HD video downloader",
    "browser video downloader",
    "Vido4K"
  ],
  authors: [{ name: "Aliwvide" }],
  creator: "Aliwvide",
  publisher: "Aliwvide",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vido4K",
    title: "Free 4K Video Downloader | Vido4K",
    description:
      "Download direct 4K, 2K, Full HD, MP4, WebM, MOV, M4V and OGG video file links safely with Vido4K.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vido4K free 4K video downloader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 4K Video Downloader | Vido4K",
    description:
      "Download direct 4K, 2K, Full HD, MP4, WebM, MOV, M4V and OGG video file links safely with Vido4K.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
