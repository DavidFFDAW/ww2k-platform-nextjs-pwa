import { getAllWrestlers } from "@/queries/wrestler.queries";
import { Wrestler } from "@prisma/client";
import { NextResponse } from "next/server";

const hasWrestlerChanged = (wrestler: Wrestler, updateWrestlerData: any) => {
    return (
        updateWrestlerData.name !== wrestler.name ||
        updateWrestlerData.alias !== wrestler.alias ||
        updateWrestlerData.brand !== wrestler.brand ||
        updateWrestlerData.status !== wrestler.status ||
        Number(updateWrestlerData.overall) !== wrestler.overall ||
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
    const { update, insert } = getUpdateAndInsertWrestlers(parsed);

    const changedWrestlers = update.filter((updateWrestlerData: any) => {
        const wrestler = wrestlers.find(
            (w: Wrestler) => w.id === Number(updateWrestlerData.id)
        );
        if (!wrestler) return false;
        return hasWrestlerChanged(wrestler, updateWrestlerData);
    });

    console.log({
        update: update.length,
        insert: insert.length,
        howManyChanged: changedWrestlers.length,
        changingOnes: changedWrestlers.map((w) => w.name),
    });

    return NextResponse.json(
        { message: `Van a cambiar ${changedWrestlers.length} luchadores` },
        { status: 404 }
    );
}
