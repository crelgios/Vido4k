export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vido4K.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 flex gap-4 text-sm text-slate-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <h1 className="text-4xl font-black">Privacy Policy</h1>
        <div className="mt-6 space-y-4 leading-7 text-slate-300">
          <p>Vido4K is designed to process direct links in the browser. The site does not need to store user videos.</p>
          <p>Third-party advertising scripts may collect standard ad delivery and analytics information according to their own policies.</p>
          <p>Do not paste private or sensitive links into public tools unless you understand the risks.</p>
        </div>
      </div>
    </main>
  );
}
