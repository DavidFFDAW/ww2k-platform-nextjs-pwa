import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { PROTECTED_ROUTES, STATIC_PAGES, TOKEN_COOKIE } from './constants/config';
import { verifyJwtToken } from './utilities/jwt';

const AUTH_PAGES = ["/login"];

const isAuthPages = (url: string) => AUTH_PAGES.some((page) => page.startsWith(url));

export default async function middleware(req: NextRequest) {
    const { url, nextUrl, cookies } = req;
    if (nextUrl.pathname === '/service-worker.js') return NextResponse.next();
    const { value: token } = cookies.get(TOKEN_COOKIE) ?? { value: null };
    const hasVerifiedToken = token && (await verifyJwtToken(token));
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            const response = NextResponse.next();
            response.cookies.delete(TOKEN_COOKIE);
            return response;
        }
        const response = NextResponse.redirect(new URL(PROTECTED_ROUTES.ADMIN, url));
        return response;
    }

    if (!hasVerifiedToken) {
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set("next", nextUrl.pathname);

        const response = NextResponse.redirect(
            new URL(`${STATIC_PAGES.LOGIN}?${searchParams}`, url)
        );
        response.cookies.delete(TOKEN_COOKIE);
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/admin/:path*"],
};
