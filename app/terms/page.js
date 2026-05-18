export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Vido4K."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-slate-300 md:p-10">
        <a href="/" className="text-sm text-emerald-300">← Back to home</a>
        <h1 className="mt-6 text-3xl font-black text-white">Terms of Use</h1>
        <p className="mt-4">By using Vido4K, you agree to use this website only for lawful purposes and only with video files you own or have permission to download.</p>
        <h2 className="mt-8 text-xl font-bold text-white">Allowed use</h2>
        <p className="mt-2">You may use this tool for direct video file links, such as your own hosted MP4, WebM, MOV, M4V, or OGG files.</p>
        <h2 className="mt-8 text-xl font-bold text-white">Not allowed</h2>
        <p className="mt-2">You may not use this website to bypass platform restrictions, copyright protections, paywalls, login requirements, or technical access controls.</p>
        <h2 className="mt-8 text-xl font-bold text-white">Disclaimer</h2>
        <p className="mt-2">The service is provided as-is. Users are responsible for making sure they have the right to access and download the content they use with this tool.</p>
      </article>
    </main>
  );
}
