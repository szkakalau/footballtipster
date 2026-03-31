import { NextResponse } from "next/server";

export const runtime = "nodejs";

function badRequest(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: Request) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return badRequest("Subscription is not configured yet.", 500);
  }

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return badRequest("Invalid request.");
  }

  const body = (await req.json().catch(() => null)) as { email?: unknown } | null;
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !isValidEmail(email)) {
    return badRequest("Please enter a valid email.");
  }

  // MailerLite (new) API: https://connect.mailerlite.com/api/subscribers
  // We avoid sensitive wording in responses.
  const upstream = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      groups: [groupId],
      resubscribe: true,
      autoresponders: true,
    }),
  });

  if (upstream.status === 429) {
    return badRequest("Please slow down and try again.", 429);
  }

  if (!upstream.ok) {
    // Avoid leaking upstream details; keep it user-friendly.
    return badRequest("Something went wrong. Try again.", 400);
  }

  return NextResponse.json({ ok: true, message: "Check your inbox to confirm." });
}

