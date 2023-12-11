import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const search = req.nextUrl.searchParams;
    const brand = search.get("brand");
    // const page = search.get('page');
    // const ITEMS_PER_PAGE = 15;
    // const offset = (Number(page) - 1) * ITEMS_PER_PAGE;

    const filters: any = {
        status: {
            not: {
                in: ["manager", "released"],
            },
        },
    };
    if (brand) {
        filters["brand"] = brand;
    }

    try {
        const wrestlers = await prisma.wrestler.findMany({
            // take: ITEMS_PER_PAGE,
            // skip: offset,
            where: filters,
            orderBy: {
                name: "asc",
            },
        });
        return NextResponse.json({
            wrestlers,
        });
    } catch (error: any) {
        return NextResponse.json(
            {
                error: error.message,
            },
            { status: 500 }
        );
    }
}
