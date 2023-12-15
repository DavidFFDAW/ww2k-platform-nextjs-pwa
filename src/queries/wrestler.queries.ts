import { prisma } from "@/db/conn";

export function getAllWrestlers() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
    });
}

export function getWrestlerByID(id: number) {
    return prisma.wrestler.findUnique({
        where: {
            id: id,
        },
    });
}
export function getWrestlerByIdOrName(id: string) {
    if (isNaN(Number(id))) {
        return prisma.wrestler.findFirst({
            where: {
                name: {
                    contains: id,
                },
            },
        });
    }
    return prisma.wrestler.findFirst({
        where: {
            id: Number(id),
        },
    });
}

export function getRosterWrestlers(searchParams: any) {
    const filters: any = {
        status: {
            not: {
                in: ["released"],
            },
        },
    };
    if (searchParams.search) {
        filters["name"] = {
            contains: searchParams.search,
        };
    }
    if (searchParams.brand) {
        filters["brand"] = searchParams.brand;
    }

    return prisma.wrestler.findMany({
        where: filters,
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
