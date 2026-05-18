import Link from "next/link";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Vido4K.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-black">FAQ</h1>

        <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
          <h2 className="text-2xl font-bold text-white">Can this download protected platform videos?</h2>
          <p>
            No. The tool checks unsupported links and shows an error instead of
            bypassing platform restrictions.
          </p>

          <h2 className="text-2xl font-bold text-white">Which links are supported?</h2>
          <p>
            Direct video file URLs such as MP4, WebM, MOV, M4V, and OGG links.
          </p>

          <h2 className="text-2xl font-bold text-white">Does Vido4K store videos?</h2>
          <p>
            No. The browser handles direct file downloads.
          </p>
        </div>
      </div>
    </main>
  );
}
