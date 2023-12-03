import { prisma } from "@/db/conn";

export function getAllWrestlers() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
    });
}

export function getActiveWrestlers() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
        where: { status: "active" },
    });
}

export function getWrestlersWithoutTeam() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
        where: { WrestlerTeam: { none: {} } },
    });
}

export function getActiveWrestlersWithoutTeam() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
        where: {
            AND: [{ WrestlerTeam: { none: {} } }, { status: "active" }],
        },
    });
}
