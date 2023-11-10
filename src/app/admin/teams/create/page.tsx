import React from 'react'
import { prisma } from '@/db/conn'
import { ButtonCTA, DangerButton } from '@/components/Buttons/Buttons';
import { Wrestler } from '@prisma/client';
import TeamCreateForm from './TeamCreateForm';

function getPossibleMembers(): Promise<Wrestler[]> {
    return prisma.wrestler.findMany({
        orderBy: {
            name: 'asc'
        },
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
