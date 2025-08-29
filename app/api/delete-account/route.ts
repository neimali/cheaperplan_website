import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anon || !service) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  // Use anon key + explicit access token to verify the user identity
  const userClient = createClient(url, anon);
  const { data: userData, error: gerr } = await userClient.auth.getUser(token);
  const user = userData?.user;
  if (gerr || !user) {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }

  // TODO: Clean up domain data first (or rely on ON DELETE CASCADE)

  // Use service role key to perform admin deletion
  const admin = createClient(url, service);
  const { error: derr } = await admin.auth.admin.deleteUser(user.id);
  if (derr) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

