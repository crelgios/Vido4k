import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vido4k.aliwvide.com"),
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
    "video file downloader",
    "Vido4K",
    "Aliwvide video tools"
  ],
  authors: [{ name: "Vido4K" }],
  creator: "Vido4K",
  publisher: "Aliwvide",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://vido4k.aliwvide.com/",
    siteName: "Vido4K",
    title: "Free 4K Video Downloader | Vido4K",
    description:
      "Download direct 4K, 2K, Full HD, MP4, WebM, MOV, M4V and OGG video file links safely with Vido4K.",
    images: [
      {
        url: "/og-image.svg",
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
    images: ["/og-image.svg"]
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
