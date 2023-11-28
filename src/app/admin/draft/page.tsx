import React from 'react'
import { getActiveWrestlers } from '@/queries/wrestler.queries';
import Title from '@/components/Title';
import Draft from './Draft';

export default async function DraftPage() {
    const userBrand = 'SmackDown';
    const wrestlers = await getActiveWrestlers();

    return (
        <>
            <Title title="Draft" />

            <Draft wrestlers={wrestlers} brand={userBrand} />
        </>
    )
}
