import React from 'react'
import Link from 'next/link'
import Title from '@/components/Title'
import SkeletonLine from '@/components/Skeleton/Line'

export default function RosterPageLoading() {
    return (
        <>
            <Title title="Roster" icon="list-ul" />

            <div className='flex center acenter gap'>
                <Link className="possible-state-item label" href="/roster/pages/individual">
                    <SkeletonLine w={100} h={20} />
                </Link>

                <Link className="possible-state-item label" href="/roster/pages/teams">
                    <SkeletonLine w={100} h={20} />
                </Link>
            </div>

        </>
    )
}
