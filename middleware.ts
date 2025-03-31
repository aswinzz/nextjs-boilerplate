import { clerkMiddleware } from '@clerk/nextjs/server';

// This protects frontend routes as needed
// See https://clerk.com/docs/references/nextjs/clerk-middleware for more information
export default clerkMiddleware();

export const config = {
  matcher: [
    // Match all paths except for:
    // 1. /api routes
    // 2. /_next (Next.js internals)
    // 3. /fonts, /icons, /images (inside /public)
    // 4. all root files inside /public (favicon.ico, manifest.json, robots.txt)
    '/((?!api|_next|fonts|icons|images|favicon.ico|manifest.json|robots.txt).*)',
  ],
}; 