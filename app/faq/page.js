export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K."
};

const faqs = [
  {
    q: "What is Vido4K?",
    a: "Vido4K is a browser-based tool for direct video file links."
  },
  {
    q: "Can I download any video from any website?",
    a: "No. The tool is made for direct video file URLs and does not bypass protected platform restrictions."
  },
  {
    q: "Which file types are supported?",
    a: "MP4, WebM, MOV, M4V, and OGG direct video links are supported."
  },
  {
    q: "Does the website store my video?",
    a: "No. Direct video links download through the browser."
  }
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <a href="/" className="text-sm text-emerald-300">← Back to home</a>
        <h1 className="mt-6 text-3xl font-black">FAQ</h1>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <h2 className="font-bold">{faq.q}</h2>
              <p className="mt-2 leading-7 text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
