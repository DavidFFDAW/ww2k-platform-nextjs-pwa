import { prisma } from "@/db/conn";

export function getAllTweets(page: number | string, filters: any) {
    const realPage = Number(page) || 1;

    return prisma.tweets.findMany({
        take: 10,
        skip: Math.abs((realPage - 1) * 10),
        where: {
            AND: [
                {
                    wrestler: {
                    name: {
                        contains: filters.author,
                    },
                    },
                },
                {
                    message: {
                        contains: filters.message,
                    },
                },
            ]
            
        },
        orderBy: {
            created_at: "desc",
        },
        include: {
            wrestler: true,
        }
    });
}

export function getTweetByID(id: number) {
    return prisma.tweets.findUnique({
        where: {
            id: id,
        },
        include: {
            wrestler: true,
        }
    });
}

export function getTweetRepliesByID(id: number) {
    return prisma.tweets.findMany({
        where: {
            reply_to: id,
        },
        orderBy: {
            created_at: "desc",
        },
        include: {
            wrestler: true,
        }
    });
}