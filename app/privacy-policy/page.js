import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vido4K."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300">← Back to Home</Link>
        <h1 className="mt-6 text-4xl font-black">Privacy Policy</h1>
        <div className="mt-8 space-y-5 leading-7 text-slate-300">
          <p>Vido4K does not store user videos on its server. Direct file links are handled in the browser.</p>
          <p>This website may use third-party advertising scripts. These services may use cookies or similar technologies according to their own policies.</p>
          <p>Users should avoid entering private, sensitive, or unauthorized file links.</p>
          <p>For privacy requests, use the contact page after adding your official support email or contact form.</p>
        </div>
      </div>
    </main>
  );
}
