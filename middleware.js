import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookies = request.cookies;
    // console.log("Request:", request);
    // console.log("Path:", pathname);
    console.log(
        cookies.get("remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d")
    );

    if (pathname.startsWith("/admin")) {
        return NextResponse.redirect(
            new URL("/auth/login", request.url).toString(),
            { status: 307 }
        );
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
        "/((?!api|_next/static|_next/image|favicon.ico|workbox-*.js|icons/*|worker-development.js|manifest.json|sw.js).*)",
    ],
};
