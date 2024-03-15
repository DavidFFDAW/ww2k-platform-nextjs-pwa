import DropArea from "@/components/DropArea/DropArea";
import Title from "@/components/Title";
import React from "react";

export default function WrestlersImportationPage() {
    return (
        <>
            <Title title={"Importar luchadores"} icon="cloud-upload" />

            <DropArea accept=".csv" />
        </>
    );
}
