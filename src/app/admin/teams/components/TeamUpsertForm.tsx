'use client';
import { Boxed } from '@/components/Box/Boxed'
import { Input } from '@/components/Forms'
import { Wrestler } from '@prisma/client'
import React from 'react'
import Form from '@/components/Forms/Form/Form'
import { ButtonCTA } from '@/components/Buttons/Buttons';
import GroupSelection from './GroupSelection';

export default function TeamUpsertForm({ possibleMembers }: { possibleMembers: Wrestler[] }) {

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
                <Boxed title={'Datos del equipo'} w={'100'}>
                    <div className="flex center astart gap-small">
                        <Input
                            required={true}
                            max={150}
                            label={'Nombre'}
                            name={'name'}
                        />
                        <Input
                            type={'number'}
                            max={3}
                            required={true}
                            label={'Media'}
                            name={'overall'}
                        />
                    </div>
                </Boxed>

                <GroupSelection list={possibleMembers} />

                <div className='flex end acenter fixed-button'>
                    <ButtonCTA type={'submit'} text={'Guardar'} />
                </div>
            </Form>
        </>
    )
}
