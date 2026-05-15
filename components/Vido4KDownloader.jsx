"use client";

import { useState } from "react";

const BLOCKED_DOMAINS = [
  "youtube.com",
  "youtu.be",
  "instagram.com",
  "facebook.com",
  "fb.watch",
  "threads.net"
];

const VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "m4v", "ogg"];

export default function Vido4KDownloader() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("4K 2160p");
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("checking");
    setProgress(0);

    const steps = [25, 55, 80, 100];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setProgress(step);
        if (index === steps.length - 1) {
          const result = validateUrl(url);
          setStatus(result.ok ? "ready" : "error");
        }
      }, 350 * (index + 1));
    });
  }

  const result = validateUrl(url);

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-5xl font-bold">Vido4K</h1>
            <p className="mt-3 text-slate-300 text-lg">
              Free 4K Video Downloader for direct MP4, WebM, MOV, M4V and OGG links.
            </p>
          </div>
        </header>

        <section className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <form onSubmit={handleSubmit}>
            <label className="block mb-3 text-sm text-slate-400">
              Paste video URL
            </label>

            <input
              type="url"
              placeholder="https://example.com/video.mp4"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setStatus("idle");
                setProgress(0);
              }}
              className="w-full rounded-2xl bg-slate-800 p-4 outline-none"
            />

            <div className="mt-4">
              <label className="block mb-3 text-sm text-slate-400">
                Quality label
              </label>

              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full rounded-2xl bg-slate-800 p-4 outline-none"
              >
                <option>4K 2160p</option>
                <option>2K 1440p</option>
                <option>Full HD 1080p</option>
                <option>HD 720p</option>
                <option>Mobile 480p</option>
                <option>Original file</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!url.trim() || status === "checking"}
              className="mt-5 bg-emerald-400 text-black font-bold px-6 py-3 rounded-2xl disabled:bg-slate-700 disabled:text-slate-400"
            >
              {status === "checking" ? "Checking video..." : "Get Video"}
            </button>
          </form>

          {status !== "idle" && (
            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">
                  {status === "checking" && "Fetching video information"}
                  {status === "ready" && "Video file is ready"}
                  {status === "error" && "Please try again after some time."}
                </span>
                <span>{progress}%</span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {status === "ready" && (
                <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="font-semibold text-emerald-100">
                    Ready to download in {quality}
                  </p>
                  <p className="mt-1 text-sm text-emerald-100/80">
                    This direct video file can be opened or downloaded by your browser.
                  </p>
                  <a
                    href={url.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="mt-4 inline-block rounded-xl bg-emerald-300 px-4 py-2 font-bold text-slate-950"
                  >
                    Download Now
                  </a>
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100">
                  <p className="font-semibold">
                    Please try again after some time.
                  </p>
                  <p className="mt-1 text-rose-100/80">
                    We are currently fixing this issue. Please try again later.
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="bg-slate-900 rounded-3xl p-6">
            <h2 className="font-bold text-xl">4K Support</h2>
            <p className="mt-3 text-slate-400">
              Download direct 4K, 2K and Full HD video files quickly.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6">
            <h2 className="font-bold text-xl">Fast Browser Tool</h2>
            <p className="mt-3 text-slate-400">
              Browser based downloader with lightweight UI.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6">
            <h2 className="font-bold text-xl">SEO Ready</h2>
            <p className="mt-3 text-slate-400">
              Includes sitemap, robots.txt and metadata for Google indexing.
            </p>
          </div>
        </section>

        <section className="mt-14 bg-slate-900 rounded-3xl p-6">
          <h2 className="text-2xl font-bold">Vido4K FAQ</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-bold">Can I download videos in 4K?</h3>
              <p className="mt-2 text-slate-400">
                Vido4K includes 4K and 2K quality labels. Final quality depends on the original file link.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Does this store videos?</h3>
              <p className="mt-2 text-slate-400">
                No. The tool is browser based and does not store user videos on the server.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-14 border-t border-slate-800 py-8 text-center text-sm text-slate-500">
          © 2026 Vido4K. Built for fast video downloads.
        </footer>
      </div>
    </main>
  );
}

function validateUrl(value) {
  const clean = String(value || "").trim();

  if (!clean) {
    return { ok: false };
  }

  let parsed;

  try {
    parsed = new URL(clean);
  } catch {
    return { ok: false };
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { ok: false };
  }

  const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
  const isBlocked = BLOCKED_DOMAINS.some(
    (domain) => host === domain || host.endsWith(`.${domain}`)
  );

  if (isBlocked) {
    return { ok: false };
  }

  const pathname = parsed.pathname.toLowerCase();
  const hasVideoExtension = VIDEO_EXTENSIONS.some((extension) =>
    pathname.endsWith(`.${extension}`)
  );

  if (!hasVideoExtension) {
    return { ok: false };
  }

  return { ok: true };
}
