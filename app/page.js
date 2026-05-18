import VideoDownloader from "@/components/VideoDownloader";

export const metadata = {
  title: "Vido4K - Online Video Downloader",
  description:
    "Fast browser-based video downloader for direct video file links with 4K, 2K, Full HD, and mobile quality labels.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <VideoDownloader />;
}
