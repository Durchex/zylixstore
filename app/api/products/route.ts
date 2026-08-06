import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search")?.trim().toLowerCase() ?? "";
  const category = request.nextUrl.searchParams.get("category")?.trim().toLowerCase() ?? "";

  const all = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  const products = all.filter((product) => {
    const matchesCategory = category ? product.category.toLowerCase() === category : true;
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)
      : true;
    return matchesCategory && matchesSearch;
  });

  return NextResponse.json({ products });
}
