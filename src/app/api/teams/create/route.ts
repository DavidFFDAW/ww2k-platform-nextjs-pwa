import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { getJWT, getNonTokenResponse } from "../../helpers/token.helper";
import { revalidatePath } from "next/cache";
import { checkRequiredFields } from "../../helpers/request.helper";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();
    const requiredFields = ["name", "overall", "members"];
    const { error, fields } = checkRequiredFields(body, requiredFields);

    if (error) {
        return NextResponse.json(
            { message: `Faltan campos obligatorios: ${fields.join(", ")}` },
            { status: 400 }
        );
    }
    const { name, overall, overalls, members, active } = body;
    if (members.length < 2)
        return NextResponse.json(
            { message: "Un equipo debe tener al menos 2 miembros" },
            { status: 400 }
        );
    if (members.length > 5)
        return NextResponse.json(
            { message: "Un equipo no puede tener más de 5 miembros" },
            { status: 400 }
        );

    const insertingOverall = Math.floor(
        overall
            ? overall
            : overalls.reduce(
                  (acc: number, curr: number) => Number(acc) + Number(curr),
                  0
              ) / overalls.length
    );

    const inserted = await prisma.team.create({
        data: {
            name,
            average: Number(insertingOverall),
            active: active,
            brand: body.brand,
            slug: body.slug,
            WrestlerTeam: {
                create: members.map((member: any) => ({
                    wrestler_id: Number(member),
                })),
            },
        },
    });

    revalidatePath("/admin/teams");

    if (!inserted.id)
        return NextResponse.json(
            { message: "Ha habido un error y no se ha podido crear el equipo" },
            { status: 500 }
        );

    return NextResponse.json(
        { message: "Se ha creado el equipo correctamente" },
        { status: 200 }
    );
}
