import { NextRequest, NextResponse } from "next/server";
import { getJWT, getNonTokenResponse } from "../../helpers/token.helper";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();

    return NextResponse.json({ body });
}
