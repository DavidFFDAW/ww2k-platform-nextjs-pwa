import LoadedUpdateInputs from "@/app/admin/teams/components/LoadedUpdateInputs";
import TeamUpdateSkeleton from "@/app/admin/teams/components/TeamUpdateSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";
import TeamsUpsertLoadingPage from "../../loading";

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
