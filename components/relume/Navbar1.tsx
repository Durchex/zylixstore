"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Search, Favorite, ShoppingCart } from "relume-icons";
import { Logo } from "@/components/Logo";

type NavLink = {
  url: string;
  title: string;
};

type Props = {
  navLinks: NavLink[];
  search: string;
  onSearchChange: (value: string) => void;
  cartCount: number;
  onCartClick: () => void;
  onSellClick: () => void;
};

export const Navbar1 = ({ navLinks, search, onSearchChange, cartCount, onCartClick, onSellClick }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useMediaQuery("(max-width: 991px)");

  return (
    <section className="sticky top-0 z-[999] flex w-full items-center border-b border-scheme-border bg-scheme-background lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between lg:gap-6">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="#top">
            <Logo variant="grey" />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="my-[3px] h-0.5 w-6 bg-scheme-text" />
            <span className="my-[3px] h-0.5 w-6 bg-scheme-text" />
            <span className="my-[3px] h-0.5 w-6 bg-scheme-text" />
          </button>
        </div>

        <motion.div
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          variants={{ open: { height: "auto" }, close: { height: 0 } }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden px-[5%] lg:flex lg:flex-1 lg:items-center lg:gap-6 lg:overflow-visible lg:px-0"
        >
          <nav className="flex flex-col gap-1 py-4 lg:flex-row lg:gap-6 lg:py-0">
            {navLinks.map((navLink, index) => (
              <a key={index} href={navLink.url} className="block py-2 text-regular font-medium text-scheme-text lg:py-0">
                {navLink.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 rounded-form border border-scheme-border px-3 py-2 lg:ml-auto lg:w-64">
            <Search className="size-4 text-zylix-grey" />
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products, brands..."
              className="w-full bg-transparent text-small text-scheme-text placeholder-zylix-grey outline-none"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 pb-6 lg:mt-0 lg:pb-0">
            <div className="flex items-center gap-4">
              <button aria-label="Wishlist" className="text-scheme-text">
                <Favorite className="size-5" />
              </button>
              <button aria-label="Cart" onClick={onCartClick} className="relative text-scheme-text">
                <ShoppingCart className="size-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-neutral-darkest text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            <Button size="sm" onClick={onSellClick}>
              Sell With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
