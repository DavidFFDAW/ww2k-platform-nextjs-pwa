import {
    getJWT,
    getNonValidTokenResponse,
} from "@/app/api/helpers/token.helper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    console.log({
        body,
    });

    return NextResponse.json(
        { message: "POST Not supported" },
        { status: 404 }
    );
}
