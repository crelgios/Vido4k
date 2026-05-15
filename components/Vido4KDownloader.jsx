"use client";

import { useState } from "react";

export default function Vido4KDownloader() {
  const [url, setUrl] = useState("");

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">Vido4K</h1>
        <p className="mt-4 text-slate-300 text-lg">
          Free 4K Video Downloader for direct MP4, WebM, MOV, M4V and OGG links.
        </p>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <label className="block mb-3 text-sm text-slate-400">
            Paste direct video URL
          </label>

          <input
            type="url"
            placeholder="https://example.com/video.mp4"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-2xl bg-slate-800 p-4 outline-none"
          />

          <button className="mt-5 bg-emerald-400 text-black font-bold px-6 py-3 rounded-2xl">
            Get Video
          </button>
        </div>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="bg-slate-900 rounded-3xl p-6">
            <h2 className="font-bold text-xl">4K Support</h2>
            <p className="mt-3 text-slate-400">
              Download direct 4K and Full HD video files quickly.
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
      </div>
    </main>
  );
}
