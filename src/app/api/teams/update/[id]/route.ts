// import { prisma } from '@/db/conn';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getJWT, getNonTokenResponse } from '@/app/api/helpers/token.helper';
import { checkRequiredFields } from '@/app/api/helpers/request.helper';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();
    console.log({ params });


    const requiredFields = ['name', 'overall', 'members'];
    const { error, fields } = checkRequiredFields(body, requiredFields);

    if (error) {
        return NextResponse.json({ message: `Faltan campos obligatorios: ${fields.join(', ')}` }, { status: 400 });
    }

    const { name, overall, members } = body;
    if (members.length < 2) {
        return NextResponse.json({ message: `Un equipo debe tener al menos 2 miembros` }, { status: 400 });
    }
    if (members.length > 5) {
        return NextResponse.json({ message: `Un equipo puede tener como máximo 5 miembros` }, { status: 400 });
    }

    revalidatePath('/admin/teams');

    // if (!inserted.id)
    //     return NextResponse.json({ message: 'Ha habido un error y no se ha podido crear el equipo' }, { status: 500 });

    return NextResponse.json({ message: 'Se ha creado el equipo correctamente' }, { status: 200 });
}
