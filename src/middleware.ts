import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const hostName = req.nextUrl.origin;

  // Get pathname:
  const slug = req.nextUrl.pathname.split("/").pop() || "";

  // If no slug (/):
  if (!slug) {
    return NextResponse.next();
  }

  // Get URL from query:
  const data = await fetch(`${hostName}/api/url/${slug}`);

  // Return /404 if data is not found:
  if (data.status === 404) {
    return NextResponse.redirect(`${hostName}/404`);
  }

  // Convert data to JSON:
  const dataToJson = (await data.json()) as { url: string };

  // If data has a URL, redirect to it:
  if (dataToJson?.url) {
    return NextResponse.redirect(dataToJson.url);
  }

  return null;
}

export const config = {
  matcher:
    "/((?!api/|_next/|_proxy/|_static|_vercel|favicon.ico|sitemap.xml).*)",
};
