export const metadata = {
  title: "Contact",
  description: "Contact Vido4K.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-emerald-300">← Back to Home</a>
        <h1 className="mt-8 text-4xl font-black">Contact</h1>
        <p className="mt-4 leading-7 text-slate-300">
          For support, feedback, or website updates, contact the Vido4K team.
        </p>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-slate-400">Email</p>
          <p className="mt-2 font-semibold text-white">support@vido4k.aliwvide.com</p>
        </div>
      </div>
    </main>
  );
}
