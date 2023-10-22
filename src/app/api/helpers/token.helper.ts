import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function getJWT(req: NextRequest) {
    return await getToken({ req });
}

export function getNonTokenResponse() {
    return NextResponse.json(
        {
            message:
                "No tienes permisos para realizar esta acción. Contacta con un administrador o inicia sesión en la API",
            status: 401,
        },
        { status: 401 }
    );
}
