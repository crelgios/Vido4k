import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Vido4K video downloader.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-black">Terms of Use</h1>

        <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
          <p>
            You may use this website only for lawful purposes and only with video
            files that you own or have permission to download.
          </p>

          <p>
            This website does not provide a tool to bypass protected-platform
            restrictions. Unsupported links may show an error.
          </p>

          <p>
            You are responsible for following copyright rules, platform terms, and
            local laws.
          </p>
        </div>
      </div>
    </main>
  );
}
