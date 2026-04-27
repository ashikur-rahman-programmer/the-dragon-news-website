import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/career", "/news/:path*"],
};
