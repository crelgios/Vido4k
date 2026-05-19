import SimplePage from "../../components/SimplePage";

export const metadata = {
  title: "Privacy Policy",
  description: "Vido4K privacy policy.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <SimplePage title="Privacy Policy" description="How Vido4K handles privacy.">
      <p>Vido4K is designed to work in the browser for direct video file links. The website does not need to store user videos.</p>
      <p>Third-party ad scripts may use cookies, device information, or similar technologies to show ads and measure performance.</p>
      <p>Do not enter private, sensitive, or copyrighted URLs unless you have permission to use them.</p>
      <p>This policy can be updated as the website grows.</p>
    </SimplePage>
  );
}
