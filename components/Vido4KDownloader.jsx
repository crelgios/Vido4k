"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const BLOCKED_DOMAINS = [
  "youtube.com",
  "youtu.be",
  "instagram.com",
  "facebook.com",
  "fb.watch",
  "threads.net"
];

const VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "m4v", "ogg"];

const QUALITY_OPTIONS = [
  "4K 2160p",
  "2K 1440p",
  "Full HD 1080p",
  "HD 720p",
  "Mobile 480p",
  "Original file"
];

export default function Vido4KDownloader() {
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("my-video.mp4");
  const [quality, setQuality] = useState("4K 2160p");
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const timersRef = useRef([]);

  const check = useMemo(() => validateUrl(url), [url]);
  const safeFileName = useMemo(() => normalizeFileName(fileName), [fileName]);

  useEffect(() => {
    return () => clearTimers(timersRef);
  }, []);

  function resetForNewUrl(nextUrl) {
    clearTimers(timersRef);
    setUrl(nextUrl);
    setStatus("idle");
    setProgress(0);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const currentCheck = validateUrl(url);
    clearTimers(timersRef);
    setStatus("checking");
    setProgress(0);

    const steps = [18, 44, 72, 100];

    steps.forEach((value, index) => {
      const timer = window.setTimeout(() => {
        setProgress(value);
        if (index === steps.length - 1) {
          setStatus(currentCheck.ok ? "ready" : "error");
        }
      }, 300 * (index + 1));

      timersRef.current.push(timer);
    });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Header />

      <section className="relative px-5 py-12 md:py-20">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-48 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <Icon name="sparkles" className="h-4 w-4" />
              Direct video file downloader
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Free 4K Video Downloader
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Vido4K helps you prepare browser downloads from direct video file links. It supports MP4, WebM, MOV, M4V and OGG file URLs, with clear service messages for unsupported links.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <Badge>4K 2160p</Badge>
              <Badge>2K 1440p</Badge>
              <Badge>MP4</Badge>
              <Badge>WebM</Badge>
              <Badge>No server storage</Badge>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-glow backdrop-blur-xl md:p-6"
          >
            <div className="rounded-3xl bg-slate-950 p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">Paste video link</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Check and prepare your file
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <Icon name="download" className="h-6 w-6" />
                </div>
              </div>

              <label htmlFor="video-url" className="mb-2 block text-sm font-medium text-slate-200">
                Video URL
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3">
                <Icon name="link" className="h-5 w-5 text-slate-400" />
                <input
                  id="video-url"
                  type="url"
                  inputMode="url"
                  value={url}
                  onChange={(event) => resetForNewUrl(event.target.value)}
                  placeholder="https://example.com/video.mp4"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quality" className="mb-2 block text-sm font-medium text-slate-200">
                    Quality label
                  </label>
                  <select
                    id="quality"
                    value={quality}
                    onChange={(event) => setQuality(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
                  >
                    {QUALITY_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="file-name" className="mb-2 block text-sm font-medium text-slate-200">
                    File name
                  </label>
                  <input
                    id="file-name"
                    type="text"
                    value={fileName}
                    onChange={(event) => setFileName(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
                    placeholder="my-video.mp4"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!url.trim() || status === "checking"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                <Icon
                  name={status === "checking" ? "loader" : "play"}
                  className={status === "checking" ? "h-4 w-4 animate-spin" : "h-4 w-4"}
                />
                {status === "checking" ? "Checking video..." : "Get Video"}
              </button>

              {status !== "idle" && (
                <ResultBox
                  status={status}
                  progress={progress}
                  check={check}
                  quality={quality}
                  url={url}
                  safeFileName={safeFileName}
                />
              )}
            </div>
          </form>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
        <FeatureCard
          icon="shield"
          title="Safe checks"
          text="Vido4K checks if the link is a direct video file or an unsupported protected-platform URL."
        />
        <FeatureCard
          icon="globe"
          title="Browser based"
          text="Direct file links are handled through the browser. Vido4K does not upload or store user videos."
        />
        <FeatureCard
          icon="file"
          title="Supported files"
          text="Works with direct MP4, WebM, MOV, M4V and OGG file URLs."
        />
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Simple process
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">How Vido4K works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step number="1" title="Paste link" text="Add a video URL in the input box." />
            <Step number="2" title="Check video" text="The page validates the URL and shows a status." />
            <Step number="3" title="Prepare file" text="Choose a quality label and clean file name." />
            <Step number="4" title="Download or retry" text="Get a download option or a retry message." />
          </div>
        </div>
      </section>

      <section id="seo-content" className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-5 md:grid-cols-2">
          <ArticleCard
            title="Online 4K video downloader"
            text="Vido4K is made for users who want a fast and simple online video downloader experience with 4K, 2K, Full HD and MP4-focused labels."
          />
          <ArticleCard
            title="Fast browser-based video tool"
            text="The interface is lightweight, mobile-friendly and designed with SEO-ready pages, sitemap, robots.txt and metadata for Google indexing."
          />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Questions
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Vido4K FAQ</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Faq
            q="Can Vido4K download videos in 4K?"
            a="Vido4K includes 4K and 2K quality labels. The final quality depends on the original video file."
          />
          <Faq
            q="What links can users try?"
            a="Users can paste video links and the page will show either a download option or a service retry message."
          />
          <Faq
            q="Will videos be stored on my server?"
            a="No. This design works in the browser and does not upload user videos to your server."
          />
          <Faq
            q="Can more tools be added later?"
            a="Yes. Video compressor, trimmer, converter and audio tools can be added later as separate pages under the same Vido4K brand."
          />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 Vido4K. Built for fast video downloads.
      </footer>
    </main>
  );
}

function ResultBox({ status, progress, check, quality, url, safeFileName }) {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-300">
          {status === "checking" && "Fetching video information"}
          {status === "ready" && "Video file is ready"}
          {status === "error" && "Please try again after some time."}
        </span>
        <span className="font-semibold text-white">{progress}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {status === "ready" && (
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          <div className="flex gap-3">
            <Icon name="check" className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-semibold">Ready to download in {quality}</p>
              <p className="mt-1 text-emerald-100/80">
                This is a direct video file link, so your browser can open or download it.
              </p>
              <a
                href={url.trim()}
                download={safeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2 font-bold text-slate-950 hover:bg-emerald-200"
              >
                <Icon name="download" className="h-4 w-4" />
                Download Now
              </a>
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100">
          <div className="flex gap-3">
            <Icon name="alert" className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-semibold">
                Please try again after some time.
              </p>
              <p className="mt-1 text-rose-100/80">
                We are currently fixing this issue. Please try again later.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function validateUrl(value) {
  const clean = String(value || "").trim();

  if (!clean) {
    return { ok: false, type: "empty" };
  }

  let parsed;

  try {
    parsed = new URL(clean);
  } catch {
    return { ok: false, type: "invalid" };
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { ok: false, type: "protocol" };
  }

  const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
  const isBlocked = BLOCKED_DOMAINS.some(
    (domain) => host === domain || host.endsWith(`.${domain}`)
  );

  if (isBlocked) {
    return { ok: false, type: "platform" };
  }

  const pathname = parsed.pathname.toLowerCase();
  const hasVideoExtension = VIDEO_EXTENSIONS.some((extension) =>
    pathname.endsWith(`.${extension}`)
  );

  if (!hasVideoExtension) {
    return { ok: false, type: "not-video-file" };
  }

  return { ok: true, type: "ready" };
}

function normalizeFileName(value) {
  const raw = String(value || "").trim();
  const cleaned = raw
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_.-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^\.+/, "")
    .slice(0, 80);

  const finalName = cleaned || "my-video.mp4";
  const lowerName = finalName.toLowerCase();
  const hasExtension = VIDEO_EXTENSIONS.some((extension) =>
    lowerName.endsWith(`.${extension}`)
  );

  return hasExtension ? finalName : `${finalName}.mp4`;
}

function clearTimers(timersRef) {
  timersRef.current.forEach((timer) => window.clearTimeout(timer));
  timersRef.current = [];
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3" aria-label="Vido4K home">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
            <Icon name="download" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-black leading-none">Vido4K</p>
            <p className="text-xs text-slate-400">Fast 4K video tool</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
      {children}
    </span>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-3xl bg-slate-900 p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-slate-950">
        {number}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function ArticleCard({ title, text }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </article>
  );
}

function Faq({ q, a }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-bold text-white">{q}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{a}</p>
    </div>
  );
}

function Icon({ name, className = "h-5 w-5" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  if (name === "download") {
    return (
      <svg {...commonProps}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  }

  if (name === "link") {
    return (
      <svg {...commonProps}>
        <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
        <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
      </svg>
    );
  }

  if (name === "sparkles") {
    return (
      <svg {...commonProps}>
        <path d="m12 3 2 5 5 1-5 2-2 5-2-5-5-2 5-1 2-5Z" />
        <path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
      </svg>
    );
  }

  if (name === "loader") {
    return (
      <svg {...commonProps}>
        <path d="M21 12a9 9 0 1 1-6-8" />
      </svg>
    );
  }

  if (name === "play") {
    return (
      <svg {...commonProps}>
        <path d="M8 5v14l11-7-11-7Z" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    );
  }

  if (name === "alert") {
    return (
      <svg {...commonProps}>
        <path d="M10 4 2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2L14 4a2 2 0 0 0-4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20" />
        <path d="M12 2a15 15 0 0 0 0 20" />
      </svg>
    );
  }

  if (name === "file") {
    return (
      <svg {...commonProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="m10 13 5 3-5 3v-6Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </svg>
  );
}
