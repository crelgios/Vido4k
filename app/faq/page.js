import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K direct video file downloads.",
  alternates: { canonical: "/faq" }
};

const faqs = [
  {
    q: "What is Vido4K?",
    a: "Vido4K is a browser-based tool for direct video file links such as MP4, WebM, MOV, M4V, and OGG."
  },
  {
    q: "Can it download protected platform videos?",
    a: "No. The tool does not bypass protected platforms. It shows a clear error for unsupported links."
  },
  {
    q: "Does Vido4K store my videos?",
    a: "No. Direct file downloads are handled by your browser."
  },
  {
    q: "Why is a popunder not showing every click?",
    a: "Popunder display depends on the ad network, browser popup rules, ad blockers, site approval, fill rate, and session limits."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-emerald-300">← Back home</Link>
        <h1 className="mt-6 text-4xl font-black">FAQ</h1>
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
