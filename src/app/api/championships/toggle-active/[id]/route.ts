import {
    getJWT,
    getNonValidTokenResponse,
} from "@/app/api/helpers/token.helper";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    const { id } = params;
    const championship = await prisma?.championship.findUnique({
        where: { id: Number(id) },
    });

    if (championship) {
        const currentChampion = await prisma?.championshipReign.findFirst({
            where: {
                championship_id: championship.id,
                current: true,
            },
        });

        if (championship.active && currentChampion) { 
            await prisma?.championshipReign.update({
                where: { id: Number(currentChampion.id) },
                data: {
                    current: false,
                    lost_date: new Date(),
                },
            });
        }

        await prisma?.championship.update({
            where: { id: Number(id) },
            data: {
                active: !championship.active,
            },
        });

        return NextResponse.json(
            { message: "Championship updated!" },
            { status: 200 }
        );
    }

    return NextResponse.json(
        { message: "Cannot make that. Sorry" },
        { status: 404 }
    );
}
