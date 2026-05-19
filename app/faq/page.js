const faqs = [
  {
    q: "What is Vido4K?",
    a: "Vido4K is a browser-based tool for checking and downloading direct video file links."
  },
  {
    q: "Can it download protected platform videos?",
    a: "No. Vido4K does not bypass protected platforms or access restrictions."
  },
  {
    q: "Which file links are supported?",
    a: "Direct MP4, WebM, MOV, M4V, and OGG video file URLs are supported."
  },
  {
    q: "Does Vido4K store videos?",
    a: "No. Direct files are handled through the browser download flow."
  }
];

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-emerald-300">← Back to Home</a>
        <h1 className="mt-8 text-4xl font-black">FAQ</h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <section key={item.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">{item.q}</h2>
              <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
