import { prisma } from "@/db/conn";
import { Wrestler } from "@prisma/client";
import { NextResponse } from "next/server";
import { getAllWrestlers } from "@/queries/wrestler.queries";

const hasWrestlerChanged = (wrestler: Wrestler, updateWrestlerData: any) => {
    return (
        updateWrestlerData.name !== wrestler.name ||
        updateWrestlerData.alias !== wrestler.alias ||
        updateWrestlerData.brand !== wrestler.brand ||
        updateWrestlerData.status !== wrestler.status ||
        updateWrestlerData.overall !== wrestler.overall ||
        updateWrestlerData.finisher !== wrestler.finisher ||
        updateWrestlerData.twitter_account !== wrestler.twitter_acc ||
        updateWrestlerData.twitter_name !== wrestler.twitter_name ||
        updateWrestlerData.kayfabe !== wrestler.kayfabe_status ||
        updateWrestlerData.sex !== wrestler.sex
    );
};

function getUpdateAndInsertWrestlers(dataJson: any[]) {
    return {
        update: dataJson.filter((wrestler: any) => wrestler.id),
        insert: dataJson.filter(
            (wrestler: any) =>
                (!wrestler.id || wrestler.id == 0) && wrestler.name
        ),
    };
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const wrestlers = await getAllWrestlers();
        const dataJson = body._importcsv;

        if (!dataJson) {
            return NextResponse.json(
                { message: "No se ha enviado ningun archivo" },
                { status: 400 }
            );
        }

        const parsed = JSON.parse(dataJson);
        if (!parsed) {
            return NextResponse.json(
                { message: "No se ha podido parsear el archivo" },
                { status: 400 }
            );
        }

        const parsedDatas = parsed.map((value: any) => {
            return {
                ...value,
                id: Number(value.id),
                overall: Number(value.overall),
            };
        });

        const { update, insert } = getUpdateAndInsertWrestlers(parsedDatas);

        const changedWrestlers = update.filter((updateWrestlerData: any) => {
            const wrestler = wrestlers.find(
                (w: Wrestler) => w.id === Number(updateWrestlerData.id)
            );
            if (!wrestler) return false;
            return hasWrestlerChanged(wrestler, updateWrestlerData);
        });

        for (const updatingWrestler of changedWrestlers) {
            await prisma.wrestler.update({
                where: { id: updatingWrestler.id },
                data: {
                    name: updatingWrestler.name,
                    alias: updatingWrestler.alias,
                    brand: updatingWrestler.brand,
                    status: updatingWrestler.status,
                    overall: updatingWrestler.overall,
                    finisher: updatingWrestler.finisher,
                    twitter_acc: updatingWrestler.twitter_account,
                    twitter_name: updatingWrestler.twitter_name,
                    kayfabe_status: updatingWrestler.kayfabe,
                },
            });
        }

        for (const newWrestler of insert) {
            await prisma.wrestler.create({
                data: {
                    name: newWrestler.name,
                    alias: newWrestler.alias,
                    brand: newWrestler.brand,
                    status: newWrestler.status,
                    overall: newWrestler.overall,
                    finisher: newWrestler.finisher,
                    twitter_acc: newWrestler.twitter_account,
                    twitter_name: newWrestler.twitter_name,
                    kayfabe_status: newWrestler.kayfabe,
                    sex: newWrestler.sex,
                },
            });
        }

        return NextResponse.json(
            {
                message: `Se han actualizado ${changedWrestlers.length} luchadores y se han insertado ${insert.length} luchadores`,
            },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { message: "Error al actualizar los luchadores" },
            { status: 500 }
        );
    }
}
