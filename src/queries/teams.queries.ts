import { prisma } from "@/db/conn";

export function getCompleteTeamDataByID(id: string) {
    const where: any = isNaN(Number(id))
        ? { name: { contains: id } }
        : { id: Number(id) };

    return prisma.team.findFirst({
        where: where,
        include: {
            WrestlerTeam: {
                include: {
                    Team: true,
                    Wrestler: true,
                },
            },
        },
    });
}

export function getTeamDataByID(id: string) {
    return prisma.team.findFirst({
        where: {
            id: Number(id),
        },
    });
}

export function getTeams() {
    return prisma.team.findMany({
        orderBy: {
            slug: "asc",
        },
    });
}

export function getTeamsWithMembers() {
    return prisma.team.findMany({
        orderBy: {
            slug: "asc",
        },
        include: {
            ChampionshipReign: true,
            WrestlerTeam: {
                include: {
                    Wrestler: true,
                },
            },
        },
    });
}
