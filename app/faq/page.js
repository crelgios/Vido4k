export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K video tools.",
  alternates: { canonical: "/faq" }
};

const faqs = [
  {
    q: "What is Vido4K?",
    a: "Vido4K is a browser-based video tool page for direct video file links and related access checks."
  },
  {
    q: "Does Vido4K store videos?",
    a: "No. The downloader page is designed for direct video file links and browser downloads."
  },
  {
    q: "Why do I see a quota message?",
    a: "The Premium Unlock page shows current availability status for the selected access type."
  },
  {
    q: "Why are ads not showing?",
    a: "Ads may not show if your browser blocks popups, you use an ad blocker, the domain is not approved, or ad fill is unavailable."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 flex gap-4 text-sm text-slate-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/premium-unlock" className="hover:text-white">Premium</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>

        <h1 className="text-4xl font-black">FAQ</h1>
        <p className="mt-3 text-slate-300">Common questions about Vido4K.</p>

        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <section key={item.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-bold">{item.q}</h2>
              <p className="mt-2 leading-7 text-slate-300">{item.a}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
