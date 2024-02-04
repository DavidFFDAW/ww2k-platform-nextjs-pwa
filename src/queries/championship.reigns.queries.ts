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
    partner_name: string;
    partner_id: number;
    partner_image: string;
    team_members: any[];
}

export interface IParsedChampionships {
    id: number;
    championship: {
        id: number;
        name: string;
        image: string;
        tag: boolean;
        brand: string;
    };
    wrestler: {
        id: number;
        name: string;
        image: string;
        brand: string;
    };
    team: {
        id: number;
        name: string;
    };
    partner: {
        id: number;
        name: string;
        image: string;
    };
    won_date: string;
    lost_date: string;
    current: boolean;
    days: number;
}

export async function getCurrentChampionshipReigns(): Promise<
    IParsedChampionships[]
> {
    const currentChampions: any =
        await prisma.$queryRaw`SELECT w.name AS wrestler_name, w.image_name AS w_image, 
    w.brand AS wrestler_brand, t.name AS team_name, c.name AS ch_name, c.image AS ch_image, 
    c.tag AS ch_tag, c.brand AS ch_brand, part.name AS partner_name, part.id AS partner_id, part.image_name AS partner_image, cr.* 
    FROM championship_reigns cr 
    LEFT JOIN wrestler w ON cr.wrestler_id = w.id 
    LEFT JOIN wrestler part ON cr.partner = part.id 
    LEFT JOIN teams t ON cr.team_id = t.id 
    INNER JOIN championship c ON cr.championship_id = c.id
    WHERE c.active = TRUE
    AND cr.lost_date IS NULL 
    AND cr.current = true 
    ORDER BY  ch_brand DESC, cr.days DESC`;

    return currentChampions.map((champion: IChampionshipReigns) => {
        return {
            id: champion.id,
            championship: {
                id: champion.championship_id,
                name: champion.ch_name,
                image: champion.ch_image,
                tag: champion.ch_tag,
                brand: champion.ch_brand,
            },
            wrestler: {
                id: champion.wrestler_id,
                name: champion.wrestler_name,
                image: champion.w_image,
                brand: champion.wrestler_brand,
            },
            team: {
                id: champion.team_id,
                name: champion.team_name,
            },
            partner: {
                id: champion.partner_id,
                name: champion.partner_name,
                image: champion.partner_image,
            },
            won_date: champion.won_date,
            lost_date: champion.lost_date,
            current: champion.current,
            days: champion.days,
        };
    });
}
