"use client";
import { ConditionalLoading, NullableLoading } from "@/components/Loading";
import Select from "@/modules/select/Select";
import { Championship, Team, Wrestler } from "@prisma/client";
import React from "react";
import TeamChampsSelector from "./TeamChampsSelector";
import GroupSelection from "@/app/admin/teams/components/GroupSelection";

interface SelectProps {
    wrestlers: Wrestler[];
    championships: Championship[];
    teams: Team[];
}

export default function ChampionshipReignSelect({
    wrestlers,
    championships,
    teams,
}: SelectProps) {
    const [options, setOptions] = React.useState({
        list: wrestlers,
        isChampionshipTag: false,
        membersArray: [],
    });

    const handleChampionshipChange = (selected: any) => {
        const selectedChampionship = championships.find(
            (championship) => championship.id === selected.id
        );
        const isTag = Boolean(selectedChampionship?.tag);
        const isFemale = selectedChampionship?.gender === "F";

        if (!isTag && isFemale) {
            return setOptions((prev) => ({
                ...prev,
                list: wrestlers.filter((wrst) => wrst.sex === "F"),
                isChampionshipTag: isTag,
            }));
        }

        if (isTag) {
            const tagW = teams.map((team: any) => ({
                id: team.id as number,
                name: team.name as string,
                image_name: team.WrestlerTeam[0].Wrestler.image_name as string,
                membersArray: team.WrestlerTeam.map((wrestler: any) => ({
                    id: wrestler.Wrestler.id,
                    name: wrestler.Wrestler.name,
                    image_name: wrestler.Wrestler.image_name,
                })),
            }));

            return setOptions((prev: any) => ({
                ...prev,
                list: tagW,
                isChampionshipTag: isTag,
                members: teams,
            }));
        }

        return setOptions((prev) => ({
            ...prev,
            list: wrestlers,
            isChampionshipTag: isTag,
        }));
    };

    const setMembersOption = (selected: any) => {
        console.log({ selected });
        
        setOptions((prev) => ({
            ...prev,
            membersArray: selected.membersArray || [],
        }));
    };

    return (
        <>
            <Select
                zIndex={1000}
                name="championship_id"
                label="Título"
                required={true}
                listHeight={350}
                placeholder="Selecciona un título..."
                list={championships.map((championship) => ({
                    id: championship.id,
                    name: championship.name,
                    image: championship.image,
                }))}
                selectCallback={handleChampionshipChange}
            />

            <Select
                zIndex={1000}
                name="wrestler_or_team_id"
                label={options.isChampionshipTag ? "Equipo" : "Luchador"}
                required={true}
                listHeight={350}
                placeholder="Selecciona un luchador..."
                list={options.list.map((wrestler) => ({
                    ...wrestler,
                    id: wrestler.id,
                    name: wrestler.name,
                    image: wrestler.image_name,
                }))}
                selectCallback={setMembersOption}
            />

            <input
                id="tag"
                style={{ display: "none" }}
                type="checkbox"
                name="is_tag_team"
                defaultChecked={options.isChampionshipTag}
            />

            <NullableLoading condition={options.isChampionshipTag}>
                <ConditionalLoading
                    condition={options.membersArray.length > 2}
                    fallback={<>
                        {options.membersArray.map((member: any) => (
                            <input type="hidden" name="partners[]" value={member.id} key={member.id} />
                        ))}
                    </>}>
                    <div className="w1 animate__animated animate__fadeInDown animate__faster champ-reign-partners-block">
                        <TeamChampsSelector members={options.membersArray} />
                    </div>
                </ConditionalLoading>
            </NullableLoading>
        </>
    );
}
