import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for Vido4K."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300">← Back to Home</Link>
        <h1 className="mt-6 text-4xl font-black">Terms of Use</h1>
        <div className="mt-8 space-y-5 leading-7 text-slate-300">
          <p>Vido4K is provided as a browser-based tool for direct video file links that users own or have permission to use.</p>
          <p>Users are responsible for ensuring they have the legal right to access and download any file they use with this website.</p>
          <p>Do not use this website to bypass restrictions, copy protected content, or violate any third-party terms.</p>
          <p>The website may include sponsored links and advertising from third-party ad networks.</p>
        </div>
      </div>
    </main>
  );
}
