"use client";

import { useState } from "react";
import { CloseIcon } from "@/components/icons";

export function SellerModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/sellers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0c0916] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Sell on Zylixstore</h3>
          <button onClick={onClose} aria-label="Close" className="text-white/50 hover:text-white">
            <CloseIcon />
          </button>
        </div>

        {status === "done" ? (
          <p className="text-sm text-white/70">
            Thanks{form.name ? `, ${form.name}` : ""}! Your seller application has been received. We&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/30 focus:border-fuchsia-500/50"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/30 focus:border-fuchsia-500/50"
            />
            <input
              required
              placeholder="Brand / store name"
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/30 focus:border-fuchsia-500/50"
            />
            <textarea
              placeholder="Tell us about what you sell (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/30 focus:border-fuchsia-500/50"
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-2.5 text-sm font-bold disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Apply to sell"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
