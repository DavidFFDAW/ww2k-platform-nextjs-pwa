import React from "react";
import { Boxed } from "@/components/Box/Boxed";
import { BrandSelect, ToggleInput } from "@/components/Forms";
import GroupSelection from "../../../components/GroupSelection";
import { Team } from "@prisma/client";
import TeamInputs from "./TeamInputs";

interface Props {
    teamData?: Team;
    possibleMembers: any[];
    members?: any[];
}

export default function TeamFormFields({
    possibleMembers,
    teamData,
    members,
}: Props) {
    return (
        <>
            <div className="grid two-column-grid responsive-grid gap">
                <Boxed title={"Datos del equipo"} w={"100"}>
                    <div className="flex start column astart gap-small">
                        <TeamInputs
                            name={teamData?.name}
                            average={Number(teamData?.average)}
                            slug={teamData?.slug}
                        />

                        <ToggleInput
                            label={"Activo"}
                            name={"active"}
                            checked={teamData?.active}
                        />
                    </div>
                </Boxed>

                {Boolean(members) ? (
                    <GroupSelection list={possibleMembers} members={members} />
                ) : (
                    <GroupSelection list={possibleMembers} />
                )}
            </div>

            <Boxed title={"Datos de la marca"} w={"100"}>
                <BrandSelect
                    label={"Marca"}
                    name={"brand"}
                    value={teamData?.brand}
                />
            </Boxed>
        </>
    );
}
