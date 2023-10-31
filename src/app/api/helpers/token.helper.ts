import { TOKEN_COOKIE } from '@/constants/config';
import { prisma } from '@/db/conn';
import { verifyJwtToken } from '@/utilities/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function getJWT(req: NextRequest) {
    const cookieToken = req.cookies.get(TOKEN_COOKIE);
    const bearerToken = { value: req.headers.get('Authorization')?.split(' ')[1] };
    const token = cookieToken || bearerToken;

    if (!token || !token.value) return null;
    return verifyJwtToken(token.value);
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

export async function isTokenValid(token: string) {
    const tokenUser = await verifyJwtToken(token);
    if (!tokenUser) return false;

    const user = await prisma.user.findFirst({
        where: {
            api_token: tokenUser.api_token as string,
        },
    });

    if (!user) return false;

    return tokenUser.email === user.email;
}
