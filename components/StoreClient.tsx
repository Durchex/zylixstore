"use client";

import { useEffect, useMemo, useState } from "react";
import type { Category, Product } from "@/app/generated/prisma/client";
import {
  BagLogoIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  ShoppingBagFeatureIcon,
  StorefrontIcon,
  PencilIcon,
  ShieldIcon,
  GlobeIcon,
  QrDecor,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  CloseIcon,
} from "@/components/icons";
import { SellerModal } from "@/components/SellerModal";

const features = [
  { icon: <ShoppingBagFeatureIcon />, title: "For Shoppers", text: "Explore a wide range of fashion products at the best prices.", ring: "from-violet-500 to-fuchsia-500" },
  { icon: <StorefrontIcon />, title: "For Sellers", text: "List your products and reach thousands of active buyers.", ring: "from-fuchsia-500 to-rose-500" },
  { icon: <PencilIcon />, title: "For Designers", text: "Showcase your designs, get discovered and grow your brand.", ring: "from-orange-400 to-amber-500" },
  { icon: <ShieldIcon />, title: "Trusted & Secure", text: "Safe payments, secure transactions, and reliable support.", ring: "from-violet-500 to-indigo-500" },
];

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

type CartItemWithProduct = { id: string; quantity: number; product: Product };

export function StoreClient({ categories, initialProducts }: { categories: Category[]; initialProducts: Product[] }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sellerModalOpen, setSellerModalOpen] = useState(false);

  const cartCount = useMemo(() => cartItems.reduce((sum, i) => sum + i.quantity, 0), [cartItems]);
  const cartSubtotal = useMemo(() => cartItems.reduce((sum, i) => sum + i.quantity * i.product.price, 0), [cartItems]);

  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data.items ?? []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      fetch(`/api/products?${params.toString()}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products ?? []))
        .catch(() => {})
        .finally(() => setLoading(false));
    }, 250);
    return () => clearTimeout(handle);
  }, [search]);

  async function addToCart(productId: string) {
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: 1 }),
    });
    if (res.ok) {
      const data = await res.json();
      setCartItems(data.items ?? []);
    }
  }

  async function removeFromCart(itemId: string) {
    const res = await fetch(`/api/cart/${itemId}`, { method: "DELETE" });
    if (res.ok) {
      const data = await res.json();
      setCartItems(data.items ?? []);
    }
  }

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
            <button onClick={() => setSellerModalOpen(true)} className="hover:text-white">Deals</button>
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
            <button aria-label="Cart" onClick={() => setCartOpen(true)} className="relative hover:text-white">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-500 text-[10px] font-bold">{cartCount}</span>
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
          <button onClick={() => setSellerModalOpen(true)} className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10">
            Sell With Us
          </button>
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
                {categories.map((c) => (
                  <div key={c.id} className="rounded-md bg-white/5 py-3 text-center text-lg">
                    {c.icon}
                    <p className="mt-1 text-[9px] font-medium text-white/50">{c.name}</p>
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
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-14">
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
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSearch(c.name)}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] py-6 text-center transition hover:border-fuchsia-500/40 hover:bg-white/[0.06]"
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-xs font-semibold text-white/70">{c.name}</span>
            </button>
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
          {loading && <span className="text-xs text-white/40">Loading...</span>}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div
                className="relative flex h-48 items-center justify-center text-5xl"
                style={{ background: `linear-gradient(135deg, ${p.swatchFrom}, ${p.swatchTo})` }}
              >
                {p.emoji}
                {p.tag && <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-bold">{p.tag}</span>}
                <button
                  onClick={() => addToCart(p.id)}
                  className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-black opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Add to cart
                </button>
              </div>
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-wide text-white/40">{p.category}</p>
                <h3 className="mt-1 text-sm font-bold">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-fuchsia-400">{formatNaira(p.price)}</span>
                  {p.oldPrice && <span className="text-xs text-white/30 line-through">{formatNaira(p.oldPrice)}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {!loading && products.length === 0 && <p className="text-center text-sm text-white/40">No products match that search yet.</p>}
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

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-black/60" onClick={() => setCartOpen(false)}>
          <div className="flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-[#0c0916] p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} aria-label="Close" className="text-white/50 hover:text-white">
                <CloseIcon />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-sm text-white/40">Your cart is empty.</p>
            ) : (
              <div className="flex-1 space-y-4 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 rounded-xl border border-white/10 p-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl"
                      style={{ background: `linear-gradient(135deg, ${item.product.swatchFrom}, ${item.product.swatchTo})` }}
                    >
                      {item.product.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item.product.name}</p>
                      <p className="text-xs text-white/40">Qty {item.quantity} · {formatNaira(item.product.price)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} aria-label="Remove" className="text-white/40 hover:text-white">
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="mb-3 flex items-center justify-between text-sm font-bold">
                  <span>Subtotal</span>
                  <span>{formatNaira(cartSubtotal)}</span>
                </div>
                <button className="w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-2.5 text-sm font-bold">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {sellerModalOpen && <SellerModal onClose={() => setSellerModalOpen(false)} />}
    </main>
  );
}
