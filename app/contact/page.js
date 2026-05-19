export const metadata = {
  title: "Contact",
  description: "Contact Vido4K for support and feedback.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 flex gap-4 text-sm text-slate-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/premium-unlock" className="hover:text-white">Premium</a>
          <a href="/faq" className="hover:text-white">FAQ</a>
        </nav>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h1 className="text-4xl font-black">Contact</h1>
          <p className="mt-3 leading-7 text-slate-300">
            For support, suggestions, or website feedback, contact the Vido4K team through your preferred support channel.
          </p>
          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
            Tip: Add your Formspree endpoint or contact email here before publishing.
          </div>
        </section>
      </div>
    </main>
  );
}
