import React from 'react';
import { Team, WrestlerTeam } from '@prisma/client';
import BrandImage from '../../components/BrandImage';
import RosterCardName from '../../components/RosterCardName';
import { NullableLoading } from '@/components/Loading';
import SliderTeamMembers from './SliderTeamMembers';

interface TeamRosterItemProps {
    team: Team;
    members: WrestlerTeam[];
}

export default function TeamRosterItem({ team, members }: TeamRosterItemProps) {
    const brandClass = `brand-${team.brand}`;
    const activeClass = team.active ? 'active' : 'inactive';

    return (
        <div className={`w1 grid-item roster-card relative ${brandClass} ${activeClass}`}>
            <div className="overlay-gradient"></div>
            <NullableLoading condition={team.active}>
                <div className="roster-wrestler-brand">
                    <BrandImage brand={team.brand} />
                </div>
            </NullableLoading>

            <div className={'wrestlers-teams-list w1 h1 sgap-small ' + (team.active ? 'active' : 'inactive')}>
                <SliderTeamMembers members={members} />

                <div className="roster-card-wrestler-name-container">
                    <RosterCardName name={team.name} brand={team.brand} />
                </div>

                <NullableLoading condition={!team.active}>
                    <div className={'inactive-text ' + brandClass}>
                        <span className="dreadnotus">INACTIVO</span>
                    </div>
                </NullableLoading>
            </div>
        </div>
    );
}
