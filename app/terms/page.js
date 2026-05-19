export const metadata = {
  title: "Terms",
  description: "Terms of use for Vido4K.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-emerald-300">← Back to Home</a>
        <h1 className="mt-8 text-4xl font-black">Terms of Use</h1>
        <div className="mt-8 space-y-5 leading-7 text-slate-300">
          <p>Vido4K is provided as a browser-based tool for direct video file links and site access availability checks.</p>
          <p>You are responsible for using the website lawfully and only with content you own or have permission to access.</p>
          <p>Vido4K does not guarantee access, availability, or compatibility with every link or service.</p>
        </div>
      </div>
    </main>
  );
}
