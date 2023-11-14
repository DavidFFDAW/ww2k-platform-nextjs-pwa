import React from 'react'
import { prisma } from '@/db/conn'
import { Wrestler } from '@prisma/client';
import Form from '../../../../components/Forms/Form/Form';
import TeamUpsertForm from '../components/TeamUpsertForm';


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
            <Form
                method="POST"
                action='/api/teams/create'
                className="flex center al-center column gap wrestler-upsert-form space-down"
                debug={true}
                sendHttp={true}
                redirect='/admin/teams'
            >
                <TeamUpsertForm possibleMembers={possibleMembers} />
            </Form>
        </>
    );
}
