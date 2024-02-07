"use client";
import { ActionColors, ActionFetch } from "@/modules/actions";
import ActionsContainer from "@/modules/actions/Actions";
import { Championship } from "@prisma/client";
import React from "react";

interface Props {
    championship: Championship;
}

export default function ChampionshipActions({ championship }: Props) {
    return (
        <>
            <ActionsContainer>
                <ActionFetch
                    href={`/api/championships/toggle-active/${championship.id}`}
                    text={(championship.active ? "Desactivar" : "Activar")+' título'}
                    icon={championship.active ? "eye-slash" : "eye"}
                    color={ActionColors.WARNING}
                    refresh={true}
                    method="get"
                />
                <ActionFetch
                    href={`/api/championships/delete/${championship.id}`}
                    text="Borrar championship y reinados"
                    icon="trash-fill"
                    color={ActionColors.DELETE}
                    method="delete"
                    refresh={true}
                />
            </ActionsContainer>
        </>
    );
}
