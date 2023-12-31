import React from "react";
import { getCompleteTeamDataByID } from "@/queries/teams.queries";
import { HiddenInput } from "@/components/Forms/Inputs/Hidden";
import { Boxed } from "@/components/Box/Boxed";
import { BrandSelect, Form, Input, ToggleInput } from "@/components/Forms";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import GroupSelection from "./GroupSelection";
import { getWrestlersWithoutTeam } from "@/queries/wrestler.queries";
import Title from "@/components/Title";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import TeamFormFields from "../pages/upsert/components/TeamFormFields";

export default async function LoadedUpdateInputs({ id }: { id: string }) {
    const [currentTeamData, possibleMembers] = await Promise.all([
        getCompleteTeamDataByID(id),
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
            <Title title={`Actualizar ${currentTeamData.name}`} />

            <Form
                method="PUT"
                action={`/api/teams/update/${currentTeamData.id}`}
                className="flex column gap wrestler-upsert-form space-down"
                sendHttp={true}
                refresh={true}
            >
                <TeamFormFields
                    possibleMembers={possibleMembers}
                    members={teamMembers}
                    teamData={currentTeamData}
                />

                <div className="flex end acenter fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar"} />
                </div>
            </Form>
        </>
    );
}
