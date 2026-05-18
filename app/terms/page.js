import Link from "next/link";

export const metadata = {
  title: "Terms",
  description: "Terms of use for Vido4K.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-emerald-300">← Back home</Link>
        <h1 className="mt-6 text-4xl font-black">Terms of Use</h1>
        <div className="mt-8 space-y-6 leading-7 text-slate-300">
          <p>
            Vido4K is provided for lawful direct video file downloads only. Users are responsible for making sure they own the content or have permission to download it.
          </p>
          <p>
            Do not use this website to bypass restrictions, copy protected videos, violate copyright, or break the terms of another platform.
          </p>
          <p>
            The website may display third-party advertisements. Ad availability and display behavior are controlled by the ad network and user browser settings.
          </p>
        </div>
      </div>
    </main>
  );
}
