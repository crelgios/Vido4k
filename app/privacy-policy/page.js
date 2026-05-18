import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vido4K video downloader.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-black">Privacy Policy</h1>

        <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
          <p>
            Vido4K is designed as a browser-based tool for direct video file links.
            We do not intentionally store user video files on our server.
          </p>

          <p>
            Third-party advertising partners may use cookies, scripts, or similar
            technologies to show ads and measure performance. These third parties
            may collect limited device, browser, and interaction information.
          </p>

          <p>
            Do not submit private, copyrighted, or sensitive video links unless you
            own the content or have permission to use it.
          </p>
        </div>
      </div>
    </main>
  );
}
