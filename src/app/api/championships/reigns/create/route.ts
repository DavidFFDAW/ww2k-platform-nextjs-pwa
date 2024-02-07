import {
    getJWT,
    getNonValidTokenResponse,
} from "@/app/api/helpers/token.helper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const token = await getJWT(request);
    if (!token) return getNonValidTokenResponse();

    // STEPS to save a new championship reign
    if (!Boolean(body.championship_id)) {
        return NextResponse.json(
            { message: "No championship has been specified" },
            { status: 400 }
        );
    }
    if (!Boolean(body.wrestler_or_team_id)) {
        return NextResponse.json(
            { message: "No wrestler or team has been specified :(" },
            { status: 400 }
        );
    }

    const isTagTeam = Boolean(body.is_tag_team);

    if (isTagTeam && (!body.partners || body.partners.length !== 2)) {
        return NextResponse.json(
            { message: "Tag team championships must have 2 members" },
            { status: 400 }
        );
    }

    const championship = await prisma?.championship.findUnique({
        where: { id: Number(body.championship_id) },
    });
    if (!championship) {
        return NextResponse.json(
            { message: "Specified championship not found in database" },
            { status: 404 }
        );
    }

    const currentChampion = await prisma?.championshipReign.findFirst({
        where: {
            championship_id: Number(body.championship_id),
            current: true,
        },
    });

    if (!currentChampion) {
        console.log('no current champion found');
    }

    if (currentChampion && Boolean(body.current)) {
        console.log('save current with days between', {
            currentChampion,
        });

        const winDate = new Date(body.win_date);
        const lostDate = new Date(currentChampion.won_date);
        const days = Math.abs(
            (winDate.getTime() - lostDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        
        await prisma?.championshipReign.update({
            where: { id: currentChampion.id },
            data: {
                current: false,
                lost_date: body.win_date,
                days: days,
            },
        });
    }

    const data: any = isTagTeam ? {
        championship_id: Number(body.championship_id),
        team_id: Number(body.wrestler_or_team_id),
        wrestler_id: Number(body.partners[0]),
        partner: Number(body.partners[1]),
        won_date: new Date(body.won_date),
        lost_date: body.lost_date ? new Date(body.lost_date) : null,
        current: Boolean(body.current),
        days: body.days,
    } : {
        championship_id: Number(body.championship_id),
        wrestler_id: Number(body.wrestler_or_team_id),
        won_date: new Date(body.won_date),
        lost_date: body.lost_date ? new Date(body.lost_date) : null,
        current: Boolean(body.current),
        days: body.days,
    };

    await prisma?.championshipReign.create({
        data,
    });

    // 1. Check if the championship exists
    // 2. Check the rest of the fields
    // 3. Check if is a tag team championship
    // 4. Get current champion for that championship (CA)
    // 6. If the new reign is current, update the current champion (CA)
    // with the end_date to the win_date of the new reign and calculate the days between 
    // the two dates. Update the old reign and set current to false.
    // 7. Save the new reign

    console.log({
        body,
        data,
    });

    return NextResponse.json(
        { message: "Championship reign has been saved" },
        { status: 200 }
    );
}
