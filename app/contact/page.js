import SimplePage from "../../components/SimplePage";

export const metadata = {
  title: "Contact",
  description: "Contact Vido4K support.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <SimplePage title="Contact" description="Need help or want to report an issue?">
      <p>For support, feedback, or business questions, contact the site owner through your preferred public contact method.</p>
      <p>If you want to add a contact form later, connect a provider like Formspree and keep the endpoint in an environment variable.</p>
    </SimplePage>
  );
}
