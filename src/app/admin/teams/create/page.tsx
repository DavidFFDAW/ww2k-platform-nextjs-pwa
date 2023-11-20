import React from "react";
import { prisma } from "@/db/conn";
import { Wrestler } from "@prisma/client";
import Form from "@/components/Forms/Form/Form";
import GroupSelection from "../components/GroupSelection";
import { Boxed } from "@/components/Box/Boxed";
import { Input, ToggleInput } from "@/components/Forms";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import Title from "@/components/Title";

export const metadata: Metadata = {
    title: getNamedTitle("Nuevo equipo"),
    description: "Crear un nuevo equipo",
};

function getPossibleMembers(): Promise<Wrestler[]> {
    return prisma.wrestler.findMany({
        orderBy: {
            name: "asc",
        },
        include: {
            WrestlerTeam: true,
        },
        where: { WrestlerTeam: { none: {} } },
    });
}

export default async function AdminTeamsCreatePage() {
    const possibleMembers = await getPossibleMembers();

    return (
        <>
            <Form
                method="POST"
                action="/api/teams/create"
                className="flex center al-center column gap wrestler-upsert-form space-down"
                debug={true}
                sendHttp={true}
                redirect="/admin/teams"
            >
                <Boxed title={"Datos del equipo"} w={"100"}>
                    <div className="flex center astart gap-small">
                        <Input
                            required={true}
                            max={150}
                            label={"Nombre"}
                            name={"name"}
                        />
                        <NumberInput
                            type={"number"}
                            max={3}
                            required={true}
                            label={"Media"}
                            name={"overall"}
                        />
                        <ToggleInput
                            label={"Activo"}
                            name={"active"}
                            checked={true}
                        />
                    </div>
                </Boxed>

                <GroupSelection list={possibleMembers} />

                <div className="flex end acenter fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar"} />
                </div>
            </Form>
        </>
    );
}
