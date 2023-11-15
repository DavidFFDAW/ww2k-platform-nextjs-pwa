import { prisma } from "@/db/conn";

export function getWrestlersWithoutTeam() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: 'asc',
        },
        where: { WrestlerTeam: { none: {} } },
    });
}