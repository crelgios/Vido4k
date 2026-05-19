import Link from "next/link";

export default function SimplePage({ title, description, children }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950 px-5 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="text-xl font-black text-emerald-300">
            Vido4K
          </Link>
          <nav className="flex gap-4 text-sm text-slate-300">
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>}
        <div className="prose prose-invert prose-slate mt-8 max-w-none rounded-3xl border border-white/10 bg-white/5 p-6 leading-7 text-slate-200">
          {children}
        </div>
      </section>
    </main>
  );
}
