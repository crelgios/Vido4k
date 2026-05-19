import SimplePage from "../../components/SimplePage";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  return (
    <SimplePage title="FAQ" description="Common questions about using Vido4K.">
      <h2>Can Vido4K download protected platform videos?</h2>
      <p>No. Vido4K does not bypass platform restrictions. It is designed for direct video file links that you own or have permission to use.</p>
      <h2>Which video links are supported?</h2>
      <p>Direct file URLs ending in MP4, WebM, MOV, M4V, or OGG are supported.</p>
      <h2>Does Vido4K store videos?</h2>
      <p>No. The browser handles direct file downloads, and this website does not store uploaded or downloaded videos.</p>
      <h2>Why do I see an error?</h2>
      <p>The URL may not be a direct video file link, or it may belong to a protected platform.</p>
    </SimplePage>
  );
}
