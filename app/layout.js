import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://vido4k.aliwvide.com"),
  title: {
    default: "Free 4K Video Downloader | Vido4K",
    template: "%s | Vido4K"
  },
  description:
    "Download online videos in 4K, 2K, Full HD and MP4 format with Vido4K. Fast browser-based video downloader for direct video links and reels.",
  keywords: [
    "youtube video downloader 4k",
    "online video downloader",
    "video download",
    "download reels",
    "instagram reels downloader",
    "facebook video downloader",
    "twitter video downloader",
    "capcut download",
    "capcut template",
    "vidmate alternative",
    "vidmate app",
    "mp4 downloader",
    "4k downloader",
    "hd video downloader",
    "free video downloader",
    "browser video downloader",
    "download online videos",
    "fast video downloader",
    "direct video downloader",
    "online mp4 downloader"
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
      "Download online videos in 4K, 2K, Full HD and MP4 format with Vido4K. Fast browser-based video downloader for direct video links and reels.",
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
      "Download online videos in 4K, 2K, Full HD and MP4 format with Vido4K. Fast browser-based video downloader for direct video links and reels.",
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
