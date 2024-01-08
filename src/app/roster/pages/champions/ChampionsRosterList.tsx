import { getChampionsWrestler } from '@/queries/wrestler.queries'
import React from 'react'
import RosterCard from '../../components/RosterCard';

export default async function ChampionsRosterList() {
    const pr = await getChampionsWrestler();

    return (
        <div className="grid responsive-grid grid-three-column unconventional-grid gap">
            {pr.map((wrestler) => {
                return (<>
                    <RosterCard key={wrestler.id} imgSrc={wrestler.image_name as string} wrestler={wrestler} brand={wrestler.brand} />
                    <p>{wrestler.ChampionshipReign[0].Championship.name}</p>
                </>)
            })}
        </div>
    )
}
