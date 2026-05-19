export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vido4K.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-emerald-300">← Back to Home</a>
        <h1 className="mt-8 text-4xl font-black">Privacy Policy</h1>
        <div className="mt-8 space-y-5 leading-7 text-slate-300">
          <p>Vido4K does not require users to create an account to use the main downloader page.</p>
          <p>Third-party advertising partners may use cookies or similar technologies to show ads and measure performance.</p>
          <p>Do not submit private or sensitive information in any public link input field.</p>
        </div>
      </div>
    </main>
  );
}
