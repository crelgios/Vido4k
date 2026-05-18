export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vido4K."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-slate-300 md:p-10">
        <a href="/" className="text-sm text-emerald-300">← Back to home</a>
        <h1 className="mt-6 text-3xl font-black text-white">Privacy Policy</h1>
        <p className="mt-4">Vido4K is designed as a browser-based direct video file downloader. We do not ask users to create an account to use the basic tool.</p>
        <h2 className="mt-8 text-xl font-bold text-white">Information we process</h2>
        <p className="mt-2">When you paste a URL, the page checks the link format in your browser. Direct downloads are handled by your browser from the source URL.</p>
        <h2 className="mt-8 text-xl font-bold text-white">Advertising</h2>
        <p className="mt-2">This website may use third-party advertising networks. These networks may use cookies or similar technologies to show ads and measure performance.</p>
        <h2 className="mt-8 text-xl font-bold text-white">No video storage</h2>
        <p className="mt-2">This website does not store downloaded videos on our server.</p>
        <h2 className="mt-8 text-xl font-bold text-white">Contact</h2>
        <p className="mt-2">For questions, use the contact page on this website.</p>
      </article>
    </main>
  );
}
