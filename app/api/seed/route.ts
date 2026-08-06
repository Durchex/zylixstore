import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { prisma } from "@/lib/prisma";
import { seedDatabase } from "@/lib/seedData";

function isAuthorized(request: NextRequest): boolean {
  const configuredSecret = process.env.SEED_SECRET;
  if (!configuredSecret) return false;

  const providedSecret = request.nextUrl.searchParams.get("secret") ?? "";
  const configured = Buffer.from(configuredSecret);
  const provided = Buffer.from(providedSecret);
  if (configured.length !== provided.length) return false;

  return timingSafeEqual(configured, provided);
}

export async function GET(request: NextRequest) {
  if (!process.env.SEED_SECRET) {
    return NextResponse.json(
      { error: "SEED_SECRET is not configured on the server. Add it as an environment variable, redeploy, then visit this URL with ?secret=<that value>." },
      { status: 500 }
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized. Visit this URL with ?secret=<your SEED_SECRET value>." }, { status: 401 });
  }

  const result = await seedDatabase(prisma);
  return NextResponse.json({ success: true, ...result, message: `Seeded ${result.categories} categories and ${result.products} products.` });
}
