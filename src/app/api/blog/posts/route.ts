import { NextRequest } from "next/server";
import { prisma } from "@/db/conn";

export async function GET(req: NextRequest) {
    const filters: any = {};
    const searchParams = req.nextUrl.searchParams as any;

    if (searchParams.status && searchParams.status !== 'all')
        filters['visible'] = searchParams.status === 'published' ? 1 : 0;

    if (searchParams.deletable) filters['deletable'] = 1;

    return await prisma.report.findMany({
        orderBy: {
            created_at: 'desc',
        },
        where: filters,
    });

}