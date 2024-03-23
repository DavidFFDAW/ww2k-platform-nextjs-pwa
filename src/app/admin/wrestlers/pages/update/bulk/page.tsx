import { Form, SearchForm } from "@/components/Forms";
import { NullableLoading } from "@/components/Loading";
import { Pagination } from "@/components/Pagination";
import CustomTable from "@/components/Table/CustomTable";
import {
    getCountedWrestlers,
    getWrestlersByFiltersLimit,
    getWrestlersByLimit,
} from "@/queries/wrestler.queries";
import { PageContext } from "@/shared/models";
import { Wrestler } from "@prisma/client";
import React from "react";

export const revalidate = 0;

export default async function WrestlersBulkUpdatePage(context: PageContext) {
    const { page } = context.searchParams;
    const realPage = page || 1;
    const limit = 20;
    const offset = Math.abs((realPage - 1) * limit);
    const wrestlersLength = await getCountedWrestlers();
    const wrestlers = await getWrestlersByFiltersLimit(
        {
            name: {
                contains: context.searchParams.name,
            },
        },
        limit,
        offset
    );
    const paginationComponent = (
        <Pagination
            page={Number(page)}
            total={wrestlersLength}
            numberOfPages={2}
            itemsPerPage={limit}
        />
    );

    return (
        <>
            <div className="w1 flex end acenter">{paginationComponent}</div>

            <SearchForm
                url="/admin/wrestlers/pages/update/bulk"
                className="w1 boxed down"
            >
                <h2 className="box-title">Buscador</h2>
                <div className="w1 flex start gap down">
                    <input
                        type="search"
                        name="name"
                        className="w1"
                        placeholder="Buscar por nombre"
                    />

                    <button type="submit" className="btn button cta">
                        Buscar
                    </button>
                </div>
            </SearchForm>

            <Form
                method="POST"
                action="/api/wrestlers/update/bulk"
                sendHttp={true}
                refresh={true}
                loadingState={true}
            >
                <input type="hidden" name="limit" value={limit} />
                <input type="hidden" name="offset" value={offset} />

                <CustomTable title="Luchadores">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    Actualmente mostrando: {wrestlers.length}
                                </th>
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
                            <NullableLoading condition={wrestlers.length > 0}>
                                {wrestlers.map((item: Wrestler) => {
                                    return (
                                        <tr
                                            key={item.id}
                                            className="inputs-row-no-input-appearance"
                                        >
                                            <td>
                                                {item.id}
                                                <input
                                                    type="hidden"
                                                    name="id[]"
                                                    defaultValue={item.id.toString()}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="name[]"
                                                    defaultValue={item.name}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="alias[]"
                                                    defaultValue={item.alias?.toString()}
                                                />
                                            </td>
                                            <td>
                                                <select
                                                    name="status[]"
                                                    defaultValue={item.status}
                                                >
                                                    <option
                                                        value="active"
                                                        selected={
                                                            item.status ===
                                                            "active"
                                                        }
                                                    >
                                                        Activo
                                                    </option>
                                                    <option
                                                        value="not-active"
                                                        selected={
                                                            item.status ===
                                                            "not-active"
                                                        }
                                                    >
                                                        Inactivo
                                                    </option>
                                                    <option
                                                        value="released"
                                                        selected={
                                                            item.status ===
                                                            "released"
                                                        }
                                                    >
                                                        Despedido
                                                    </option>
                                                    <option
                                                        value="semi-active"
                                                        selected={
                                                            item.status ===
                                                            "semi-active"
                                                        }
                                                    >
                                                        Part-time
                                                    </option>
                                                    <option
                                                        value="retired"
                                                        selected={
                                                            item.status ===
                                                            "retired"
                                                        }
                                                    >
                                                        Retirado
                                                    </option>
                                                    <option
                                                        value="manager"
                                                        selected={
                                                            item.status ===
                                                            "manager"
                                                        }
                                                    >
                                                        Manager
                                                    </option>
                                                </select>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="overall[]"
                                                    defaultValue={item.overall.toString()}
                                                />
                                            </td>
                                            <td>
                                                <select
                                                    name="brand[]"
                                                    defaultValue={item.brand}
                                                >
                                                    <option
                                                        value="RAW"
                                                        selected={
                                                            item.brand === "RAW"
                                                        }
                                                    >
                                                        RAW
                                                    </option>

                                                    <option
                                                        value="AWL"
                                                        selected={
                                                            item.brand === "AWL"
                                                        }
                                                    >
                                                        AWL
                                                    </option>

                                                    <option
                                                        value="SD"
                                                        selected={
                                                            item.brand === "SD"
                                                        }
                                                    >
                                                        SmackDown Live
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </NullableLoading>
                        </tbody>
                    </table>
                </CustomTable>

                <div className="fixed-button">
                    <button
                        className="btn button cta"
                        role="button"
                        type="submit"
                        title="Call to action button"
                    >
                        Actualizar
                    </button>
                </div>
            </Form>

            <div className="w1 flex end acenter">{paginationComponent}</div>
        </>
    );
}
