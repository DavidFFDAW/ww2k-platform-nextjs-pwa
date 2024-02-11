import { prisma } from "@/db/conn";
import { writeFileSync } from "fs";
import { NextResponse } from "next/server";
import { dirname } from "path";

export async function POST() {
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

    const p = Object.entries(group).map(([key, value]: [string, any]) => {
        return value.forEach((reign: any, index: number) => {
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

            reign.days = daysBetween;
            reign.lost_date = nextReign?.won_date;
        });
    });

    return NextResponse.json(
        {
            message: "we are till testing things out",
        },
        {
            status: 404,
        }
    );
}
