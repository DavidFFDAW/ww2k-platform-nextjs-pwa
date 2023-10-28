"use client";
import Actions from "@/modules/actions/Actions";
import React from "react";

export default function ChampionshipActions({
    championship,
}: {
    championship: any;
}) {
    return (
        <>
            <Actions.Container>
                <Actions.Fetch
                    href={`/api/championships/delete/${championship.id}`}
                    text="Borrar championship y reinados"
                    icon="trash-fill"
                    color={Actions.Colors.DELETE}
                    revalidatePath="/admin/championships"
                    method="delete"
                />
            </Actions.Container>
        </>
    );
}
