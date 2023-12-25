import { prisma } from "@/db/conn";

export const getWrestlerImages = () => {
    return prisma.$queryRaw`SELECT g.*, w.name FROM gallery g INNER JOIN wrestler w ON w.id = g.external_item_id WHERE type = 'wrestler'`;
};
