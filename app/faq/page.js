import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K."
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300">← Back to Home</Link>
        <h1 className="mt-6 text-4xl font-black">FAQ</h1>
        <div className="mt-8 space-y-5">
          <FaqItem title="Can Vido4K download protected platform videos?" text="No. Vido4K does not bypass platform restrictions. It is designed for direct video file links that users own or have permission to use." />
          <FaqItem title="Which links are supported?" text="Direct video file URLs ending in MP4, WebM, MOV, M4V, or OGG are supported." />
          <FaqItem title="Are videos stored on the server?" text="No. The website prepares a browser download for direct file links and does not store user videos." />
          <FaqItem title="Why do ads sometimes not show?" text="Ads can be affected by browser popup blocking, ad blockers, Adsterra approval status, location, fill rate, and testing on localhost." />
        </div>
      </div>
    </main>
  );
}

function FaqItem({ title, text }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </section>
  );
}
