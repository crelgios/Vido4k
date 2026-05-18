import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Vido4K."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300">← Back to Home</Link>
        <h1 className="mt-6 text-4xl font-black">Contact</h1>
        <p className="mt-5 leading-7 text-slate-300">
          For support, feedback, or business inquiries, contact the Vido4K team through your preferred contact email.
        </p>
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-300">
            Replace this section with your Formspree form or business email before final launch.
          </p>
        </div>
      </div>
    </main>
  );
}
