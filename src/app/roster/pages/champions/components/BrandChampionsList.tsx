import { IParsedChampionships } from '@/queries/championship.reigns.queries';
import React from 'react'
import TagTeamChampionCard from './TagTeamChampionCard';
import ChampionCard from './ChampionCard';

interface IChamps {
    list: IParsedChampionships[];
}

export default function BrandChampionsList({ list }: IChamps) {
    return (
        <>
            {list.map((reign: IParsedChampionships) => {
                if (Boolean(reign.championship.tag))
                    return (
                        <TagTeamChampionCard
                            reign={reign}
                            key={reign.id}
                        />
                    );
                return <ChampionCard reign={reign} key={reign.id} />;
            })}
        </>
    )
}
