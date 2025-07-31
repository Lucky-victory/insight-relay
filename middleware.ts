import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Define which paths are considered public (no auth required)
  const isPublicPath = [
    "/login", 
    "/signup", 
    "/forgot-password",
    "/", // Landing page
    "/terms",
    "/privacy",
    "/contact"
  ].some(publicPath => path === publicPath || path.startsWith(publicPath + "/"));

  // Check for static files and API routes which should be accessible
  const isStaticFile = path.match(/\.(jpg|jpeg|png|gif|svg|css|js)$/);
  const isApiRoute = path.startsWith("/api/");
  
  // Get the auth token from the cookies
  const authToken = request.cookies.get("auth-token")?.value;
  
  // If the user is on a public path and has a token, redirect to dashboard
  if (isPublicPath && authToken && path !== "/" && !path.startsWith("/terms") && !path.startsWith("/privacy") && !path.startsWith("/contact")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  // If the user is on a protected path and doesn't have a token, redirect to login
  if (!isPublicPath && !isStaticFile && !isApiRoute && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  return NextResponse.next();
}

// Configure which paths should be processed by this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};