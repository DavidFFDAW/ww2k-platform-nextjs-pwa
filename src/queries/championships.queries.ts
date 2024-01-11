import { prisma } from "@/db/conn";

export function getActiveChampionships() {
    return prisma.championship.findMany({
        where: {
            active: true,
        },
        orderBy: {
            name: "asc",
        },
    });
}