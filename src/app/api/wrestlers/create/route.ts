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
        const foundExistingWrestler = await prisma.wrestler.findMany({
            where: {
                name: body.name,
            },
        });

        if (foundExistingWrestler.length > 0) {
            return NextResponse.json(
                {
                    message: `Ya existe un wrestler con el nombre ${body.name}`,
                },
                { status: 400 }
            );
        }

        const inserted = await prisma.wrestler.create({
            data: {
                name: body.name,
                finisher: body.finisher,
                twitter_acc: body.twitter_account,
                twitter_name: body.twitter_name,
                twitter_image: body.twitter_image || "",
                brand: body.brand,
                status: body.status,
                overall: Number(body.overall),
                kayfabe_status: body.kayfabe,
                alias: body.alias,
                sex: body.sex,
                is_tag: body.is_tag !== 0,
                is_champ: false,
                image_name: body.app_image || "",
            },
        });

        if (!inserted.id)
            return NextResponse.json(
                {
                    message:
                        "Ha habido un error y no se ha podido crear el post",
                },
                { status: 500 }
            );

        revalidatePath("/admin/wrestlers");
        return NextResponse.json(
            { message: `Se ha creado el nuevo wrestler ${inserted.name}` },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: true, message: error.message },
            { status: 500 }
        );
    }
}
