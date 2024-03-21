import Title from '@/components/Title';
import React from 'react';
import WrestlersSearchForm from './components/WrestlerForms/WrestlersSearchForm';
import TableItem, { TableRow } from '@/modules/tables/components/TableRows';
import { TableContainer } from '@/modules/tables';
import { CreateButton } from '@/components/Buttons';

export default function WrestlersLoading() {
    return (
        <>
            <Title title={'Wrestlers'} icon="list-ul" />

            <WrestlersSearchForm params={{}} />

            <div className="down w1 flex between column al-center gap">
                <div className="w1 list-block overflow-y">
                    <div className="wrestlers-list items-listing">
                        <div className="desktop-only">
                            <TableContainer>
                                <TableRow>
                                    <TableItem width={20} align="start">
                                        Imagen
                                    </TableItem>
                                    <TableItem width={30} align="start">
                                        Nombre
                                    </TableItem>
                                    <TableItem width={20} align="start">
                                        Sexo
                                    </TableItem>
                                    <TableItem width={30} align="start">
                                        Estado
                                    </TableItem>
                                    <TableItem width={20} align="end">
                                        Acciones
                                    </TableItem>
                                </TableRow>
                            </TableContainer>
                        </div>
                    </div>
                </div>

                <CreateButton endpoint={'wrestlers/pages/create'} />
            </div>
        </>
    );
}
