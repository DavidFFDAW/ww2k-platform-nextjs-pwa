import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { getJWT, getNonValidTokenResponse } from "../../helpers/token.helper";
import { revalidatePath } from "next/cache";
import { checkRequiredFields } from "../../helpers/request.helper";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    const requiredFields = [
        "device",
        "likes",
        "comments",
        "retweets",
        "tweet_content",
        "wrestler_id",
    ];
    const { error, fields } = checkRequiredFields(body, requiredFields);

    if (error) {
        return NextResponse.json(
            { message: `Faltan campos obligatorios: ${fields.join(", ")}` },
            { status: 400 }
        );
    }

    try {
        const inserted = await prisma.tweets.create({
            data: {
                device: body.device,
                likes: Number(body.likes),
                comments: Number(body.comments),
                retweets: Number(body.retweets),
                message: body.tweet_content,
                author_id: Number(body.wrestler_id),
            },
        });

        if (!inserted.id)
            return NextResponse.json(
                {
                    message:
                        "Ha habido un error y no se ha podido crear el tweet",
                },
                { status: 500 }
            );

        revalidatePath("/admin/twitter", 'page');
        revalidatePath("/twitter", 'page');

        return NextResponse.json(
            { message: 'Se ha creado el nuevo tweet'  },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: true, message: error.message },
            { status: 500 }
        );
    }
}
