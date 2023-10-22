import { prisma } from '@/db/conn';
import { JWT, getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function getJWT(req: NextRequest) {
    return await getToken({ req });
}

export function getNonTokenResponse() {
    return NextResponse.json(
        {
            message:
                'No tienes permisos para realizar esta acción. Contacta con un administrador o inicia sesión en la API',
            status: 401,
        },
        { status: 401 },
    );
}

export function getNonValidTokenResponse() {
    return NextResponse.json(
        {
            message: 'El token introducido no es válido. Contacta con un administrador o inicia sesión en la API',
            status: 401,
        },
        { status: 401 },
    );
}

export async function isTokenValid(token: JWT) {
    const apiToken = (token.user as any).api_token;
    const user = await prisma.user.findFirst({
        where: {
            api_token: apiToken,
        },
    });

    if (!user) return false;

    return token.email === user.email;
}
