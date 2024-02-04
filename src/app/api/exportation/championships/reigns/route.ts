import { getJWT, getNonTokenResponse } from "@/app/api/helpers/token.helper";
import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();

    try {
        const reigns = await prisma.championshipReign.findMany();
        return NextResponse.json({ data: reigns }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
