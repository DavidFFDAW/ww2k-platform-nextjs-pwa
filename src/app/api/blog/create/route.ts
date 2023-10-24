import { prisma } from '@/db/conn';
import { NextRequest, NextResponse } from 'next/server';
import { getJWT, getNonTokenResponse, getNonValidTokenResponse, isTokenValid } from '../../helpers/token.helper';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonTokenResponse();

    const isValid = await isTokenValid(token);
    if (!isValid) return getNonValidTokenResponse();

    const { title, content, image, published, date_publication } = body;

    if (!title || title.length <= 0)
        return NextResponse.json({ message: 'Debes introducir un título' }, { status: 400 });

    if (!content || content.length <= 0)
        return NextResponse.json({ message: 'Debes introducir un contenido' }, { status: 400 });

    const publishedState = published == 'on';
    const deletable = body.is_deletable === 'on';

    const time = new Date();
    const publishedDateHour = new Date(date_publication);
    publishedDateHour.setHours(time.getHours());
    publishedDateHour.setMinutes(time.getMinutes());
    publishedDateHour.setSeconds(time.getSeconds());

    const inserted = await prisma.report.create({
        data: {
            title: title,
            content: content,
            image: image,
            visible: publishedState,
            created_at: publishedDateHour,
            deletable: deletable,
            exceptr: content.slice(0, 20),
            admin_id: (token.user as any).id,
        },
    });

    revalidatePath('/admin/blog');

    if (!inserted.id)
        return NextResponse.json({ message: 'Ha habido un error y no se ha podido crear el post' }, { status: 500 });

    return NextResponse.json({ message: 'Se ha creado el post correctamente' }, { status: 200 });
}
