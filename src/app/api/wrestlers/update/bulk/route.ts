import { prisma } from "@/db/conn";
import { Wrestler } from "@prisma/client";
import { NextResponse } from "next/server";
import { getWrestlersByLimit } from "@/queries/wrestler.queries";

const hasWrestlerChanged = (wrestler: Wrestler, updateWrestlerData: any) => {
    return (
        updateWrestlerData.name !== wrestler.name ||
        updateWrestlerData.alias !== wrestler.alias ||
        updateWrestlerData.brand !== wrestler.brand ||
        updateWrestlerData.status !== wrestler.status ||
        updateWrestlerData.overall !== wrestler.overall
    );
};

export async function POST(req: Request) {
    const body = await req.json();
    const limit = Number(body.limit) || 20;
    const offset = Number(body.offset) || 0;
    const wrestlers = await getWrestlersByLimit(limit, offset);

    const arrayWrestlers = body.id.map((id: string, index: number) => {
        return {
            id: Number(id),
            name: body.name[index],
            alias: body.alias[index],
            overall: Number(body.overall[index]),
            status: body.status[index],
            brand: body.brand[index],
        };
    });

    const changedWrestlers = arrayWrestlers.filter(
        (updateWrestlerData: any) => {
            const wrestler = wrestlers.find(
                (w: Wrestler) => w.id === Number(updateWrestlerData.id)
            );
            if (!wrestler) return false;
            return hasWrestlerChanged(wrestler, updateWrestlerData);
        }
    );

    try {
        for (const updatingWrestler of changedWrestlers) {
            await prisma.wrestler.update({
                where: { id: updatingWrestler.id },
                data: {
                    name: updatingWrestler.name,
                    alias: updatingWrestler.alias,
                    brand: updatingWrestler.brand,
                    status: updatingWrestler.status,
                    overall: updatingWrestler.overall,
                },
            });
        }
    } catch (error) {
        return NextResponse.json(
            {
                message: "Ha ocurrido un error al actualizar los luchadores",
            },
            {
                status: 400,
            }
        );
    }

    return NextResponse.json(
        {
            message: `Se han actualizado ${changedWrestlers.length} luchadores correctamente`,
        },
        {
            status: 200,
        }
    );
}
