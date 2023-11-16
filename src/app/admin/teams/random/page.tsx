import React from 'react'
import { prisma } from '@/db/conn';
import { Boxed } from '@/components/Box/Boxed'
import { ButtonCTA } from '@/components/Buttons/Buttons'
import { Input, InputSelect, SearchForm } from '@/components/Forms'
import { PageContext } from '@/shared/models'
import { getNamedTitle } from '@/utilities/metadatas.utility'
import { Metadata } from 'next'
import { Wrestler } from '@prisma/client';
import LazyImage from '@/components/Image/LazyImage';
import { getWrestlersWithoutTeam } from '@/queries/wrestler.queries';
import { useRouter } from 'next/navigation';
import { NullableLoading } from '@/components/Loading';

export const revalidate = 0
export const metadata: Metadata = {
    title: getNamedTitle('Generar equipo aleatorio'),
    description: 'Generar equipos aleatorios',
}

async function getRandomTeams(options: any) {
    const { quantity } = options;
    const possibleWrestlers = (await getWrestlersWithoutTeam()).map((wrestler: Wrestler) => wrestler.id);
    const shuffled = possibleWrestlers.sort(() => 0.5 - Math.random()).slice(0, Number(quantity));
    const wrestlers = await prisma.wrestler.findMany({
        where: {
            id: {
                in: shuffled,
            },
        },
    });

    return wrestlers;
}

export default async function AdminTeamsRandomPage(context: PageContext) {
    const { members_qty } = context.searchParams;
    const members: any[] = members_qty ? await getRandomTeams({ quantity: members_qty }) : [];

    return (
        <>
            <SearchForm
                url='/admin/teams/random'
                className='w1 flex center al-center column gap wrestler-upsert-form space-down'
            >
                <Boxed title={'Generar equipo aleatorio'} w={'100'}>
                    <div className='w1 flex column start gap-small'>
                        <div className='flex center astart gap-small'>
                            <InputSelect
                                required={true}
                                label={'Cantidad de miembros'}
                                name={'members_qty'}
                            >
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </InputSelect>
                        </div>
                        <div className='flex center astart gap-small'>
                            <NullableLoading condition={members.length > 0}>
                                <Input
                                    required={true}
                                    label={'Nombre del equipo'}
                                    name={'name'}
                                />
                            </NullableLoading>
                        </div>

                        <div className='w1 flex end acenter'>
                            {members.length > 0
                                ? <ButtonCTA type={'submit'} text={'Regenerar'} />
                                : <ButtonCTA type={'submit'} text={'Generar'} />}
                        </div>
                    </div>
                </Boxed>

                {members.length > 0 ? (
                    <Boxed title={'Miembros'} w={'100'}>
                        <div className='flex start acenter gap-small'>
                            {members.map((wrestler: Wrestler) => (
                                <div key={wrestler.id} className='w1 flex center acenter gap'>
                                    <LazyImage src={wrestler.image_name as string} alt={wrestler.name} width={50} height={50} />
                                    <h4>
                                        {wrestler.name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </Boxed>
                ) : null}

            </SearchForm>

        </>
    )
}
