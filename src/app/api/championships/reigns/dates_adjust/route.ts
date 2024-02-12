import { prisma } from "@/db/conn";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const titleReigns = await prisma.championshipReign.findMany({
            orderBy: [
                {
                    championship_id: "asc",
                },
                {
                    won_date: "asc",
                },
            ],
            include: {
                Championship: true,
                Wrestler: true,
                Team: true,
            },
        });

        const group: any = {};
        titleReigns.forEach((reign) => {
            if (!group[reign.Championship.id]) {
                group[reign.Championship.id] = [];
            }
            group[reign.Championship.id].push(reign);
        });

        const updatingChampionshipReigns = Object.entries(group).reduce((acc: any, [_, value]: [string, any]) => {
            value.forEach((reign: any, index: number) => {
                const nextReign = value[index + 1];
                if (!nextReign) {
                    return;
                }

                const currentWinDate = new Date(reign.won_date);
                const nextReignDate = new Date(nextReign?.won_date);

                const daysBetween = Math.floor(
                    (nextReignDate.getTime() - currentWinDate.getTime()) /
                    (1000 * 60 * 60 * 24)
                );

                acc = [...acc, {
                    ...reign,
                    title: reign.Championship.name,
                    man: reign.Wrestler?.name,
                    days: daysBetween,
                    lost_date: nextReign?.won_date,
                }];
            });
            return acc;
        }, []);

        const affectedRows = updatingChampionshipReigns.reduce(async (accumulator: number, element: any) => {
            const result = await prisma.championshipReign.update({
                where: {
                    id: element.id,
                },
                data: {
                    days: element.days,
                    lost_date: element.lost_date,
                },
            });

            if (result.id) accumulator++;
            return accumulator;
        }, 0);

        return NextResponse.json(
            {
                message: `Se han actualizado ${affectedRows} registros`,
            },
            {
                status: 200,
            }
        );
    } catch (error: any) { 
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
