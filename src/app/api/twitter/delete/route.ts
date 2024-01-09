import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { getJWT, getNonValidTokenResponse } from "../../helpers/token.helper";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    if (!body.tweet_id) {
        return NextResponse.json(
            { message: `Falta el id del tweet a borrar` },
            { status: 400 }
        );
    }

    try {
        await prisma.tweets.delete({
            where: {
                id: Number(body.tweet_id),
            },
        });

        revalidatePath("/admin/twitter", 'page');
        revalidatePath("/twitter", 'page');

        return NextResponse.json(
            { message: 'Se ha borrado el tweet' },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: true, message: error.message },
            { status: 500 }
        );
    }
}
