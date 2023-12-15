import { Team, Wrestler, WrestlerTeam } from "@prisma/client";
import React from "react";
import BrandImage from "../components/BrandImage";
import RosterCardName from "../components/RosterCardName";
import { NullableLoading } from "@/components/Loading";
import LazyImage from "@/components/Image/LazyImage";

interface TeamRosterItemProps {
    team: Team;
    members: WrestlerTeam[];
}

export default function TeamRosterItem({ team, members }: TeamRosterItemProps) {
    const brands = ["RAW", "SD", "AWL"];
    const randomBrand =
        team.brand || brands[Math.floor(Math.random() * brands.length)];

    return (
        <div
            className={
                "w1 grid-item roster-card relative brand-" +
                (team.active ? randomBrand : "")
            }
        >
            <div className="overlay-gradient"></div>
            <NullableLoading condition={team.active}>
                <div className="roster-wrestler-brand">
                    <BrandImage brand={randomBrand} />
                </div>
            </NullableLoading>

            <div className="wrestlers-teams-list w1 h1 sgap-small">
                {members.map((wrestler: any, index) => (
                    <LazyImage
                        width={120}
                        height={120}
                        key={wrestler.Wrestler.id}
                        src={wrestler.Wrestler.image_name as string}
                        srcError="/noimage.jpg"
                        alt={wrestler.Wrestler.name}
                        // className="total-image image-container"
                        className={"ppppppppppppp" + index + 1}
                        imgClassName={"papiroflesia" + index + 1}
                    />
                ))}

                <div className="roster-card-wrestler-name-container">
                    <RosterCardName name={team.name} brand={randomBrand} />
                </div>
            </div>
        </div>
    );
}
