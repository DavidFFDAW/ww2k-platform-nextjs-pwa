import React, { Suspense } from 'react'
import RosterWrestlersListSkeleton from '../../components/RosterWrestlersListSkeleton'
import Title from '@/components/Title'
import ChampionsRosterList from './ChampionsRosterList'

export default function RosterChampionsPage() {
  return (
        <>
            <Title title="Equipos" icon="people" />

            {/* <StatusLabelContainer fixed={true}>
                <StatusLabel
                    name="all"
                    text={"Todos"}
                    href={"?"}
                    activeLink={searchBrand}
                />
                <StatusLabel
                    name="RAW"
                    text={"RAW"}
                    href={"?brand=RAW"}
                    activeLink={searchBrand}
                />
                <StatusLabel
                    name="SD"
                    text={"SmackDown"}
                    href={"?brand=SD"}
                    activeLink={searchBrand}
                />
                <StatusLabel
                    name="AWL"
                    text={"AWL"}
                    href={"?brand=AWL"}
                    activeLink={searchBrand}
                />
            </StatusLabelContainer> */}


            <div className="grid-pre-container" style={{ marginTop: 80 }}>
                <Suspense fallback={<RosterWrestlersListSkeleton />}>
                    <ChampionsRosterList />
                </Suspense>
            </div>
        </>
  )
}
