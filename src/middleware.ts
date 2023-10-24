import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { PROTECTED_ROUTES, STATIC_PAGES, USER_ROLES } from "@/constants/config";


export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        const authRole = request.nextauth.token?.user as {
            role: string;
        };

        const userRole = authRole?.role.toUpperCase();

        if (
            request.nextUrl.pathname.startsWith(PROTECTED_ROUTES.ADMIN) &&
            userRole !== USER_ROLES.ADMIN
        ) {
            return NextResponse.rewrite(
                new URL(STATIC_PAGES.DENIED, request.url)
            );
        }

        // if (
        //     request.nextUrl.pathname.startsWith(PROTECTED_ROUTES.USER) &&
        //     userRole !== USER_ROLES.USER
        // ) {
        //     return NextResponse.rewrite(
        //         new URL(STATIC_PAGES.DENIED, request.url)
        //     );
        // }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log("authorized", token);
                return Boolean(token);
            },
        },
    }
);

export const config = {
    matcher: ["/admin/:path*"],
};
