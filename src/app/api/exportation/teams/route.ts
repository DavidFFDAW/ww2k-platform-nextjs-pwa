import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { getJWT, getNonTokenResponse } from "../../helpers/token.helper";

export async function GET(request: NextRequest) {
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();

    try {
        const teams = await prisma.team.findMany({
            include: {
                WrestlerTeam: true,
            },
        });
        return NextResponse.json({ data: teams }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
