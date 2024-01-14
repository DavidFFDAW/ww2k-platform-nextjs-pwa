"use client";
import Select from "@/modules/select/Select";
import { Championship, Team, Wrestler } from "@prisma/client";
import React from "react";

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
            }));

            return setOptions((prev: any) => ({
                ...prev,
                list: tagW,
                isChampionshipTag: isTag,
            }));
        }

        return setOptions((prev) => ({
            ...prev,
            list: wrestlers,
            isChampionshipTag: isTag,
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
                    id: wrestler.id,
                    name: wrestler.name,
                    image: wrestler.image_name,
                }))}
            />

            <input
                style={{ display: "none" }}
                type="checkbox"
                name="is_tag_team"
                id="tag"
                defaultChecked={options.isChampionshipTag}
            />
        </>
    );
}
