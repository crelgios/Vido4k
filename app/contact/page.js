export const metadata = {
  title: "Contact",
  description: "Contact Vido4K."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <a href="/" className="text-sm text-emerald-300">← Back to home</a>
        <h1 className="mt-6 text-3xl font-black">Contact</h1>
        <p className="mt-4 leading-7 text-slate-300">Use this page for support, feedback, or business questions about Vido4K.</p>
        <form className="mt-8 grid gap-4">
          <input className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" placeholder="Your name" />
          <input className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" placeholder="Your email" type="email" />
          <textarea className="min-h-36 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none" placeholder="Your message" />
          <button type="button" className="rounded-2xl bg-emerald-400 px-5 py-3 font-bold text-slate-950">Send Message</button>
        </form>
        <p className="mt-4 text-sm text-slate-400">Connect this form to Formspree or your backend when you are ready.</p>
      </section>
    </main>
  );
}
