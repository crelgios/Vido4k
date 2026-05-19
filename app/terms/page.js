export const metadata = {
  title: "Terms",
  description: "Terms of use for Vido4K.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 flex gap-4 text-sm text-slate-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <h1 className="text-4xl font-black">Terms of Use</h1>
        <div className="mt-6 space-y-4 leading-7 text-slate-300">
          <p>Use Vido4K only for content you own, control, or have permission to access and download.</p>
          <p>Do not use this website to bypass restrictions, violate third-party terms, or access protected content without authorization.</p>
          <p>Advertisements and sponsored links may be displayed on the website.</p>
        </div>
      </div>
    </main>
  );
}
