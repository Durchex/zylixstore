"use client";

import { useEffect, useMemo, useState } from "react";
import type { Category, Product } from "@/app/generated/prisma/client";
import { Navbar1 } from "@/components/relume/Navbar1";
import { Header153 } from "@/components/relume/Header153";
import { Layout299 } from "@/components/relume/Layout299";
import { Categories } from "@/components/relume/Categories";
import { Product1 } from "@/components/relume/Product1";
import { Cta1 } from "@/components/relume/Cta1";
import { Footer4 } from "@/components/relume/Footer4";
import { ContactModal1 } from "@/components/relume/ContactModal1";
import { CartDrawer } from "@/components/relume/CartDrawer";

const navLinks = [
  { title: "Home", url: "#top" },
  { title: "Categories", url: "#categories" },
  { title: "Feed", url: "#trending" },
];

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
      setCartOpen(true);
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
    <main className="min-h-screen bg-scheme-background text-scheme-text">
      <Navbar1
        navLinks={navLinks}
        search={search}
        onSearchChange={setSearch}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSellClick={() => setSellerModalOpen(true)}
      />

      <Header153
        onShopClick={() => document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" })}
        onSellClick={() => setSellerModalOpen(true)}
      />

      <Layout299 />

      <Categories categories={categories} onSelect={setSearch} />

      <Product1
        heading={search ? `Results for "${search}"` : "Trending now"}
        products={products}
        loading={loading}
        onAddToCart={addToCart}
      />

      <Cta1 />

      <Footer4 />

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        subtotal={cartSubtotal}
        onRemove={removeFromCart}
      />

      <ContactModal1 open={sellerModalOpen} onOpenChange={setSellerModalOpen} />
    </main>
  );
}
