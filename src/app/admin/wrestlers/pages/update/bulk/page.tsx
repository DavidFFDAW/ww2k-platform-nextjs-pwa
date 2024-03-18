import { Form } from '@/components/Forms';
import { NullableLoading } from '@/components/Loading';
import { Pagination } from '@/components/Pagination';
import CustomTable from '@/components/Table/CustomTable';
import { getCountedWrestlers, getWrestlersByLimit } from '@/queries/wrestler.queries';
import { PageContext } from '@/shared/models';
import { Wrestler } from '@prisma/client';
import React from 'react';

export const revalidate = 0;

export default async function WrestlersBulkUpdatePage(context: PageContext) {
    const { page } = context.searchParams;
    const realPage = page || 1;
    const limit = 20;
    const offset = Math.abs((realPage - 1) * limit);
    const wrestlers = await getWrestlersByLimit(limit, offset);
    const wrestlersLength = await getCountedWrestlers();

    return (
        <Form method="POST" action="/api/wrestlers/update/bulk" sendHttp={true} refresh={false} loadingState={true}>
            <div className="w1 flex end acenter">
                <Pagination page={Number(page)} total={wrestlersLength} numberOfPages={2} itemsPerPage={limit} />
            </div>

            <CustomTable title="Luchadores">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={4}>Actualmente mostrando: {wrestlers.length}</th>
                            <th colSpan={2}>
                                {/* De {wrestlers[0].name[0]} - {wrestlers[wrestlers.length - 1].name[0]} */}
                            </th>
                        </tr>

                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Alias</th>
                            <th>Estado</th>
                            <th>Media</th>
                            <th>Marca</th>
                        </tr>
                    </thead>

                    <tbody>
                        <NullableLoading condition={wrestlers.length > 1}>
                            {wrestlers.map((item: Wrestler) => {
                                return (
                                    <tr key={item.id} className="inputs-row-no-input-appearance">
                                        <td>
                                            {item.id}
                                            <input type="hidden" name="id[]" defaultValue={item.id.toString()} />
                                        </td>
                                        <td>
                                            <input type="text" name="name[]" defaultValue={item.name} />
                                        </td>
                                        <td>
                                            <input type="text" name="alias[]" defaultValue={item.alias?.toString()} />
                                        </td>
                                        <td>
                                            <select name="status[]" defaultValue={item.status}>
                                                <option value="active">Activo</option>
                                                <option value="inactive">Inactivo</option>
                                                <option value="released">Despedido</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="overall[]"
                                                defaultValue={item.overall.toString()}
                                            />
                                        </td>
                                        <td>{item.brand}</td>
                                    </tr>
                                );
                            })}
                        </NullableLoading>
                    </tbody>
                </table>
            </CustomTable>

            <div className="fixed-button">
                <button className="btn button cta" role="button" type="submit" title="Call to action button">
                    Actualizar
                </button>
            </div>
        </Form>
    );
}
