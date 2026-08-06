"use client";

import { useState } from "react";

function BagLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z" stroke="url(#bag)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" stroke="url(#bag)" strokeWidth="1.6" strokeLinecap="round" />
      <defs>
        <linearGradient id="bag" x1="4" y1="4" x2="20" y2="22">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="55%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>;
}
function HeartIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20.5s-7.5-4.6-9.8-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.8 5.5c-2.3 4.4-9.8 9-9.8 9Z" strokeLinejoin="round" /></svg>;
}
function UserIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.4" /><path d="M4.8 20c1.2-3.5 4-5.4 7.2-5.4s6 1.9 7.2 5.4" strokeLinecap="round" /></svg>;
}
function CartIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h2l1.6 10.2a2 2 0 0 0 2 1.8h7.4a2 2 0 0 0 2-1.6L20.5 9H6.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="21" r="1.3" /><circle cx="17.5" cy="21" r="1.3" /></svg>;
}
function ShoppingBagFeatureIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 8h12l1 12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20L6 8Z" strokeLinejoin="round" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" strokeLinecap="round" /></svg>;
}
function StorefrontIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10.5 5 5h14l1 5.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 10.5v8A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5v-8" strokeLinecap="round" /><path d="M9.5 20v-4.5a2.5 2.5 0 0 1 5 0V20" strokeLinecap="round" /></svg>;
}
function PencilIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m14.5 5 4.5 4.5L8.5 20 4 20.5 4.5 16 14.5 5Z" strokeLinejoin="round" /></svg>;
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3.5 5 6v5.5c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V6l-7-2.5Z" strokeLinejoin="round" /><path d="m9.3 12.2 1.9 1.9 3.6-3.9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function GlobeIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" /></svg>;
}
function QrDecor() {
  const cells = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0];
  return (
    <div className="grid grid-cols-4 gap-0.5 rounded-md bg-white p-1.5">
      {cells.map((c, i) => (
        <span key={i} className={`h-1.5 w-1.5 ${c ? "bg-black" : "bg-transparent"}`} />
      ))}
    </div>
  );
}
function FacebookIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.6-1.5h1.5V4.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v3h2.7V21h2.8Z" /></svg>;
}
function InstagramIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>;
}
function TwitterIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4 4h4.2l4 5.4L16.8 4H20l-6.3 7.7L20.4 20h-4.2l-4.4-5.9L6.6 20H3.4l6.7-8.2L4 4Z" /></svg>;
}

const features = [
  { icon: <ShoppingBagFeatureIcon />, title: "For Shoppers", text: "Explore a wide range of fashion products at the best prices.", ring: "from-violet-500 to-fuchsia-500" },
  { icon: <StorefrontIcon />, title: "For Sellers", text: "List your products and reach thousands of active buyers.", ring: "from-fuchsia-500 to-rose-500" },
  { icon: <PencilIcon />, title: "For Designers", text: "Showcase your designs, get discovered and grow your brand.", ring: "from-orange-400 to-amber-500" },
  { icon: <ShieldIcon />, title: "Trusted & Secure", text: "Safe payments, secure transactions, and reliable support.", ring: "from-violet-500 to-indigo-500" },
];

const categories = [
  ["Men", "👔"],
  ["Women", "👗"],
  ["Shoes", "👟"],
  ["Bags", "👜"],
  ["Accessories", "⌚"],
  ["Fabrics", "🧵"],
] as const;

const products = [
  { name: "Oversized Denim Jacket", type: "Men", price: "₦45,000", old: "₦58,000", tag: "New", swatch: "from-slate-700 to-slate-900", emoji: "🧥" },
  { name: "Satin Slip Dress", type: "Women", price: "₦38,500", old: "₦46,000", tag: "-16%", swatch: "from-rose-600 to-fuchsia-700", emoji: "👗" },
  { name: "Chunky Platform Sneakers", type: "Shoes", price: "₦52,000", old: "₦61,000", tag: "Bestseller", swatch: "from-amber-500 to-orange-600", emoji: "👟" },
  { name: "Structured Leather Tote", type: "Bags", price: "₦29,900", old: "₦34,000", tag: "Limited", swatch: "from-violet-600 to-indigo-700", emoji: "👜" },
];

export default function Home() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");
  const visibleProducts = products.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#05030a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05030a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
          <a href="#top" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <BagLogoIcon />
            <span>
              Zylix<span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">store</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
            <a href="#top" className="hover:text-white">Home</a>
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#trending" className="hover:text-white">Feed</a>
            <a href="#connect" className="hover:text-white">Deals</a>
          </nav>
          <div className="ml-auto hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 sm:flex sm:w-72">
            <SearchIcon />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands..."
              className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            />
          </div>
          <div className="ml-auto flex items-center gap-4 text-white/80 sm:ml-0">
            <button aria-label="Wishlist" className="hover:text-white"><HeartIcon /></button>
            <button aria-label="Account" className="hover:text-white"><UserIcon /></button>
            <button
              aria-label="Cart"
              onClick={() => alert(`${cart} item${cart === 1 ? "" : "s"} in your cart`)}
              className="relative hover:text-white"
            >
              <CartIcon />
              {cart > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-500 text-[10px] font-bold">{cart}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-16 text-center sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[120px]" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />
          <div className="absolute left-0 top-72 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />
        </div>

        <div className="mx-auto flex items-center justify-center">
          <BagLogoIcon />
          <span className="ml-2 text-2xl font-extrabold">
            Zylix<span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">store</span>
            <span className="text-white/40">.com</span>
          </span>
        </div>

        <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-black leading-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">Shop.</span>{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-clip-text text-transparent">Sell.</span>{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Style.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-white sm:text-2xl">Your Ultimate Fashion Marketplace</p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/50 sm:text-base">
          <span className="text-fuchsia-400">Zylixstore.com</span> is a modern online marketplace for fashion lovers, designers, and sellers.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
          <a href="#trending" className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-8 py-3 text-sm font-bold shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
            Shop Now
          </a>
          <a href="#connect" className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            Sell With Us
          </a>
        </div>

        {/* Device mockup */}
        <div className="relative mx-auto mt-16 flex max-w-4xl items-end justify-center">
          <div className="w-full max-w-2xl rounded-t-xl border border-white/10 bg-[#0c0916] p-3 shadow-2xl shadow-fuchsia-500/10">
            <div className="mb-3 flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="ml-2 text-[10px] text-white/30">zylixstore.com</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-[#150f24] to-[#1c1030] p-5 text-left">
              <p className="text-xs text-white/40">Discover the</p>
              <p className="bg-gradient-to-r from-fuchsia-400 to-orange-400 bg-clip-text text-lg font-bold text-transparent">Latest Fashion</p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-1.5 text-[10px] font-bold">Shop Now</span>
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-bold text-white/70">Sell With Us</span>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {categories.map(([name, icon]) => (
                  <div key={name} className="rounded-md bg-white/5 py-3 text-center text-lg">
                    {icon}
                    <p className="mt-1 text-[9px] font-medium text-white/50">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="ml-[-24px] hidden w-40 rounded-2xl border border-white/10 bg-[#0c0916] p-2 shadow-2xl shadow-orange-500/10 sm:block">
            <div className="rounded-xl bg-gradient-to-br from-[#1c1030] to-[#150f24] p-3 text-left">
              <p className="text-[9px] text-white/40">Style that</p>
              <p className="bg-gradient-to-r from-fuchsia-400 to-orange-400 bg-clip-text text-xs font-bold text-transparent">speaks you.</p>
              <div className="mt-2 h-16 rounded-md bg-gradient-to-br from-fuchsia-600/40 to-orange-500/30" />
              <div className="mt-2 grid grid-cols-3 gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-6 rounded bg-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section id="connect" className="border-y border-white/10 bg-white/[0.02] px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.ring}`}>{f.icon}</div>
              <h3 className="text-sm font-bold">{f.title}</h3>
              <p className="mt-1 text-xs text-white/50">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">Popular Categories</p>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Shop by category</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {categories.map(([name, icon]) => (
            <a
              key={name}
              href="#trending"
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] py-6 text-center transition hover:border-fuchsia-500/40 hover:bg-white/[0.06]"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-xs font-semibold text-white/70">{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">Curated For You</p>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{search ? `Results for "${search}"` : "Trending now"}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.swatch} text-5xl`}>
                {p.emoji}
                <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-bold">{p.tag}</span>
                <button
                  onClick={() => setCart((c) => c + 1)}
                  className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Add to cart
                </button>
              </div>
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-wide text-white/40">{p.type}</p>
                <h3 className="mt-1 text-sm font-bold">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-fuchsia-400">{p.price}</span>
                  <span className="text-xs text-white/30 line-through">{p.old}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        {visibleProducts.length === 0 && <p className="text-center text-sm text-white/40">No products match that search yet.</p>}
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 p-8 sm:flex-row">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <GlobeIcon />
            <p className="text-sm font-semibold sm:text-base">
              Ready to experience fashion the smart way? Visit <span className="font-extrabold">Zylixstore.com</span> today!
            </p>
          </div>
          <QrDecor />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 text-lg font-extrabold sm:justify-start">
              <BagLogoIcon />
              <span>
                Zylix<span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">store</span>
              </span>
            </div>
            <p className="mt-2 text-xs text-white/40">Your Style. Your Marketplace.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-fuchsia-500/40 hover:text-white"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-fuchsia-500/40 hover:text-white"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-fuchsia-500/40 hover:text-white"><TwitterIcon /></a>
            <span className="ml-2 text-xs text-white/40">@zylixstore</span>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/30 sm:flex-row sm:text-left">
          <span>© 2026 Zylixstore. All rights reserved.</span>
          <span>
            Powered by <b className="text-white/50">Durchex D.A.M Company LTD</b>
          </span>
        </div>
      </footer>
    </main>
  );
}
