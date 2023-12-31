import React from "react";
import { Boxed } from "@/components/Box/Boxed";
import { BrandSelect, Input, ToggleInput } from "@/components/Forms";
import GroupSelection from "./GroupSelection";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import { Team } from "@prisma/client";

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
                        <Input
                            required={true}
                            max={150}
                            label={"Nombre"}
                            name={"name"}
                            value={teamData?.name}
                        />
                        <NumberInput
                            type={"number"}
                            max={3}
                            required={false}
                            label={"Media"}
                            name={"overall"}
                            value={teamData?.average}
                        />
                        <Input
                            required={true}
                            max={150}
                            label={"Slug"}
                            name={"slug"}
                            value={teamData?.slug || teamData?.name || ""}
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
