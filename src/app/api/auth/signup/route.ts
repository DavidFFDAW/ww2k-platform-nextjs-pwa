import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: 'GET Not supported' }, { status: 405 });
}