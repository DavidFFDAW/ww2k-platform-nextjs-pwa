'use server'
import { revalidatePath } from "next/cache";
import { prisma } from "@/db/conn";

export async function deleteTeam(formData: FormData) {
    const teamID = formData.get('team_id');
    if (!teamID) {
        return { message: 'Post ID is required', error: true }
    }

    try {
        const hasReigns = await prisma.championshipReign.findMany({
            where: {
                team_id: Number(teamID)
            }
        });

        if (hasReigns.length > 0) {
            return { message: 'Este equipo tiene reinados como campeones y no se puede borrar.', error: true }
        }

        await prisma.wrestlerTeam.deleteMany({
            where: {
                team_id: Number(teamID)
            }
        });
        const deleted = await prisma.team.delete({
            where: {
                id: Number(teamID)
            }
        });

        if (deleted.id) return revalidatePath('/admin/team');

    } catch (error) {
        return { message: 'Something went terribly wrong', error: true }
    }
}

