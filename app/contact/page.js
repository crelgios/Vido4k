import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Vido4K.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-black">Contact</h1>

        <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
          <p>
            For support, feedback, or business inquiries, contact the website owner.
          </p>

          <p>
            Add your contact email or Formspree form here before publishing.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-slate-400">Example email:</p>
            <p className="mt-2 font-semibold text-white">support@vido4k.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
