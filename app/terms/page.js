import SimplePage from "../../components/SimplePage";

export const metadata = {
  title: "Terms",
  description: "Vido4K terms of use.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <SimplePage title="Terms of Use" description="Rules for using Vido4K.">
      <p>Use Vido4K only for video files that you own, created, or have permission to download.</p>
      <p>You are responsible for following copyright laws and the rules of any third-party websites you use.</p>
      <p>Vido4K does not promise that every URL will work. Protected platform links and non-video links may show an error.</p>
      <p>Advertisements may be displayed through third-party ad networks.</p>
    </SimplePage>
  );
}
