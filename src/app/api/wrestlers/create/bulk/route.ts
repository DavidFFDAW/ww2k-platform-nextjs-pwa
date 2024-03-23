import { prisma } from "@/db/conn";
import { Wrestler as WrestlerModel } from "@/models/Wrestler";
import { Wrestler } from "@prisma/client";
import { Helpers } from "@/app/api/helpers/Helpers.class";

function isEmpty(wr: Wrestler) {
    return (
        !wr.name &&
        !wr.alias &&
        !wr.overall &&
        !wr.finisher &&
        !wr.twitter_acc &&
        !wr.twitter_name
    );
}

export async function POST(req: Request) {
    const body = await req.json();

    if (!body.name || !body.name.length) {
        return Helpers.json(
            "No se han encontrado luchadores para insertar.",
            400
        );
    }

    const wrestlers = await WrestlerModel.getAllWrestlers();
    const dbWrestlerNames = wrestlers.map((wrestler) => wrestler.name);

    const arrayWrestlers = body.name.map((_: any, index: number) => {
        return {
            name: Helpers.getBodySanitized(body.name[index], "").trim(),
            alias: Helpers.getBodySanitized(body.alias[index], "").trim(),
            brand: Helpers.getBodySanitized(body.brand[index], "").trim(),
            status: Helpers.getBodySanitized(body.status[index], "").trim(),
            overall: Number(Helpers.getBodySanitized(body.overall[index], 0)),
            finisher: Helpers.getBodySanitized(body.finisher[index], "").trim(),
            twitter_acc: Helpers.getBodySanitized(
                body.twitter_acc[index],
                ""
            ).trim(),
            twitter_name: Helpers.getBodySanitized(
                body.twitter_name[index],
                ""
            ).trim(),
            kayfabe_status: Helpers.getBodySanitized(
                body.kayfabe_status[index],
                ""
            ).trim(),
            sex: Helpers.getBodySanitized(body.sex[index], "").trim(),
        };
    });

    const insertingWrestlers: any = arrayWrestlers.filter(
        (newWrestler: Wrestler) =>
            !dbWrestlerNames.includes(newWrestler.name) && !isEmpty(newWrestler)
    );

    Helpers.tryCatch(async () => {
        for (const newWrestler of insertingWrestlers) {
            await prisma.wrestler.create({
                data: {
                    name: newWrestler.name,
                    alias: newWrestler.alias,
                    brand: newWrestler.brand,
                    status: newWrestler.status,
                    overall: newWrestler.overall,
                    finisher: newWrestler.finisher,
                    twitter_acc: `@${newWrestler.twitter_acc}`,
                    twitter_name: newWrestler.twitter_name,
                    kayfabe_status: newWrestler.kayfabe_status,
                    sex: newWrestler.sex,
                },
            });
        }
    });

    return Helpers.json(
        `Se han insertado ${insertingWrestlers.length} luchadores correctamente.`,
        200
    );
}
