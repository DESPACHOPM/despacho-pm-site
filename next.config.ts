import type { NextConfig } from "next";

// Content-Security-Policy: 'unsafe-inline' is required for script-src (the
// Meta Pixel snippet in src/app/layout.tsx is an inline <script>, and Next.js
// itself injects small inline hydration scripts) and for style-src (the
// `motion` animation library sets inline style="" attributes on elements).
// Tightening this further would require a nonce-based setup with middleware.
// This site has no login, no database, no forms that submit to itself, and no
// user-generated content, so the residual XSS risk from 'unsafe-inline' is
// low — there is no untrusted input anywhere on the page for an attacker to
// inject into.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://connect.facebook.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://www.facebook.com;
  font-src 'self' data:;
  connect-src 'self' https://www.facebook.com https://connect.facebook.net;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  object-src 'none';
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
