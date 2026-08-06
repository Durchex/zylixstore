import { cookies } from "next/headers";
import { randomUUID } from "crypto";

const CART_COOKIE = "zylix_sid";

export async function getOrCreateSessionId(): Promise<string> {
  const store = await cookies();
  const existing = store.get(CART_COOKIE)?.value;
  if (existing) return existing;

  const sessionId = randomUUID();
  store.set(CART_COOKIE, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return sessionId;
}

export async function getSessionId(): Promise<string | null> {
  const store = await cookies();
  return store.get(CART_COOKIE)?.value ?? null;
}
