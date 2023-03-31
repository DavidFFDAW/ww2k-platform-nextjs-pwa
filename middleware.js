import { NextResponse } from 'next/server';
import configuration from './constants/config.js';

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookies = request.cookies;
    const isAdminRoute = pathname.startsWith('/admin');
    const isLogin = pathname.startsWith('/auth/login');
    const hasCookie = cookies.get(configuration.NEXT_USER) || false;

    if (isLogin && Boolean(hasCookie)) {
        return NextResponse.redirect(new URL('/admin', request.url).toString(), {
            status: 307,
        });
    }

    if (!isAdminRoute) {
        return NextResponse.next();
    }

    if (isAdminRoute && !Boolean(hasCookie)) {
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
