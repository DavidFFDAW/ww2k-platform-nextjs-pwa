import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import { TableContainer } from "@/modules/tables";
import TableItem, { TableRow } from "@/modules/tables/components/TableRows";
import { getTeamsWithMembers } from "@/queries/teams.queries";
import React from "react";
import TeamActions from "./components/TeamActions";

export default async function TableList() {
    const teams = await getTeamsWithMembers();

    return (
        <TableContainer>
            {teams.map((team) => {
                return (
                    <TableRow
                        key={team.id}
                        style={{
                            borderLeft: team.active
                                ? "none"
                                : "3px solid #f44336",
                            opacity: team.active ? 1 : 0.7,
                        }}
                    >
                        <TableItem width={90} align="start">
                            <div className="flex start acenter gap-small">
                                {team.ChampionshipReign.length > 0 ? (
                                    <span className="badge optional">
                                        <BootstrapIcon icon="trophy" />
                                    </span>
                                ) : null}
                                <p>{team.name}</p>
                            </div>
                        </TableItem>

                        <TableItem width={90} align="start">
                            <div className="flex start column astart gap-small">
                                {team.WrestlerTeam.map((wt) => {
                                    return (
                                        <p key={wt.wrestler_id}>
                                            {wt.Wrestler.name}
                                        </p>
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
