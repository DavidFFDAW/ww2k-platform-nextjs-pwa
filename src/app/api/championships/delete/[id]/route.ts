// import { getJWT, getNonTokenResponse } from "@/app/api/helpers/token.helper";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: any) {
    const { id } = params;

    return NextResponse.json(
        { message: "DELETE Not supported" },
        { status: 200 }
    );
}
