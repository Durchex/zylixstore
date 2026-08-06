import { prisma } from "@/lib/prisma";
import { StoreClient } from "@/components/StoreClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [categories, products] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.product.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return <StoreClient categories={categories} initialProducts={products} />;
}
