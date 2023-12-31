import React from "react";
import { prisma } from "@/db/conn";
import { Wrestler } from "@prisma/client";
import Form from "@/components/Forms/Form/Form";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import TeamFormFields from "../../../components/TeamFormFields";

export const revalidate = 0;
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
        where: {
            WrestlerTeam: {
                none: {
                    Team: {
                        active: true,
                    },
                },
            },
        },
    });
}

export default async function AdminTeamsCreatePage() {
    const possibleMembers = await getPossibleMembers();

    return (
        <>
            <Form
                method="POST"
                action="/api/teams/create"
                className="flex column gap wrestler-upsert-form space-down"
                debug={true}
                sendHttp={true}
                redirect="/admin/teams"
            >
                <TeamFormFields possibleMembers={possibleMembers} />

                <div className="flex end acenter fixed-button">
                    <ButtonCTA type={"submit"} text={"Guardar"} />
                </div>
            </Form>
        </>
    );
}
