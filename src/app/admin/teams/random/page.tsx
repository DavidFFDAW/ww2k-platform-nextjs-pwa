import { Boxed } from '@/components/Box/Boxed'
import { ButtonCTA } from '@/components/Buttons/Buttons'
import { Input, InputSelect, SearchForm } from '@/components/Forms'
import Form from '@/components/Forms/Form/Form'
import { getNamedTitle } from '@/utilities/metadatas.utility'
import { Metadata } from 'next'
import React from 'react'

export const revalidate = 0
export const metadata: Metadata = {
    title: getNamedTitle('Generar equipo aleatorio'),
    description: 'Generar equipos aleatorios',
}

export default function AdminTeamsRandomPage() {
    return (
        <>
            <SearchForm
                url='/admin/teams/random'
                className='w1 flex center al-center column gap wrestler-upsert-form space-down'
            >
                <Boxed title={'Generar equipo aleatorio'} w={'100'}>
                    <div className='flex center astart gap-small'>
                        <Input
                            required={true}
                            max={150}
                            label={'Nombre'}
                            name={'name'}
                        />
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
                </Boxed>
                <ButtonCTA type={'submit'} text={'Generar'} />
            </SearchForm>

        </>
    )
}
