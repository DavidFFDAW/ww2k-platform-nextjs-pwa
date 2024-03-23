import { prisma } from "@/db/conn";

export function getAllWrestlers() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
    });
}

export function getWrestlersByLimit(limit: number, offset: number = 0) {
    return prisma.wrestler.findMany({
        take: limit,
        skip: offset,
        orderBy: {
            name: "asc",
        },
    });
}

export function getWrestlersByFiltersLimit(
    filters: any,
    limit: number = 0,
    offset: number = 0
) {
    return prisma.wrestler.findMany({
        where: filters,
        take: limit,
        skip: offset,
        orderBy: {
            name: "asc",
        },
    });
}

export function getCountedWrestlers(status: string = "all") {
    if (status === "all") {
        return prisma.wrestler.count();
    }
    return prisma.wrestler.count({
        where: {
            status,
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

export function getChampionsWrestler() {
    return prisma.wrestler.findMany({
        where: {
            ChampionshipReign: {
                some: {
                    current: true,
                },
            },
        },
        include: {
            ChampionshipReign: {
                orderBy: {
                    days: "desc",
                },
                include: {
                    Championship: true,
                },
            },
            WrestlerTeam: {
                include: {
                    Team: true,
                },
            },
        },
    });
}
