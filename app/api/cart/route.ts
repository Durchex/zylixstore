import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getOrCreateSessionId, getSessionId } from "@/lib/cart";

async function buildCartPayload(sessionId: string | null) {
  if (!sessionId) return { items: [], count: 0, subtotal: 0 };

  const items = await prisma.cartItem.findMany({
    where: { sessionId },
    include: { product: true },
    orderBy: { createdAt: "asc" },
  });

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

  return { items, count, subtotal };
}

export async function GET() {
  const sessionId = await getSessionId();
  const payload = await buildCartPayload(sessionId);
  return NextResponse.json(payload);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const productId = body?.productId as string | undefined;
  const quantity = Number(body?.quantity ?? 1);

  if (!productId || !Number.isFinite(quantity) || quantity < 1) {
    return NextResponse.json({ error: "productId and a positive quantity are required" }, { status: 400 });
  }

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const sessionId = await getOrCreateSessionId();

  const existing = await prisma.cartItem.findUnique({
    where: { sessionId_productId: { sessionId, productId } },
  });

  if (existing) {
    await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + quantity },
    });
  } else {
    await prisma.cartItem.create({ data: { sessionId, productId, quantity } });
  }

  const payload = await buildCartPayload(sessionId);
  return NextResponse.json(payload, { status: 201 });
}

export async function DELETE() {
  const sessionId = await getSessionId();
  if (sessionId) {
    await prisma.cartItem.deleteMany({ where: { sessionId } });
  }
  return NextResponse.json({ items: [], count: 0, subtotal: 0 });
}
