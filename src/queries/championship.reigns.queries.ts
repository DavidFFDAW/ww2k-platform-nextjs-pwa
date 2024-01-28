import { prisma } from "@/db/conn";
import { getTeamMembers } from "./teams.queries";

interface IChampionshipReigns {
    id: number;
    wrestler_id: number;
    team_id: number;
    championship_id: number;
    won_date: string;
    lost_date: string;
    current: boolean;
    created_at: string;
    updated_at: string;
    days: number;
    wrestler_name: string;
    w_image: string;
    wrestler_brand: number;
    team_name: string;
    ch_name: string;
    ch_image: string;
    ch_tag: boolean;
    ch_brand: string;
    team_members: any[];
}

export async function getCurrentChampionshipReigns() {
    const original =
        (await prisma.$queryRaw`SELECT w.name AS wrestler_name, w.image_name AS w_image, w.brand AS wrestler_brand, t.name AS team_name, c.name AS ch_name, c.image AS ch_image, c.tag AS ch_tag, c.brand AS ch_brand, cr.* 
    FROM championship_reigns cr 
    LEFT JOIN wrestler w ON cr.wrestler_id = w.id 
    LEFT JOIN teams t ON cr.team_id = t.id 
    INNER JOIN championship c ON cr.championship_id = c.id
    WHERE c.active= TRUE 
    AND cr.lost_date IS NULL 
    AND cr.current = true 
    ORDER BY cr.won_date, cr.days, c.brand DESC;`) as IChampionshipReigns[];

    const data = original.map(async (ch) => {
        // if (ch.ch_tag) {
        //     ch.team_members = await getTeamMembers(
        //         ch.team_id as string
        //     );
        // }
    });

    return await Promise.all(data);
}

// SELECT w.name AS wrestler_name, w.image_name AS w_image, w.brand AS wrestler_brand, t.name AS team_name, c.name, c.image AS ch_image, c.tag AS ch_tag, c.brand AS ch_brand, b.name AS real_brand, cr.*
// FROM championship_reigns cr
// LEFT JOIN wrestler w ON cr.wrestler_id = w.id
// LEFT JOIN teams t ON cr.team_id = t.id
// INNER JOIN championship c ON cr.championship_id = c.id
// LEFT JOIN brands b ON c.brand = b.id
// WHERE c.active= TRUE
// AND cr.lost_date IS NULL
// AND cr.current = true
// ORDER BY cr.won_date DESC;
