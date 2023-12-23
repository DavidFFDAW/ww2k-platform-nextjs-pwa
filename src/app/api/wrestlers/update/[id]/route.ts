import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { checkRequiredFields } from "@/app/api/helpers/request.helper";
import {
    getJWT,
    getNonValidTokenResponse,
} from "@/app/api/helpers/token.helper";

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    if (!params.id) {
        return NextResponse.json(
            { message: "No se ha recibido ningun identificador" },
            { status: 400 }
        );
    }

    const requiredFields = [
        "name",
        "sex",
        "finisher",
        "brand",
        "twitter_account",
        "twitter_name",
        "twitter_image",
        "status",
    ];
    const { error, fields } = checkRequiredFields(body, requiredFields);

    if (error) {
        return NextResponse.json(
            { message: `Faltan campos obligatorios: ${fields.join(", ")}` },
            { status: 400 }
        );
    }

    try {
        const updated = await prisma.wrestler.update({
            data: {
                name: body.name,
                finisher: body.finisher,
                twitter_acc: body.twitter_account,
                twitter_name: body.twitter_name,
                twitter_image: body.twitter_image,
                brand: body.brand,
                status: body.status,
                overall: Number(body.overall),
                kayfabe_status: body.kayfabe,
                alias: body.alias,
                sex: body.sex,
                is_tag: body.is_tag !== "0",
                is_champ: false,
                image_name: body.app_image,
            },
            where: {
                id: Number(params.id),
            },
        });

        if (!updated.id)
            return NextResponse.json(
                {
                    message:
                        "Ha habido un error y no se ha podido actualizar el luchador",
                },
                { status: 500 }
            );

        revalidatePath("/admin/wrestlers");
        revalidatePath("/roster/teams");
        revalidatePath("/roster");

        return NextResponse.json(
            { message: `Se ha actualizado el wrestler ${updated.name}` },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: true, message: error.message },
            { status: 500 }
        );
    }
}
