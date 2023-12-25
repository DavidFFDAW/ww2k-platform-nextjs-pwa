import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const wrestlerImages =
            await prisma.$queryRaw`SELECT g.*, w.name FROM gallery g INNER JOIN wrestler w ON w.id = g.external_item_id WHERE type = 'wrestler'`;

        return NextResponse.json({
            error: false,
            message: "Galería de imágenes",
            images: wrestlerImages,
        });
    } catch (error: any) {
        return NextResponse.json({
            error: true,
            message: "Ha ocurrido un error",
            error_message: error.message,
        });
    }
}
