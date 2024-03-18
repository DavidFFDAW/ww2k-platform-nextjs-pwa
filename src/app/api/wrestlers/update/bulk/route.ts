import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    const object = body.id.map((id: string, index: number) => {
        return {
            id: Number(id),
            name: body.name[index],
            alias: body.alias[index],
            overall: body.overall[index],
        };
    });

    console.log({
        object,
    });

    return NextResponse.json(
        {
            message: 'Estamos montando este panel aún',
        },
        {
            status: 200,
        },
    );
}
