import { prisma } from '@/db/conn';
import { NextRequest, NextResponse } from 'next/server';
import { getJWT, getNonTokenResponse } from '../../../helpers/token.helper';
import { revalidatePath } from 'next/cache';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();

    const id = params.id;
    if (!id) return NextResponse.json({ message: 'Debes introducir un Id para poder actualizar un post' }, { status: 300 });

    const { title, content, image, published, date_publication } = body;

    if (!title || title.length <= 0)
        return NextResponse.json({ message: 'Debes introducir un título' }, { status: 400 });

    if (!content || content.length <= 0)
        return NextResponse.json({ message: 'Debes introducir un contenido' }, { status: 400 });

    const publishedState = published == 'on';
    const deletable = body.is_deletable === 'on';

    const inserted = await prisma.report.update({
        where: {
            id: Number(id),
        },
        data: {
            title: title.trim(),
            content: content.trim(),
            image: image.trim(),
            visible: publishedState,
            created_at: new Date(date_publication),
            deletable: deletable,
            exceptr: content.trim().slice(0, content.trim().length / 2),
            admin_id: token.id as number,
        },
    });

    revalidatePath('/admin/blog', 'page');
    revalidatePath(`/admin/blog/update/${id}`, 'page');

    if (!inserted.id)
        return NextResponse.json({ message: 'Ha habido un error y no se ha podido crear el post' }, { status: 500 });

    return NextResponse.json({ message: 'Se ha actualizado el post correctamente' }, { status: 200 });
}

export const dynamic = 'force-dynamic';
