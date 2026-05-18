import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vido4K.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-emerald-300">← Back home</Link>
        <h1 className="mt-6 text-4xl font-black">Privacy Policy</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            Vido4K does not store videos on its server. Direct video file downloads are handled by the user’s browser.
          </p>
          <p>
            The website may use third-party advertisements. Advertising providers may use cookies, scripts, or similar technologies according to their own policies.
          </p>
          <p>
            Contact information shared by email is used only to respond to support or business questions.
          </p>
        </div>
      </div>
    </main>
  );
}
