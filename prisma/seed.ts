import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const categories = [
  { name: "Men", slug: "men", icon: "👔" },
  { name: "Women", slug: "women", icon: "👗" },
  { name: "Shoes", slug: "shoes", icon: "👟" },
  { name: "Bags", slug: "bags", icon: "👜" },
  { name: "Accessories", slug: "accessories", icon: "⌚" },
  { name: "Fabrics", slug: "fabrics", icon: "🧵" },
];

const products = [
  { name: "Oversized Denim Jacket", category: "Men", price: 45000, oldPrice: 58000, tag: "New", swatchFrom: "#334155", swatchTo: "#0f172a", emoji: "🧥" },
  { name: "Satin Slip Dress", category: "Women", price: 38500, oldPrice: 46000, tag: "-16%", swatchFrom: "#e11d48", swatchTo: "#a21caf", emoji: "👗" },
  { name: "Chunky Platform Sneakers", category: "Shoes", price: 52000, oldPrice: 61000, tag: "Bestseller", swatchFrom: "#f59e0b", swatchTo: "#ea580c", emoji: "👟" },
  { name: "Structured Leather Tote", category: "Bags", price: 29900, oldPrice: 34000, tag: "Limited", swatchFrom: "#7c3aed", swatchTo: "#4338ca", emoji: "👜" },
  { name: "Tailored Wool Blazer", category: "Men", price: 62000, oldPrice: 74000, tag: "New", swatchFrom: "#1e293b", swatchTo: "#334155", emoji: "🧥" },
  { name: "Pleated Midi Skirt", category: "Women", price: 27500, oldPrice: null, tag: null, swatchFrom: "#be185d", swatchTo: "#831843", emoji: "👛" },
  { name: "Classic Leather Loafers", category: "Shoes", price: 41000, oldPrice: 48000, tag: "-15%", swatchFrom: "#92400e", swatchTo: "#451a03", emoji: "👞" },
  { name: "Statement Gold Earrings", category: "Accessories", price: 15500, oldPrice: null, tag: "New", swatchFrom: "#eab308", swatchTo: "#a16207", emoji: "💎" },
];

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }

  for (const product of products) {
    const existing = await prisma.product.findFirst({ where: { name: product.name } });
    if (!existing) {
      await prisma.product.create({ data: product });
    }
  }

  console.log(`Seeded ${categories.length} categories and ${products.length} products.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
