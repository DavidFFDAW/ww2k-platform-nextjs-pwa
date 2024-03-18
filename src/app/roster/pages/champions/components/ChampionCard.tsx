'use client';
import React from 'react';
import LazyImageTwo from '@/components/Image/LazyImageTwo';
import BrandImage from '@/app/roster/components/BrandImage';
import RosterCardName from '@/app/roster/components/RosterCardName';
import { IParsedChampionships } from '@/queries/championship.reigns.queries';

interface Props {
    reign: IParsedChampionships;
}

export default function ChampionCard({ reign }: Props) {
    return (
        <div className="w1 entire-roster-champion-card" key={reign.id}>
            <div className={'w1 roster-card relative brand-' + reign.championship.brand}>
                <div className="overlay-gradient"></div>
                <div className="roster-wrestler-brand">
                    <BrandImage brand={reign.championship.brand.toUpperCase()} />
                </div>

                <LazyImageTwo
                    width={128}
                    height={128}
                    src={reign.wrestler.image}
                    srcError={'/noimage.jpg'}
                    alt={reign.wrestler.name}
                    className="total-image roster-lazy-image image-container"
                />

                <div className="championship-image-container">
                    <LazyImageTwo
                        width={64}
                        height={64}
                        src={reign.championship.image}
                        srcError="/noimage.jpg"
                        alt={reign.championship.name}
                        className="total-image roster-lazy-image-championship"
                    />
                </div>

                <div className="roster-card-wrestler-name-container">
                    <RosterCardName name={reign.wrestler.name} brand={reign.championship.brand} />
                </div>

                <div className="roster-card-title-reign-days">
                    <p className="days">{reign.days} dias</p>
                </div>
            </div>
            <div className={'relative roster-card-championship-name-container brand-' + reign.championship.brand}>
                <RosterCardName name={reign.championship.name} brand={reign.championship.brand} />
            </div>
        </div>
    );
}
