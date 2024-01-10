"use client";
import { deleteTeam } from "@/actions/team.actions";
import { ActionColors, ActionLink, ActionSubmit } from "@/modules/actions";
import ActionsContainer from "@/modules/actions/Actions";
import { ChampionshipReign, Team } from "@prisma/client";
import React from "react";

export default function TeamActions({
    team,
}: {
    team: Team & { ChampionshipReign: ChampionshipReign[] };
}) {
    return (
        <div className="actions-grouped-container">
            <ActionsContainer>
                <ActionLink
                    text={`Editar equipo '${team.name}'`}
                    color={ActionColors.DEFAULT}
                    toHref={`/admin/teams/pages/upsert/update/${team.id}`}
                    icon={"pencil-square"}
                />
                <ActionLink
                    text={"Panel de equipo aleatorio"}
                    color={ActionColors.DEFAULT}
                    toHref={"/admin/teams/pages/random"}
                    icon={"question-diamond"}
                />
                <ActionLink
                    text={"Crear nuevo equipo"}
                    color={ActionColors.DEFAULT}
                    toHref={"/admin/teams/pages/upsert/create"}
                    icon={"plus-circle"}
                />
                {team.ChampionshipReign.length <= 0 ? (
                    <form action={deleteTeam} className="w1 form-delete">
                        <ActionSubmit
                            text={`Borrar equipo '${team.name}'`}
                            color={ActionColors.DELETE}
                            icon={"trash"}
                            name="team_id"
                            value={team.id.toString()}
                        />
                    </form>
                ) : null}
            </ActionsContainer>
        </div>
    );
}
