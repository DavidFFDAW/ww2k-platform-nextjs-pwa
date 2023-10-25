import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { TOKEN_COOKIE } from './constants/config';
import { verifyJwtToken } from './utilities/jwt';

const AUTH_PAGES = ["/login"];

const isAuthPages = (url: string) => AUTH_PAGES.some((page) => page.startsWith(url));

export default async function middleware(req: NextRequest) {
    const { url, nextUrl, cookies } = req;
    const { value: token } = cookies.get(TOKEN_COOKIE) ?? { value: null };
    const hasVerifiedToken = token && (await verifyJwtToken(token));
    const isAuthPageRequested = isAuthPages(nextUrl.pathname);

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            const response = NextResponse.next();
            response.cookies.delete(TOKEN_COOKIE);
            return response;
        }
        const response = NextResponse.redirect(new URL(`/`, url));
        return response;
    }

    if (!hasVerifiedToken) {
        const searchParams = new URLSearchParams(nextUrl.searchParams);
        searchParams.set("next", nextUrl.pathname);
        searchParams.append("status", 'unpermissioned');

        const response = NextResponse.redirect(
            new URL(`/login?${searchParams}`, url)
        );
        response.cookies.delete(TOKEN_COOKIE);
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/admin/:path*"],
};
