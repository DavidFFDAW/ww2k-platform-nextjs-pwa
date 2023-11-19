import React from "react";
import { getCompleteTeamDataByID } from "@/queries/teams.queries";
import { HiddenInput } from "@/components/Forms/Inputs/Hidden";
import { Boxed } from "@/components/Box/Boxed";
import { Input } from "@/components/Forms";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import GroupSelection from "./GroupSelection";
import { getWrestlersWithoutTeam } from "@/queries/wrestler.queries";

function getCurrentTeamData(id: string) {
    return getCompleteTeamDataByID(id);
}

export default async function LoadedUpdateInputs({ id }: { id: string }) {
    const [currentTeamData, possibleMembers] = await Promise.all([
        getCurrentTeamData(id),
        getWrestlersWithoutTeam(),
    ]);
    if (!currentTeamData || !possibleMembers || !id) {
        return <p>Equipo no encontrado</p>;
    }
    const teamMembers = currentTeamData?.WrestlerTeam.map((w) => ({
        id: w.Wrestler.id,
        name: w.Wrestler.name,
        image: w.Wrestler.image_name,
        average: w.Wrestler.overall,
    }));

    return (
        <>
            <Boxed title={"Datos del equipo"} w={"100"}>
                <div className="flex center aend gap-small">
                    <HiddenInput name={"id"} value={currentTeamData.id} />
                    <Input
                        required={true}
                        max={150}
                        label={"Nombre"}
                        name={"name"}
                        value={currentTeamData.name}
                    />
                    <NumberInput
                        type={"number"}
                        max={3}
                        required={false}
                        label={"Media"}
                        name={"overall"}
                        value={currentTeamData.average}
                    />
                </div>
            </Boxed>

            <GroupSelection list={possibleMembers} members={teamMembers} />
        </>
    );
}
