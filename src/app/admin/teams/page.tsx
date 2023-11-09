import { prisma } from '@/db/conn'
import Title from '@/components/Title';
import { TableContainer } from '@/modules/tables';
import TableItem, { TableRow } from '@/modules/tables/components/TableRows';

function getTeams() {
    return prisma.team.findMany({
        orderBy: {
            name: 'asc'
        },
    });
}
function getWrestlers() {
    return prisma.wrestler.findMany({
        orderBy: {
            name: 'asc'
        },
    });
}

export default async function AdminTeamsPage() {
    const teams = await getTeams();

    return (
        <>
            <Title title="Teams" icon='people-fill' />

            <TableContainer>
                {teams.map((team) => {
                    return (
                        <TableRow key={team.id}>
                            <TableItem width={10} align="left">
                                {team.id}
                            </TableItem>
                            <TableItem width={90} align="left">
                                {team.name}
                            </TableItem>
                        </TableRow>
                    );
                })}
            </TableContainer>
        </>
    );
}