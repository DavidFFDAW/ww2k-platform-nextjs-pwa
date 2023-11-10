'use client';
import { Boxed } from '@/components/Box/Boxed'
import { Input } from '@/components/Forms'
import ScrollableArea from '@/components/Scrollable/ScrollableArea'
import { Wrestler } from '@prisma/client'
import React from 'react'
import Form from '@/components/Forms/Form'
import { ButtonCTA } from '@/components/Buttons/Buttons';
import Select from '@/modules/select/Select';

export default function TeamCreateForm({ possibleMembers }: { possibleMembers: Wrestler[] }) {

    return (
        <>
            <Form
                method="POST"
                className="flex center al-center column gap wrestler-upsert-form space-down"
                onSubmitCallback={(formData: FormData) => {
                    console.log('formData', formData);
                }}
                debug={true}
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

                <Boxed w={'100'}>
                    <div className="space-down">
                        <ScrollableArea height={200} title={'Miembros de equipo'}>
                            {/* <MembersList property={'members'} /> */}
                        </ScrollableArea>
                    </div>

                    <Select
                        zIndex={100}
                        listHeight={250}
                        name={'select-wrestler-team'}
                        list={possibleMembers.map(i => ({ id: i.id, name: i.name, image: i.image_name }))}
                        selectCallback={(item: any) => { console.log('selected ', { item }); }}
                    />

                </Boxed>

                <div className='flex end acenter fixed-button'>
                    <ButtonCTA type={'submit'} text={'Guardar'} />
                </div>
            </Form>
        </>
    )
}
