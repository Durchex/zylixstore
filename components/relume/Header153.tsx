"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const blocks = [
  { color: "#1F2A44", className: "hidden md:block left-[4%] top-[12%] md:size-32", delay: 0 },
  { color: "#EFE6D8", className: "hidden md:block left-[14%] bottom-[15%] md:size-24", delay: 0.1 },
  { color: "#D8CBB0", className: "hidden md:block right-[6%] top-[18%] md:size-28", delay: 0.15 },
  { color: "#6B7280", className: "hidden md:block right-[16%] bottom-[10%] md:size-20", delay: 0.2 },
];

export const Header153 = ({
  onShopClick,
  onSellClick,
}: {
  onShopClick: () => void;
  onSellClick: () => void;
}) => {
  return (
    <section id="top" className="relative overflow-hidden px-[5%] py-20 md:py-28">
      {blocks.map((block, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: block.delay }}
          className={`absolute rounded-image ${block.className}`}
          style={{ backgroundColor: block.color }}
        />
      ))}

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="mb-3 text-small font-semibold text-zylix-grey">
            Your Ultimate Fashion Marketplace
          </p>
          <h1 className="mb-5 text-h1 font-bold text-scheme-text md:mb-6">
            Shop. Sell. Style.
          </h1>
          <p className="text-medium text-zylix-grey">
            ZylixStore is a modern online marketplace for fashion lovers, designers, and sellers.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
            <Button onClick={onShopClick}>Shop Now</Button>
            <Button variant="secondary" onClick={onSellClick}>
              Sell With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
