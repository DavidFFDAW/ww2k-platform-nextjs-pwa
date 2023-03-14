import { NextResponse } from "next/server";

export function middleware(request) { 
    const { pathname } = request.nextUrl;
    console.log('Path:', pathname);

    if (pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/auth/login', request.url).toString(), { status: 307 });
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|workbox-*.js|icons/*|worker-development.js|manifest.json|sw.js).*)',
    ],
};