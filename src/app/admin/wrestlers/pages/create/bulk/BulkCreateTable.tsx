"use client";
import { BootstrapIcon } from "@/components/Icon/BootstrapIcon";
import { NullableLoading } from "@/components/Loading";
import { Wrestler } from "@prisma/client";
import React from "react";
import useBulkCreateWrestlers from "./useBulkCreateWrestlers";

interface BulkCreateTableProps {
    allWrestlers: Wrestler[];
}

export default function BulkCreateTable({
    allWrestlers,
}: BulkCreateTableProps) {
    const wrestlerNames = allWrestlers.map((wrestler) => wrestler.name);
    const { wrestlers, addWrestlerItem } = useBulkCreateWrestlers();

    return (
        <>
            <datalist id="wrestlernameslist">
                {wrestlerNames.map((name, index) => {
                    return <option key={index} value={name} />;
                })}
            </datalist>

            <table>
                <thead>
                    <tr>
                        <th colSpan={8}>
                            Actualmente mostrando: {wrestlers.length}
                        </th>
                        <th colSpan={2}>
                            <div className="w1 flex end gap-small">
                                <button
                                    type="button"
                                    className="btn button cta-secondary rounded"
                                    onClick={addWrestlerItem}
                                >
                                    <BootstrapIcon icon="plus" color="#000" />
                                </button>
                                {/* <button
                                    type="submit"
                                    className="btn button cta"
                                >
                                    Guardar cambios
                                </button> */}
                            </div>
                        </th>
                    </tr>

                    <tr>
                        <th>Nombre</th>
                        <th>Alias</th>
                        <th>Estado</th>
                        <th>Marca</th>
                        <th>Overall</th>
                        <th>Sexo</th>
                        <th>Finisher</th>
                        <th>Estado kayfabe</th>
                        <th>Twitter (@)</th>
                        <th>Twitter</th>
                    </tr>
                </thead>

                <tbody>
                    <NullableLoading condition={wrestlers.length > 0}>
                        {wrestlers.map((item: Wrestler, index: number) => {
                            return (
                                <tr
                                    key={index}
                                    className="inputs-row-no-input-appearance"
                                >
                                    <td>
                                        <input
                                            type="text"
                                            name="name[]"
                                            defaultValue={item.name}
                                            placeholder="Nombre"
                                            list="wrestlernameslist"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="alias[]"
                                            defaultValue={item.alias?.toString()}
                                            placeholder="Alias"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            name="status[]"
                                            defaultValue={item.status}
                                            placeholder="Estado"
                                        >
                                            <option value="active">
                                                Activo
                                            </option>
                                            <option value="not-active">
                                                Inactivo
                                            </option>
                                            <option value="released">
                                                Despedido
                                            </option>
                                            <option value="semi-active">
                                                Part-time
                                            </option>
                                            <option value="retired">
                                                Retirado
                                            </option>
                                            <option value="manager">
                                                Manager
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            name="brand[]"
                                            defaultValue={item.brand}
                                            placeholder="Marca"
                                        >
                                            <option value="RAW">RAW</option>

                                            <option value="AWL">AWL</option>

                                            <option value="SD">
                                                SmackDown Live
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="overall[]"
                                            defaultValue={item.overall.toString()}
                                            placeholder="Media"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            name="sex[]"
                                            defaultValue={item.sex}
                                            placeholder="Sexo"
                                        >
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="finisher[]"
                                            defaultValue={item.finisher.toString()}
                                            placeholder="Finisher"
                                        />
                                    </td>
                                    <td>
                                        <select
                                            name="kayfabe_status[]"
                                            defaultValue={item.kayfabe_status}
                                            placeholder="Heel o Face"
                                        >
                                            <option value="face">face</option>
                                            <option value="heel">heel</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="w1 flex start gap-smaller">
                                            <span>@</span>
                                            <input
                                                type="text"
                                                name="twitter_acc[]"
                                                defaultValue={item.twitter_acc.toString()}
                                                placeholder="Cuenta de Twitter"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="twitter_name[]"
                                            defaultValue={item.twitter_name.toString()}
                                            placeholder="Nombre de Twitter"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </NullableLoading>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={8}>
                            {/* Actualmente mostrando: {wrestlers.length} */}
                        </th>
                        <th colSpan={2}>
                            <div className="w1 flex end gap-small">
                                <button
                                    type="button"
                                    className="btn button cta-secondary rounded"
                                    onClick={addWrestlerItem}
                                >
                                    <BootstrapIcon icon="plus" color="#000" />
                                </button>
                                <button
                                    type="submit"
                                    className="btn button cta"
                                >
                                    Guardar cambios
                                </button>
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}
