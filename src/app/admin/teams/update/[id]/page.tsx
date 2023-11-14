import Form from '@/components/Forms/Form/Form'
import React from 'react'
import { prisma } from '@/db/conn'
import { Wrestler } from '@prisma/client';
import { ButtonCTA } from '@/components/Buttons/Buttons';
import GroupSelection from '../../components/GroupSelection';
import { Boxed } from '@/components/Box/Boxed';
import { Input } from '@/components/Forms';
import { NumberInput } from '@/components/Forms/Inputs/Number';
import { HiddenInput } from '@/components/Forms/Inputs/Hidden';

function getPossibleMembers(): Promise<Wrestler[]> {
    return prisma.wrestler.findMany({
        orderBy: {
            name: 'asc'
        },
        where:
            { WrestlerTeam: { none: {} } },
    });
}

function getCurrentTeamData(id: string) {
    return prisma.team.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            WrestlerTeam: {
                include: {
                    Team: true,
                    Wrestler: true,
                }
            }
        },
    });
}

export default async function AdminTeamUpdatePage({ params }: { params: { id: string } }) {
    const id = params.id;
    const [possibleMembers, currentTeamData] = await Promise.all([getPossibleMembers(), getCurrentTeamData(id)]);

    if (!currentTeamData || !possibleMembers || !id) {
        return <p>Equipo no encontrado</p>
    }

    const teamMembers = currentTeamData?.WrestlerTeam.map(w => ({
        id: w.Wrestler.id,
        name: w.Wrestler.name,
        image: w.Wrestler.image_name,
    }));

    return (
        <>
            <Form
                method="PUT"
                action={`/api/teams/update/${id}`}
                className="flex center al-center column gap wrestler-upsert-form space-down"
                debug={true}
                sendHttp={true}
                redirect='/admin/teams'
            >
                <Boxed title={'Datos del equipo'} w={'100'}>
                    <div className="flex center astart gap-small">
                        <HiddenInput name={'id'} value={currentTeamData.id} />
                        <Input
                            required={true}
                            max={150}
                            label={'Nombre'}
                            name={'name'}
                            value={currentTeamData.name}
                        />
                        <NumberInput
                            type={'number'}
                            max={3}
                            required={true}
                            label={'Media'}
                            name={'overall'}
                            value={currentTeamData.average}
                        />
                    </div>
                </Boxed>

                <GroupSelection list={possibleMembers} members={teamMembers} />

                <div className='flex end acenter fixed-button'>
                    <ButtonCTA type={'submit'} text={'Guardar'} />
                </div>
            </Form>

        </>
    )
}
