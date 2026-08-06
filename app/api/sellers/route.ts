import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const name = (body?.name as string | undefined)?.trim();
  const email = (body?.email as string | undefined)?.trim();
  const brand = (body?.brand as string | undefined)?.trim();
  const message = (body?.message as string | undefined)?.trim();

  if (!name || !email || !brand) {
    return NextResponse.json({ error: "name, email, and brand are required" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const application = await prisma.sellerApplication.create({
    data: { name, email, brand, message: message || null },
  });

  return NextResponse.json({ application }, { status: 201 });
}
