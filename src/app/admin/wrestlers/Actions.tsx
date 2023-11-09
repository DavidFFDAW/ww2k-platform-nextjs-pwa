'use client';
import { ActionSubmit } from '@/modules/actions/ActionSubmit';
import Actions from '@/modules/actions/Actions';
import React from 'react'

export default function WrestlerActions() {
    return (
        <>
            <Actions.Container>
                <Actions.Link color={Actions.Colors.DEFAULT} toHref="/admin/wrestlers/create" icon="plus" text="Create Wrestler" />
            </Actions.Container>

        </>
    )
}
