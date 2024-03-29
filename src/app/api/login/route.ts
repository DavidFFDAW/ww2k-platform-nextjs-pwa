import bcrypt from "bcrypt";
import { prisma } from "@/db/conn";
import { NextRequest, NextResponse } from "next/server";
import { TOKEN_COOKIE } from "@/constants/config";
import { getSignedToken } from "../helpers/token.helper";

export async function POST(request: NextRequest) {
    try {
        const credentials = await request.json();

        if (!credentials?.password)
            return NextResponse.json({
                error: true,
                message: "Debes introducir una contraseña",
            });

        const foundUser = await prisma.user.findUnique({
            where: {
                email: credentials?.email,
            },
        });

        if (!foundUser)
            return NextResponse.json({
                error: true,
                message: "No se ha encontrado este usuario",
            });

        const passwordMatch = await bcrypt.compare(
            credentials!.password.trim(),
            foundUser.password
        );

        if (!passwordMatch)
            return NextResponse.json({
                error: true,
                message: "La contraseña no coincide",
            });

        const user = {
            id: foundUser.id,
            name: foundUser.name,
            username: foundUser.username,
            email: foundUser.email,
            api_token: foundUser.api_token,
            role: foundUser.type,
        };

        const token = await getSignedToken(user);

        const response = NextResponse.json({
            error: false,
            message: "Bienvenido",
            user,
        });

        response.cookies.set({
            name: TOKEN_COOKIE,
            value: token,
            path: "/",
            maxAge: 60 * 60 * 24 * 30, // 30 days
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({
            error: true,
            message: "Ha ocurrido un error",
            error_message: error.message,
        });
    }
}
