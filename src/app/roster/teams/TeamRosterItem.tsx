import { Team } from '@prisma/client';
import React from 'react';
import BrandImage from '../components/BrandImage';
import RosterCardName from '../components/RosterCardName';
import { NullableLoading } from '@/components/Loading';

interface TeamRosterItemProps {
    team: Team;
}

export default function TeamRosterItem({ team }: TeamRosterItemProps) {
    const brands = ['RAW', 'SD', 'AWL'];
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];
    return (
        <div className={'w1 grid-item roster-card relative brand-' + (team.active ? randomBrand : '')}>
            <div className="overlay-gradient"></div>
            <NullableLoading condition={team.active}>
                <div className="roster-wrestler-brand">
                    <BrandImage brand={randomBrand} />
                </div>
            </NullableLoading>

            <div className="wrestlers-teams-list w1 flex start acenter gap-small">
                {/* {team.WrestlerTeam.map((wrestler, index) => (
                    <div key={wrestler.Wrestler.id} className="wrestler-team-item">
                        <LazyImage
                            width={120}
                            height={120}
                            src={wrestler.Wrestler.image_name as string}
                            srcError="/noimage.jpg"
                            alt={wrestler.Wrestler.name}
                            //     className="total-image image-container"
                        />
                    </div>
                ))} */}
            </div>

            <div className="roster-card-wrestler-name-container">
                <RosterCardName name={team.name} brand={randomBrand} />
            </div>
        </div>
    );
}
