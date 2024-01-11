import { Boxed } from '@/components/Box/Boxed';
import { ButtonCTA } from '@/components/Buttons/Buttons';
import { Form, Input, InputDate, ToggleInput } from '@/components/Forms';
import { NumberInput } from '@/components/Forms/Inputs/Number';
import Title from '@/components/Title';
import Select from '@/modules/select/Select';
import { getActiveChampionships } from '@/queries/championships.queries';
import { getAllWrestlers } from '@/queries/wrestler.queries';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import { Metadata } from 'next';
import React from 'react'

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle('Crear nuevo reinado'),
    description: 'Create a championship reign',
};

export default async function AdminChampionshipReignCreatePage() {
    const [wrestlers, championships] = await Promise.all([
        getAllWrestlers(),
        getActiveChampionships(),
    ]);

    return (
        <>
            <Title title="Crear un reinado" icon="trophy-fill" />

            <Form
                method='POST'
                action='/api/championships/reigns/create'
                className='grid one-column-grid astart place-items-normal responsive-grid gap reigns-upsert-form'
                redirect='/admin/championships/reigns'
                sendHttp={true}
            >
                <Boxed w='100' title='Luchador y título'>
                    <div className='grid two-column-grid astart place-items-normal gap-small grid-responsive'>
                        <Select
                            zIndex={1000}
                            name='wrestler_id'
                            label='Luchador'
                            required={true}
                            listHeight={350}
                            placeholder='Selecciona un luchador...'
                            list={wrestlers.map((wrestler) => ({
                                id: wrestler.id,
                                name: wrestler.name,
                                image: wrestler.image_name,
                            }))}
                        />

                        <Select
                            zIndex={1000}
                            name='championship_id'
                            label='Título'
                            required={true}
                            listHeight={350}
                            placeholder='Selecciona un título...'
                            list={championships.map((championship) => ({
                                id: championship.id,
                                name: championship.name,
                                image: championship.image,
                            }))}
                        />
                    </div>
                </Boxed>

                <Boxed w='100' title='Días del reinado'>
                    <div className='flex column gap'>
                        <div className='flex start aend place-items-end gap-small flex-responsive'>
                            <NumberInput
                                name='days'
                                value='0'
                                label='Días'
                                placeholder='Días del reinado'
                                required={true}
                            />

                            <InputDate
                                name='won_date'
                                label='Fecha de inicio'
                                required={true}
                            />
                        </div>

                        <div className='flex start aend place-items-end gap-small flex-responsive responsive-align-center'>
                            <div className='w1'>
                                <ToggleInput
                                    name='current'
                                    label='¿Es el reinado actual?'
                                    checked={false}
                                />
                            </div>

                            <InputDate
                                name='lost_date'
                                label='Fecha de final'
                                required={true}
                            />
                        </div>
                    </div>
                </Boxed>

                <div className="fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar cambios"} />
                </div>
            </Form>

        </>
    )
}
