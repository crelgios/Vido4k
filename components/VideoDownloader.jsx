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

const ADSTERRA_POPUNDER_SRC =
  "https://pl29467569.effectivecpmnetwork.com/a1/a2/e0/a1a2e057be361777625bc829a13d221e.js";

const ADSTERRA_SOCIAL_BAR_SRC =
  "https://pl29467549.effectivecpmnetwork.com/a7/d6/af/a7d6af66590bc3bfb8f2bb7af9abe994.js";

const ADSTERRA_NATIVE_SRC =
  "https://pl29467568.effectivecpmnetwork.com/d76ee3c8af933e6d5fa2bab0b4f1c6e6/invoke.js";

const ADSTERRA_NATIVE_CONTAINER_ID =
  "container-d76ee3c8af933e6d5fa2bab0b4f1c6e6";

const ADSTERRA_SMART_LINK =
  "https://www.effectivecpmnetwork.com/u96cyqf4ax?key=63e83ecd04b9bd04425fd41880e1fc1a";

const TEST_CASES = [
  { name: "direct mp4 is accepted", input: "https://example.com/video.mp4", expectedType: "ready" },
  { name: "direct webm with query is accepted", input: "https://cdn.example.com/clip.webm?download=1", expectedType: "ready" },
  { name: "uppercase extension is accepted", input: "https://example.com/VIDEO.MP4", expectedType: "ready" },
  { name: "protected platform is blocked", input: "https://www.youtube.com/watch?v=abc123", expectedType: "platform" },
  { name: "non video page is rejected", input: "https://example.com/page", expectedType: "not-video-file" },
  { name: "ftp link is rejected", input: "ftp://example.com/video.mp4", expectedType: "protocol" },
  { name: "bad url is rejected", input: "not a url", expectedType: "invalid" }
];

const SITE_NAME_TEST_CASES = [
  { name: "suggests site name from simple domain", input: "https://example.com/video.mp4", expectedSiteName: "example" },
  { name: "suggests site name from subdomain", input: "https://cdn.example.com/clip.webm?download=1", expectedSiteName: "example" },
  { name: "suggests site name from Facebook URL", input: "https://www.facebook.com/watch/?v=123456", expectedSiteName: "facebook" },
  { name: "keeps current site name for invalid URL", input: "not a url", currentSiteName: "my-video", expectedSiteName: "my-video" }
];

export default function VideoDownloader() {
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("my-video");
  const [quality, setQuality] = useState("4K 2160p");
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);

  const timersRef = useRef([]);

  const check = useMemo(() => validateUrl(url), [url]);
  const safeFileName = useMemo(() => normalizeFileName(siteName), [siteName]);
  const failedTests = useMemo(() => runTests(), []);

  useEffect(() => {
    loadExternalAdScript("adsterra-popunder-script", ADSTERRA_POPUNDER_SRC);
    loadExternalAdScript("adsterra-social-bar-script", ADSTERRA_SOCIAL_BAR_SRC);

    return () => clearTimers(timersRef);
  }, []);

  function resetForNewUrl(nextUrl) {
    clearTimers(timersRef);
    setUrl(nextUrl);
    setSiteName(getSiteNameFromUrl(nextUrl, siteName));
    setStatus("idle");
    setProgress(0);
  }

  function handleSubmit(event) {
    event.preventDefault();

    loadExternalAdScript("adsterra-popunder-script", ADSTERRA_POPUNDER_SRC);
    loadExternalAdScript("adsterra-social-bar-script", ADSTERRA_SOCIAL_BAR_SRC);

    const currentCheck = validateUrl(url);

    clearTimers(timersRef);
    setStatus("checking");
    setProgress(0);

    const steps = [20, 45, 70, 100];

    steps.forEach((value, index) => {
      const timer = window.setTimeout(() => {
        setProgress(value);

        if (index === steps.length - 1) {
          setStatus(currentCheck.ok ? "ready" : "error");
        }
      }, 350 * (index + 1));

      timersRef.current.push(timer);
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="relative overflow-hidden px-5 py-12 md:py-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <Icon name="sparkles" className="h-4 w-4" />
              Fast direct video file downloader
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Online Video Downloader
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Paste a direct video file link and prepare a browser download. Unsupported protected-platform links show a clear error instead of trying to bypass restrictions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:p-6">
            <div className="rounded-3xl bg-slate-950 p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">Paste video link</h2>
                  <p className="mt-1 text-sm text-slate-400">Check and prepare your download</p>
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
                  type="text"
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
                    <option>4K 2160p</option>
                    <option>2K 1440p</option>
                    <option>Full HD 1080p</option>
                    <option>HD 720p</option>
                    <option>Mobile 480p</option>
                    <option>Original file</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="site-name" className="mb-2 block text-sm font-medium text-slate-200">
                    Site name
                  </label>

                  <input
                    id="site-name"
                    type="text"
                    value={siteName}
                    onChange={(event) => setSiteName(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
                    placeholder="facebook"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!url.trim() || status === "checking"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                <Icon name={status === "checking" ? "loader" : "play"} className={status === "checking" ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
                {status === "checking" ? "Checking video..." : "Get Video"}
              </button>

              <AdBlock />

              {status !== "idle" && (
                <ResultBox status={status} progress={progress} check={check} quality={quality} url={url} safeFileName={safeFileName} />
              )}
            </div>
          </form>
        </div>
      </section>

      <section id="features" className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
        <FeatureCard icon="shield" title="Safe checks" text="The website checks whether the link is a direct video file or a protected platform URL." />
        <FeatureCard icon="globe" title="Browser based" text="Direct file links download through the browser. This design does not store user videos." />
        <FeatureCard icon="file" title="Supported files" text="Works with direct MP4, WebM, MOV, M4V, and OGG file URLs." />
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step number="1" title="Paste link" text="Add your video URL." />
            <Step number="2" title="Check video" text="The site validates the URL." />
            <Step number="3" title="Prepare file" text="Direct video files are prepared." />
            <Step number="4" title="Download or error" text="Get a button or error." />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Faq q="Can this download protected platform videos?" a="No. It checks unsupported links and shows an error because this site does not bypass platform restrictions." />
          <Faq q="What links can users download?" a="Direct video file URLs such as MP4, WebM, MOV, M4V, and OGG links that the user owns or has permission to use." />
          <Faq q="Will videos be stored on my server?" a="No. This design uses browser downloads for direct file links." />
          <Faq q="Can I add video compressor later?" a="Yes. Upload-based tools like compressor, trimmer, watermark, and converter can be added separately." />
        </div>
      </section>

      {failedTests.length > 0 && <TestStatus failedTests={failedTests} />}

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 Vido4K. Built for direct video file downloads.
      </footer>
    </main>
  );
}

function loadExternalAdScript(id, src) {
  if (typeof document === "undefined") return;
  if (!src) return;

  const existingScript = document.getElementById(id);
  if (existingScript) return;

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  document.body.appendChild(script);
}

function loadNativeAd() {
  if (typeof document === "undefined") return;

  const container = document.getElementById(ADSTERRA_NATIVE_CONTAINER_ID);
  if (!container) return;

  const existingScript = document.getElementById("adsterra-native-script");
  if (existingScript) return;

  const script = document.createElement("script");
  script.id = "adsterra-native-script";
  script.src = ADSTERRA_NATIVE_SRC;
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  document.body.appendChild(script);
}

function AdBlock() {
  useEffect(() => {
    loadNativeAd();
  }, []);

  return (
    <div className="mt-5 space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs text-slate-400">
        <p className="mb-2">Advertisement</p>
        <div id={ADSTERRA_NATIVE_CONTAINER_ID} className="min-h-[90px]" />
      </div>

      <a
        href={ADSTERRA_SMART_LINK}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="block rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-emerald-300 hover:bg-white/5"
      >
        Sponsored link
      </a>
    </div>
  );
}

function ResultBox({ status, progress, check, quality, url, safeFileName }) {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-300">
          {status === "checking" && "Fetching video information"}
          {status === "ready" && "Video file is ready"}
          {status === "error" && "Download unavailable"}
        </span>
        <span className="font-semibold text-white">{progress}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full bg-emerald-400 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {status === "ready" && (
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
          <div className="flex gap-3">
            <Icon name="check" className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-semibold">Ready to download in {quality}</p>
              <p className="mt-1 text-emerald-100/80">This is a direct video file link, so your browser can download it safely.</p>
              <a href={url.trim()} download={safeFileName} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2 font-bold text-slate-950 hover:bg-emerald-200">
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
              <p className="font-semibold">Error: video cannot be downloaded from this link.</p>
              <p className="mt-1 text-rose-100/80">{check.message}</p>
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
    return { ok: false, type: "empty", message: "Paste a video link first." };
  }

  let parsed;
  try {
    parsed = new URL(clean);
  } catch {
    return { ok: false, type: "invalid", message: "Please enter a valid URL, for example https://example.com/video.mp4." };
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { ok: false, type: "protocol", message: "Only http and https video links are supported." };
  }

  const host = parsed.hostname.toLowerCase().replace("www.", "");
  const isBlocked = BLOCKED_DOMAINS.some((domain) => host === domain || host.endsWith(`.${domain}`));

  if (isBlocked) {
    return {
      ok: false,
      type: "platform",
      message: "This looks like a protected platform link. This website cannot download protected platform videos. Use official download options or direct video files you own."
    };
  }

  const pathname = parsed.pathname.toLowerCase();
  const hasVideoExtension = VIDEO_EXTENSIONS.some((extension) => pathname.endsWith(`.${extension}`));

  if (!hasVideoExtension) {
    return { ok: false, type: "not-video-file", message: "This does not look like a direct video file link. Try a URL ending in MP4, WebM, MOV, M4V, or OGG." };
  }

  return { ok: true, type: "ready", message: "Direct video file detected." };
}

function getSiteNameFromUrl(value, fallbackSiteName = "my-video") {
  const clean = String(value || "").trim();

  if (!clean) return fallbackSiteName || "my-video";

  try {
    const parsed = new URL(clean);
    const host = parsed.hostname.toLowerCase().replace(/^www\./, "").replace(/^m\./, "");

    if (!host) return fallbackSiteName || "my-video";

    const parts = host.split(".").filter(Boolean);
    let siteName = parts[0] || fallbackSiteName || "my-video";

    if (parts.length >= 2) {
      const multiPartTlds = new Set(["co.in", "co.uk", "com.au", "com.br", "com.tr", "com.pk"]);
      const lastTwoParts = parts.slice(-2).join(".");

      if (multiPartTlds.has(lastTwoParts) && parts.length >= 3) {
        siteName = parts[parts.length - 3];
      } else {
        siteName = parts[parts.length - 2];
      }
    }

    return normalizeSiteName(siteName || fallbackSiteName || "my-video");
  } catch {
    return fallbackSiteName || "my-video";
  }
}

function normalizeSiteName(value) {
  const raw = String(value || "").trim().toLowerCase();
  const allowed = "abcdefghijklmnopqrstuvwxyz0123456789-_";

  const cleaned = raw
    .split("")
    .map((char) => {
      if (char === " ") return "-";
      return allowed.includes(char) ? char : "-";
    })
    .join("")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return cleaned || "my-video";
}

function normalizeFileName(value) {
  const cleaned = normalizeSiteName(value);
  return cleaned.endsWith(".mp4") ? cleaned : `${cleaned}.mp4`;
}

function runTests() {
  const validationResults = TEST_CASES.map((test) => {
    const actualType = validateUrl(test.input).type;
    return { ...test, expected: test.expectedType, actual: actualType, passed: actualType === test.expectedType };
  });

  const siteNameResults = SITE_NAME_TEST_CASES.map((test) => {
    const actualSiteName = getSiteNameFromUrl(test.input, test.currentSiteName);
    return { ...test, expected: test.expectedSiteName, actual: actualSiteName, passed: actualSiteName === test.expectedSiteName };
  });

  return [...validationResults, ...siteNameResults].filter((test) => !test.passed);
}

function clearTimers(timersRef) {
  timersRef.current.forEach((timer) => window.clearTimeout(timer));
  timersRef.current = [];
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
            <Icon name="download" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-black leading-none">Vido4K</p>
            <p className="text-xs text-slate-400">Direct video downloader</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/premium-unlock" className="hover:text-white">Premium</a>
          <a href="/faq" className="hover:text-white">FAQ</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
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
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-slate-950">{number}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
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

function TestStatus({ failedTests }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-6">
      <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5 text-sm text-amber-100">
        <p className="font-bold">Developer checks need attention</p>
        <ul className="mt-3 space-y-2">
          {failedTests.map((test) => (
            <li key={test.name}>{test.name}: expected {test.expected}, got {test.actual}</li>
          ))}
        </ul>
      </div>
    </section>
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

  if (name === "download") return <svg {...commonProps}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>;
  if (name === "link") return <svg {...commonProps}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></svg>;
  if (name === "sparkles") return <svg {...commonProps}><path d="m12 3 2 5 5 1-5 2-2 5-2-5-5-2 5-1 2-5Z" /><path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" /></svg>;
  if (name === "loader") return <svg {...commonProps}><path d="M21 12a9 9 0 1 1-6-8" /></svg>;
  if (name === "play") return <svg {...commonProps}><path d="M8 5v14l11-7-11-7Z" /></svg>;
  if (name === "check") return <svg {...commonProps}><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>;
  if (name === "alert") return <svg {...commonProps}><path d="M10 4 2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2L14 4a2 2 0 0 0-4 0Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>;
  if (name === "shield") return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>;
  if (name === "globe") return <svg {...commonProps}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20" /><path d="M12 2a15 15 0 0 0 0 20" /></svg>;
  if (name === "file") return <svg {...commonProps}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="m10 13 5 3-5 3v-6Z" /></svg>;

  return <svg {...commonProps}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></svg>;
}
