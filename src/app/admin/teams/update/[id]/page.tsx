import Form from '@/components/Forms/Form/Form';
import React, { Suspense } from 'react';
import { ButtonCTA } from '@/components/Buttons/Buttons';
import { getTeamDataByID } from '@/queries/teams.queries';
import TeamUpdateSkeleton from '../../components/TeamUpdateSkeleton';
import LoadedUpdateInputs from '../../components/LoadedUpdateInputs';

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { id: string } }) {
    const team = await getTeamDataByID(params.id);
    const title = !team ? 'Equipo no encontrado' : `Actualizar ${team.name}`;

    return {
        title: title,
        description: 'Actualizar equipo',
    };
}


export default async function AdminTeamUpdatePage({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
        <>
            <Form
                method="PUT"
                action={`/api/teams/update/${id}`}
                className="flex center al-center column gap wrestler-upsert-form space-down"
                debug={true}
                sendHttp={true}
                redirect="/admin/teams"
                refresh={true}
            >

                <Suspense fallback={<TeamUpdateSkeleton />}>
                    <LoadedUpdateInputs id={id} />
                </Suspense>

                <div className="flex end acenter fixed-button">
                    <ButtonCTA type={'submit'} text={'Guardar'} />
                </div>
            </Form>
        </>
    );
}
