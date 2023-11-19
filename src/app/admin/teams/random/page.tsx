import React from "react";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import { Metadata } from "next";
import Title from "@/components/Title";
import RandomTeamClientPage from "./RandomTeamClientPage";
import { CenteredSpinner } from "@/components/Spinner/Spinner";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Generar equipo aleatorio"),
    description: "Generar equipos aleatorios",
};

export default function AdminTeamsRandomPage() {
    return (
        <>
            <Title title="Generar equipo aleatorio" icon="people" />

            <RandomTeamClientPage />
        </>
    );
}
