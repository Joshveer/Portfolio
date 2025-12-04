import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the about page, API routes, Next.js internals and assets to pass through.
  if (
    pathname.startsWith("/about") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Otherwise redirect to /about
  const url = request.nextUrl.clone();
  url.pathname = "/about";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/((?!_next/|_static/).*)",
};
