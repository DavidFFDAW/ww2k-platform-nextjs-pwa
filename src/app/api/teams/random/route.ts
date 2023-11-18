import { prisma } from "@/db/conn";
import { Wrestler } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        const randomMembers = await getRandomTeams(body);

        return NextResponse.json(
            {
                data: randomMembers,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                message: error.message,
            },
            { status: 500 }
        );
    }
}

const getOverallRange = (overall: number) => {
    const min = overall ? overall - 5 : 0;
    const max = overall ? overall + 5 : 120;
    return { min, max };
};

const getSexRange = (gender: string) => {
    const genderLookup: any = {
        both: ["M", "F"],
        male: ["M"],
        female: ["F"],
    };

    return genderLookup[gender.trim().toLowerCase()] || genderLookup.both;
};
const getKayfabeRange = (kayfabe: string) => {
    const kayfabeLookup: any = {
        both: ["heel", "face"],
        heel: ["heel"],
        face: ["face"],
    };

    return kayfabeLookup[kayfabe.trim().toLowerCase()] || kayfabeLookup.both;
};

async function getRandomTeams(options: any) {
    const { quantity, gender, overall, kayfabe } = options;
    const overallRange = getOverallRange(overall);
    const kayfabeRange = getKayfabeRange(kayfabe);
    const sex = getSexRange(gender);

    const wrestlers = await prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
        where: {
            AND: [
                { WrestlerTeam: { none: {} } },
                { status: "active" },
                { overall: { gte: overallRange.min, lte: overallRange.max } },
                {
                    sex: {
                        in: sex,
                    },
                },
                {
                    kayfabe_status: {
                        in: kayfabeRange,
                    },
                },
            ],
        },
    });
    const possibleWrestlers = wrestlers.map(
        (wrestler: Wrestler) => wrestler.id
    );

    const shuffled = possibleWrestlers
        .sort(() => 0.5 - Math.random())
        .slice(0, Number(quantity));

    return await prisma.wrestler.findMany({
        where: {
            id: {
                in: shuffled,
            },
        },
    });
}
