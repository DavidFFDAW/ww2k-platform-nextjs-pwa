import { prisma } from "@/db/conn";

export function getCompleteTeamDataByID(id: string) {
    return prisma.team.findFirst({
        where: {
            id: Number(id),
        },
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
            name: "asc",
        },
    });
}

export function getTeamsWithMembers() {
    return prisma.team.findMany({
        orderBy: {
            name: "asc",
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