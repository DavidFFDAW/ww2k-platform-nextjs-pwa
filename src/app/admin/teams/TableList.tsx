import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import { TableContainer } from "@/modules/tables";
import TableItem, { TableRow } from "@/modules/tables/components/TableRows";
import { getTeamsWithMembers } from "@/queries/teams.queries";
import React from "react";
import TeamActions from "./components/TeamActions";
import LazyImageTwo from "@/components/Image/LazyImageTwo";

export default async function TableList() {
    const teams = await getTeamsWithMembers();

    return (
        <TableContainer gap={25}>
            {teams.map((team) => {
                return (
                    <TableRow
                        key={team.id}
                        className={`admin-teams-table-row ${
                            team.active ? "active" : "inactive"
                        }-row`}
                    >
                        <TableItem width={90} align="start">
                            <div className="flex start acenter gap-small team-name-container">
                                {team.ChampionshipReign.length > 0 ? (
                                    <span className="badge optional">
                                        <BootstrapIcon icon="trophy" />
                                    </span>
                                ) : null}
                                <p>{team.name}</p>
                            </div>
                        </TableItem>

                        <TableItem width={90} align="start">
                            <div className="grid two-column-grid gap-small">
                                {team.WrestlerTeam.map((wt) => {
                                    return (
                                        <div
                                            key={wt.Wrestler.id}
                                            className="wrestler-team wrestler"
                                        >
                                            <LazyImageTwo
                                                src={
                                                    wt.Wrestler
                                                        .image_name as string
                                                }
                                                alt={wt.Wrestler.name}
                                                width={70}
                                                height={70}
                                                imgClassName="admin-table admin-display admin-teams team-wrestlers-image"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </TableItem>
                        <TableItem width={10} align="center">
                            <TeamActions team={team} />
                        </TableItem>
                    </TableRow>
                );
            })}
        </TableContainer>
    );
}
