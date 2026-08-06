"use client";

import { useState } from "react";

const products = [
  { name: "iPhone 16 Pro", type: "Smartphones", price: "₦1,890,000", old: "₦2,060,000", tag: "New", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85" },
  { name: "MacBook Air M3", type: "Laptops", price: "₦1,620,000", old: "₦1,780,000", tag: "-9%", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85" },
  { name: "Sony WH-1000XM5", type: "Audio", price: "₦580,000", old: "₦640,000", tag: "Bestseller", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85" },
  { name: "Apple Watch Ultra 2", type: "Wearables", price: "₦1,050,000", old: "₦1,120,000", tag: "Limited", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=85" },
];

const categories = [
  ["Smartphones", "The latest, in your hands", "📱", "from-[#f3e9ff] to-[#dfcdff]"],
  ["Laptops", "Made to move ideas", "💻", "from-[#d9efff] to-[#b3d9ff]"],
  ["Gaming", "Play without limits", "🎮", "from-[#e2ffe8] to-[#c0f1cd]"],
  ["Smart Home", "A smarter everyday", "⌂", "from-[#fff0cf] to-[#ffdea2]"],
];

export default function Home() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");
  const visibleProducts = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.type.toLowerCase().includes(search.toLowerCase()));
  return <main className="min-h-screen bg-[#fbfbfa] text-[#13131a]">
    <div className="topbar"><span>◈ Free delivery on orders over ₦200,000</span><span>Need help? <b>Chat with us</b></span></div>
    <header className="header">
      <a className="logo" href="#top">ZY<span>LIX</span><i>STORE</i></a>
      <div className="search"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products, brands and more"/><kbd>⌘ K</kbd></div>
      <div className="header-actions"><button aria-label="Wishlist">♡</button><button aria-label="Account">◉</button><button className="cart" onClick={() => alert(`${cart} item${cart === 1 ? "" : "s"} in your cart`)} aria-label="Cart">▢{cart > 0 && <em>{cart}</em>}</button></div>
    </header>
    <nav><a href="#shop">Shop</a><a href="#categories">Categories</a><a href="#deals">Flash deals <span>Hot</span></a><a href="#new">New arrivals</a><a href="#brands">Brands</a><a href="#business">For business</a><a href="#support">Support</a></nav>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">INTRODUCING THE NEW STANDARD</p><h1>Technology,<br/><i>beautifully</i> simple.</h1><p className="hero-text">Discover the devices that make every day extraordinary. Curated for how you live, work, and create.</p><div className="hero-buttons"><a className="primary" href="#shop">Explore collection <b>→</b></a><a className="secondary" href="#new">See what&apos;s new</a></div><div className="hero-stat"><strong>4.9/5</strong><span>Trusted by over<br/>20,000 customers</span><div className="avatars">● ● ● ●</div></div></div>
      <div className="hero-visual"><div className="orb orb-one"/><div className="orb orb-two"/><div className="device phone"><div className="island"/><div className="screen"><small>09:41</small><b>Make it<br/>matter.</b><span>◌</span></div></div><div className="device tablet"><div className="tablet-screen"><b>Think<br/>different.</b><span>✦</span></div></div><div className="floating-card"><span>✦</span><div><b>Premium picks</b><small>Selected just for you</small></div></div></div>
    </section>

    <section className="trust"><div><span>✓</span><b>Authentic products</b><small>Always guaranteed</small></div><div><span>◒</span><b>Fast & secure delivery</b><small>Across Nigeria</small></div><div><span>◈</span><b>Flexible payments</b><small>Pay your way</small></div><div><span>♡</span><b>Dedicated support</b><small>We&apos;re here to help</small></div></section>

    <section className="section" id="categories"><div className="section-heading"><div><p className="eyebrow">SHOP BY CATEGORY</p><h2>Find your next favourite.</h2></div><a href="#shop">View all categories <b>→</b></a></div><div className="categories">{categories.map(([name, text, icon, gradient]) => <a href="#shop" className={`category bg-gradient-to-br ${gradient}`} key={name}><span className="cat-icon">{icon}</span><div><h3>{name}</h3><p>{text}</p></div><b>→</b></a>)}</div></section>

    <section className="section products-section" id="shop"><div className="section-heading"><div><p className="eyebrow">CURATED FOR YOU</p><h2>{search ? `Results for “${search}”` : "Trending now."}</h2></div><div className="tabs"><button className="active">Popular</button><button>New arrivals</button><button>Best rated</button></div></div><div className="products">{visibleProducts.map((p) => <article className="product" key={p.name}><div className="product-image"><img src={p.image} alt={p.name}/><span>{p.tag}</span><button aria-label={`Save ${p.name}`}>♡</button><div className="quick"><button onClick={() => setCart(cart + 1)}>Add to cart</button></div></div><p className="product-type">{p.type}</p><h3>{p.name}</h3><div className="rating">★★★★★ <small>(48)</small></div><div className="price"><b>{p.price}</b><del>{p.old}</del></div></article>)}</div>{visibleProducts.length === 0 && <p className="empty">No products match that search yet.</p>}<div className="center"><button className="outline">Explore all products <b>→</b></button></div></section>

    <section className="deal" id="deals"><div className="deal-copy"><p className="eyebrow">ENDS SUNDAY AT MIDNIGHT</p><h2>Small upgrades.<br/><i>Big moments.</i></h2><p>Enjoy exclusive savings on the tech you&apos;ve been eyeing.</p><div className="countdown"><div><b>01</b><span>Days</span></div><i>:</i><div><b>14</b><span>Hours</span></div><i>:</i><div><b>36</b><span>Mins</span></div></div><a href="#shop" className="primary">Shop flash deals <b>→</b></a></div><div className="deal-art"><div className="headphones">◖</div><div className="deal-tag"><b>UP TO<br/><strong>35%</strong><br/>OFF</b></div></div></section>

    <section className="section brands" id="brands"><p className="eyebrow">THE BRANDS YOU LOVE</p><div><b></b><b>SAMSUNG</b><b>SONY</b><b>Lenovo</b><b>LG</b><b>JBL</b></div></section>
    <section className="newsletter"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>Good things, delivered.</h2><p>New arrivals, private offers and a little technology inspiration — straight to your inbox.</p></div><form onSubmit={(e) => {e.preventDefault(); alert("You’re on the list!")}}><input type="email" required placeholder="Your email address"/><button className="primary">Subscribe <b>→</b></button><small>By subscribing, you agree to our Privacy Policy.</small></form></section>
    <footer id="support"><div className="footer-top"><div><a className="logo" href="#top">ZY<span>LIX</span><i>STORE</i></a><p>Technology made simple.<br/>Premium tech, thoughtfully selected.</p></div><div><b>Shop</b><a href="#shop">All products</a><a href="#categories">Categories</a><a href="#deals">Flash deals</a></div><div><b>Help</b><a href="#support">Contact us</a><a href="#support">Delivery & returns</a><a href="#support">Track your order</a></div><div><b>Follow along</b><p className="social">◎　◉　◌　◍</p></div></div><div className="footer-bottom"><span>© 2026 Zylixstore. All rights reserved.</span><span>Powered by <b>Durchex D.A.M Company LTD</b></span><span>Privacy　 Terms</span></div></footer>
  </main>;
}
