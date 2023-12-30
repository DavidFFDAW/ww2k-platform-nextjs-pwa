import React, { Suspense } from "react";
import { Metadata } from "next";
import LoadedUpdateInputs from "../../../components/LoadedUpdateInputs";
import TeamUpdateSkeleton from "../../../components/TeamUpdateSkeleton";

export const revalidate = 0;
export const metadata: Metadata = {
    title: "Actualizar equipo",
    description: "Actualizar equipo",
};

export default function AdminTeamUpdatePage({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;

    return (
        <>
            <Suspense fallback={<TeamUpdateSkeleton />}>
                <LoadedUpdateInputs id={id} />
            </Suspense>
        </>
    );
}
