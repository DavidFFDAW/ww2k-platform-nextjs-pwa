import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookies = request.cookies;
    const isAdminRoute = pathname.startsWith('/admin');
    const hasCookie = cookies.get(process.env.NEXT_AUTH_KEY) || false;

    if (!isAdminRoute) {
        return NextResponse.next();
    }

    if (isAdminRoute && !hasCookie) {
        return NextResponse.redirect(
            new URL('/auth/login', request.url).toString(),
            {
                status: 307,
            },
        );
    }
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
