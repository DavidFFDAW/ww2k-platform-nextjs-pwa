import { NextResponse } from "next/server";

export class Helpers {
    public static json(text: string, code: number) {
        return NextResponse.json(
            {
                message: text,
            },
            {
                status: code,
            }
        );
    }

    public static getBodySanitized = (field: any, def: any = "") => {
        return field ? field : def;
    };

    public static tryCatch = (callback: any) => {
        try {
            return callback();
        } catch (error: any) {
            return Helpers.json(error.message, 500);
        }
    };
}
