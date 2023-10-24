import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db/conn";

export async function GET(req: NextRequest) {
    const filters: any = {};
    const searchParams = req.nextUrl.searchParams as any;

    if (searchParams.status && searchParams.status !== 'all')
        filters['visible'] = searchParams.status === 'published'

    if (searchParams.deletable) filters['deletable'] = true;

    const posts = await prisma.report.findMany({
        orderBy: {
            created_at: 'desc',
        },
        where: filters,
    });

    return NextResponse.json({ posts });

}