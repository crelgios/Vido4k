"use client";

import React, { useEffect, useMemo, useState } from "react";

const PLANS = [
  "4K Premium Access",
  "Priority Download Access",
  "Unlimited Daily Access",
  "Fast Processing Access"
];

const CATEGORIES = ["Movies", "Websites"];

const WEBSITE_OPTIONS = {
  Movies: ["Movie Hub", "Film Zone", "Stream Portal", "Cinema Library", "HD Movies"],
  Websites: ["Vido4K", "Media Hub", "Creator Portal", "Cloud Tools", "Xnxx", "Xhamster", "Pornhub", "XVideos", "PornHub", "xHamster", "XNXX", "YouPorn", "RedTube", "Porn Tube8", "Brezzers", "Naughty America", "PornHat", "Porn300", "PornOne", "SexVid", "TnaFlix", "Fuq Ok", "Beeg", "TubeGalore", "XGroovy", "SuperPorn", "Sxyprn", "ZbPorn", "TheyAreHuge", "PerfectGirls", "PussySpace", "CumLouder", "PornDoe", "Xbabe", "VipWank", "AlohaTube", "MatureTube", "TubeV", "Qorno", "4Tube", "MelonsTube", "MegaTube", "PornTube", "BigPorn", "Porn.biz", "ColliderPorn", "Smutr", "Shameless", "HQPorn", "LobsterTube", "PornID", "GrannyTube", "HotPornTubes", "ZZZTube", "HandjobHub", "XCafe", "XXXBunker", "Porn7", "Tiava", "Fux"}]
  };

const ACCESS_TESTS = [
  {
    name: "category list has movies",
    actual: CATEGORIES.includes("Movies"),
    expected: true
  },
  {
    name: "category list has websites",
    actual: CATEGORIES.includes("Websites"),
    expected: true
  },
  {
    name: "movies category has website choices",
    actual: getWebsiteOptions("Movies").length > 0,
    expected: true
  },
  {
    name: "websites category has website choices",
    actual: getWebsiteOptions("Websites").length > 0,
    expected: true
  },
  {
    name: "first movie website is selected by default",
    actual: getDefaultWebsite("Movies"),
    expected: "Movie Hub"
  },
  {
    name: "fallback website option works",
    actual: getDefaultWebsite("Unknown"),
    expected: "Vido4K"
  }
];

export default function PremiumUnlock() {
  const [plan, setPlan] = useState(PLANS[0]);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [website, setWebsite] = useState(getDefaultWebsite(CATEGORIES[0]));
  const [status, setStatus] = useState("idle");
  const failedTests = useMemo(() => runAccessTests(), []);

  const websiteOptions = useMemo(() => getWebsiteOptions(category), [category]);

  useEffect(() => {
    if (!websiteOptions.includes(website)) {
      setWebsite(websiteOptions[0] || getDefaultWebsite(category));
    }
  }, [category, website, websiteOptions]);

  function handleCategoryChange(nextCategory) {
    setCategory(nextCategory);
    setWebsite(getDefaultWebsite(nextCategory));
    setStatus("idle");
  }

  function handleGenerate(event) {
    event.preventDefault();
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("quota-over");
    }, 850);
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
              Vido4K Premium Access
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Premium Unlock
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Select a category, choose a website from the list, and check today&apos;s premium unlock availability.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Feature title="4K Ready" text="Optimized premium flow for high-quality video tasks." />
              <Feature title="Priority Queue" text="Premium requests are prepared ahead of standard traffic." />
              <Feature title="Fast Access" text="Clean unlock request system with instant status checking." />
              <Feature title="Simple Selection" text="Pick a category and website before checking availability." />
            </div>
          </div>

          <form onSubmit={handleGenerate} className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:p-6">
            <div className="rounded-3xl bg-slate-950 p-5 md:p-6">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold">Generate Access</h2>
                  <p className="mt-1 text-sm text-slate-400">Check today&apos;s premium unlock availability</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <Icon name="lock" className="h-6 w-6" />
                </div>
              </div>

              <label htmlFor="plan" className="mb-2 block text-sm font-medium text-slate-200">
                Premium type
              </label>
              <select
                id="plan"
                value={plan}
                onChange={(event) => {
                  setPlan(event.target.value);
                  setStatus("idle");
                }}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
              >
                {PLANS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <label htmlFor="category" className="mb-2 mt-4 block text-sm font-medium text-slate-200">
                Select category
              </label>
              <select
                id="category"
                value={category}
                onChange={(event) => handleCategoryChange(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
              >
                {CATEGORIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <label htmlFor="website" className="mb-2 mt-4 block text-sm font-medium text-slate-200">
                Website
              </label>
              <select
                id="website"
                value={website}
                onChange={(event) => {
                  setWebsite(event.target.value);
                  setStatus("idle");
                }}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
              >
                {websiteOptions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
                disabled={status === "loading"}
              >
                <Icon name={status === "loading" ? "loader" : "key"} className={status === "loading" ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
                {status === "loading" ? "Checking availability..." : "Generate Premium Unlock"}
              </button>

              {status !== "idle" && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  {status === "loading" && (
                    <div>
                      <p className="text-sm font-semibold text-slate-200">Checking today&apos;s availability...</p>
                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-2/3 animate-pulse rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  )}

                  {status === "quota-over" && (
                    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
                      <div className="flex gap-3">
                        <Icon name="alert" className="h-5 w-5 shrink-0" />
                        <div>
                          <p className="font-semibold">Due to high usage, today&apos;s quota is over.</p>
                          <p className="mt-1 text-amber-100/80">Please try again tomorrow.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold">Premium Features</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step number="1" title="Select Access" text="Choose the premium access type you want." />
            <Step number="2" title="Choose Category" text="Select Movies or Websites from the category list." />
            <Step number="3" title="Pick Website" text="Choose one website from the available options." />
            <Step number="4" title="Check Status" text="See current daily availability instantly." />
          </div>
        </div>
      </section>

      {failedTests.length > 0 && <TestStatus failedTests={failedTests} />}

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 Vido4K. Premium Unlock.
      </footer>
    </main>
  );
}

function getWebsiteOptions(category) {
  return WEBSITE_OPTIONS[category] || WEBSITE_OPTIONS.Websites;
}

function getDefaultWebsite(category) {
  return getWebsiteOptions(category)[0] || "Vido4K";
}

function runAccessTests() {
  return ACCESS_TESTS.map((test) => ({
    ...test,
    passed: test.actual === test.expected
  })).filter((test) => !test.passed);
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
            <Icon name="key" className="h-5 w-5" />
          </div>
          <div>
            <p className="font-black leading-none">Vido4K</p>
            <p className="text-xs text-slate-400">Premium Unlock</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/premium-unlock" className="text-emerald-300 hover:text-emerald-200">Premium</a>
          <a href="/faq" className="hover:text-white">FAQ</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-bold text-white">{title}</h3>
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

function TestStatus({ failedTests }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-6">
      <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5 text-sm text-amber-100">
        <p className="font-bold">Developer checks need attention</p>
        <ul className="mt-3 space-y-2">
          {failedTests.map((test) => (
            <li key={test.name}>{test.name}</li>
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

  if (name === "key") {
    return (
      <svg {...commonProps}>
        <circle cx="7.5" cy="15.5" r="5.5" />
        <path d="m12 11 8-8" />
        <path d="m17 6 3 3" />
        <path d="m14 9 3 3" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
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

  if (name === "alert") {
    return (
      <svg {...commonProps}>
        <path d="M10 4 2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2L14 4a2 2 0 0 0-4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 2 4 6v6c0 5 8 10 8 10s8-5 8-10V6l-8-4Z" />
    </svg>
  );
}
