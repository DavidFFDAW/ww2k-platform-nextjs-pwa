import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { getJWT, getNonValidTokenResponse } from "../../helpers/token.helper";
import { checkRequiredFields } from "../../helpers/request.helper";
import { revalidatePath } from "next/cache";

interface BulkUpdateBody {
    datas: {
        id: number;
        name: string;
        alias: string;
        finisher: string;
    }[];
}

function bulkUpdateWrestlers(body: BulkUpdateBody) {
    const updatingArray = body.datas.map((wrestler) => {
        return prisma.wrestler.update({
            where: { id: Number(wrestler.id) },
            data: {
                name: wrestler.name,
                alias: wrestler.alias,
                finisher: wrestler.finisher,
            },
        });
    });

    return Promise.all(updatingArray);
}

export async function PUT(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    try {
        await bulkUpdateWrestlers(body);
        revalidatePath("/admin/wrestlers/bulk-update");
        return NextResponse.json(
            { message: "Se han actualizado todo los campos" },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
