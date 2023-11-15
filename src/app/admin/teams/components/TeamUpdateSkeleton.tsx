import { Boxed } from '@/components/Box/Boxed'
import { InputSkeleton } from '@/components/Forms/Inputs/InputSkeleton'
import React from 'react'
import GroupSelectionSkeleton from './GroupSelectionSkeleton'

export default function TeamUpdateSkeleton() {
    return (
        <>
            <Boxed title={'Datos del equipo'} w={'100'}>
                <div className="flex center astart gap-small">
                    <InputSkeleton label='Nombre' />
                    <InputSkeleton label='Media' />
                </div>
            </Boxed>

            <GroupSelectionSkeleton />
        </>
    )
}
