import { getRosterWrestlers } from '@/queries/wrestler.queries';
import React from 'react';
import RosterCard from './RosterCard';

interface Props {
    searchParams: any;
}

export default async function RosterWrestlersList({ searchParams }: Props) {
    const wrestlers = await getRosterWrestlers(searchParams);

    return (
        <>
            <div className="grid responsive-grid grid-three-column unconventional-grid gap">
                {wrestlers.map(wrestler => {
                    const legendBrand = ['retired', 'semi-active'].includes(wrestler.status);

                    return (
                        <RosterCard
                            key={wrestler.id}
                            brand={legendBrand ? 'LEGEND' : wrestler.brand}
                            name={wrestler.name}
                            imgSrc={wrestler.image_name as string}
                            imgAlt="/vacant.webp"
                        />
                    );
                })}
            </div>
        </>
    );
}
