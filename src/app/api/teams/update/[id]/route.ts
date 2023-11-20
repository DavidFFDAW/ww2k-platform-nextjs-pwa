import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getJWT, getNonTokenResponse } from "@/app/api/helpers/token.helper";
import { checkRequiredFields } from "@/app/api/helpers/request.helper";

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
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

    const { name, overall, overalls, members } = body;
    if (members.length < 2) {
        return NextResponse.json(
            { message: `Un equipo debe tener al menos 2 miembros` },
            { status: 400 }
        );
    }
    if (members.length > 5) {
        return NextResponse.json(
            { message: `Un equipo puede tener como máximo 5 miembros` },
            { status: 400 }
        );
    }

    const currentMembers = (
        await prisma.wrestlerTeam.findMany({
            where: {
                team_id: Number(params.id),
            },
            select: {
                wrestler_id: true,
            },
        })
    ).map((wrestler: { wrestler_id: number }) =>
        wrestler.wrestler_id.toString()
    );

    const toCreate = members.filter(
        (member: string) => !currentMembers.includes(member)
    );
    const toDelete = currentMembers.filter(
        (member: string) => !members.includes(member)
    );

    const insertingOverall = Math.floor(
        overall
            ? overall
            : overalls.reduce(
                  (acc: number, curr: number) => Number(acc) + Number(curr),
                  0
              ) / overalls.length
    );

    await prisma.team.update({
        where: {
            id: Number(params.id),
        },
        data: {
            name,
            average: Number(insertingOverall),
            active: body.active,
            WrestlerTeam: {
                deleteMany: toDelete.map((member: string) => ({
                    wrestler_id: Number(member),
                })),
                create: toCreate.map((member: string) => ({
                    wrestler_id: Number(member),
                })),
            },
        },
    });

    revalidatePath("/admin/teams");
    revalidatePath("/admin/teams/update/[id]");

    return NextResponse.json(
        { message: `Se ha actualizdo ${name} correctamente` },
        { status: 200 }
    );
}
