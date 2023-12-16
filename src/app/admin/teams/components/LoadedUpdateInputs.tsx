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
                className="flex center al-center column gap wrestler-upsert-form space-down"
                sendHttp={true}
                refresh={true}
            >
                <Boxed title={"Datos del equipo"} w={"100"}>
                    <div className="grid two-column-grid aend gap-small">
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
                        <Input
                            required={true}
                            max={150}
                            label={"Slug"}
                            name={"slug"}
                            value={currentTeamData.slug || currentTeamData.name}
                        />
                        <ToggleInput
                            label={"Activo"}
                            name={"active"}
                            checked={currentTeamData.active}
                        />
                    </div>
                </Boxed>

                <GroupSelection list={possibleMembers} members={teamMembers} />

                <Boxed title={"Datos de la marca"} w={"100"}>
                    <BrandSelect
                        label={"Marca"}
                        name={"brand"}
                        value={currentTeamData.brand}
                    />
                </Boxed>

                <div className="flex end acenter fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar"} />
                </div>
            </Form>
        </>
    );
}
