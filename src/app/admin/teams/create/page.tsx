import React from 'react'
import { prisma } from '@/db/conn'
import Title from '@/components/Title';


export default async function AdminTeamsCreatePage() {

    return (
        <>
            <Title title="Crear equipo" icon='people-fill' />

        </>
    )
}
