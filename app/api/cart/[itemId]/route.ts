import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionId } from "@/lib/cart";

export async function DELETE(_request: Request, { params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;
  const sessionId = await getSessionId();

  if (!sessionId) {
    return NextResponse.json({ error: "No active cart" }, { status: 404 });
  }

  const item = await prisma.cartItem.findUnique({ where: { id: itemId } });
  if (!item || item.sessionId !== sessionId) {
    return NextResponse.json({ error: "Cart item not found" }, { status: 404 });
  }

  await prisma.cartItem.delete({ where: { id: itemId } });

  const items = await prisma.cartItem.findMany({ where: { sessionId }, include: { product: true } });
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.product.price, 0);

  return NextResponse.json({ items, count, subtotal });
}
