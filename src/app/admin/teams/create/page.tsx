import React from 'react'
import { prisma } from '@/db/conn'
import { Wrestler } from '@prisma/client';
import TeamCreateForm from './TeamCreateForm';

function getPossibleMembers(): Promise<Wrestler[]> {
    return prisma.wrestler.findMany({
        orderBy: {
            name: 'asc'
        },
        include: {
            WrestlerTeam: true,
        },
        where:
            { WrestlerTeam: { none: {} } },
    });
}


export default async function AdminTeamsCreatePage() {
    const possibleMembers = await getPossibleMembers();

    return (
        <>
            <TeamCreateForm possibleMembers={possibleMembers} />
        </>
    );
}
