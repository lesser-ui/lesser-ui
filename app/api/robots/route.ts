import { NextResponse } from "next/server";

export async function GET() {
  const isProduction = process.env.NODE_ENV === "production";

  const robotsTxt = isProduction
    ? `
User-agent: *
Disallow: /auth/*
Disallow: */edit
Disallow: element/create
Disallow: /login
Sitemap: ${process.env.APP_URL || "http://localhost:3000"}/sitemap.xml
    `.trim()
    : `
User-agent: *
Disallow: /
    `.trim();

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
