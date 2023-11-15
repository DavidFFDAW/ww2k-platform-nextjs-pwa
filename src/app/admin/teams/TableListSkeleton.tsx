import SkeletonLine from '@/components/Skeleton/Line';
import { TableContainer } from '@/modules/tables';
import TableItem, { TableRow } from '@/modules/tables/components/TableRows';
import React from 'react'

export default function TableListSkeleton() {
    const iterations = Array.from({ length: 20 }).map((_, i) => i);
    return (
        <TableContainer>
            {iterations.map((i) => (
                <TableRow key={i} >
                    <TableItem width={90} align="start">
                        <SkeletonLine w={100} />
                    </TableItem>
                    <TableItem width={90} align="start">
                        <SkeletonLine w={100} />
                    </TableItem>
                    <TableItem width={90} align="start">
                        <SkeletonLine w={100} />
                    </TableItem>
                </TableRow>
            ))}
        </TableContainer >
    )
}
