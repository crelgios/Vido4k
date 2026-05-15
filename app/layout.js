import "./globals.css";

export const metadata = {
  title: "Free 4K Video Downloader | Vido4K",
  description: "Download online videos in 4K, 2K, Full HD and MP4 format with Vido4K.",
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
  alternates: {
    canonical: "https://vido4k.aliwvide.com/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
