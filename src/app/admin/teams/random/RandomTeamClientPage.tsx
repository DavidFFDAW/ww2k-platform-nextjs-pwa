"use client";
import { Boxed } from "@/components/Box/Boxed";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { Input, InputSelect } from "@/components/Forms";
import Form from "@/components/Forms/Form/Form";
import LazyImage from "@/components/Image/LazyImage";
import { ConditionalLoading, NullableLoading } from "@/components/Loading";
import { Wrestler } from "@prisma/client";
import React from "react";
import useRandomTeam from "./useRandomTeam";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import HttpForm from "@/components/Forms/HttpForm/HttpForm";
import { ComponentSpinner } from "@/components/Spinner/Spinner";

export default function RandomTeamClientPage() {
    const { state, setState } = useRandomTeam();

    return (
        <>
            <HttpForm
                action="/api/teams/random"
                method="POST"
                dispatchState={setState}
                responseKey="members"
            >
                <Boxed title={"Generar equipo aleatorio"} w={"100"}>
                    <div className="w1 flex column start gap-small">
                        <div className="grid two-column gap-small">
                            <InputSelect
                                required={true}
                                label={"Cantidad de miembros"}
                                name={"quantity"}
                            >
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </InputSelect>

                            <InputSelect
                                required={true}
                                label={"Género de los miembros"}
                                name={"gender"}
                            >
                                <option value="both">Ambos</option>
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                            </InputSelect>

                            <NumberInput
                                required={false}
                                label={"Media de miembros"}
                                name={"overall"}
                            />

                            <InputSelect
                                required={true}
                                label={"Kayfabe status"}
                                name={"kayfabe"}
                            >
                                <option value="both">Ambos</option>
                                <option value="heel">Heel</option>
                                <option value="face">Face</option>
                            </InputSelect>
                        </div>

                        <div className="w1 flex end acenter">
                            <ButtonCTA type={"submit"} text={"Generar"} />
                        </div>
                    </div>
                </Boxed>
            </HttpForm>

            <ConditionalLoading
                condition={!state.loading}
                fallback={<ComponentSpinner className="down" />}
            >
                <NullableLoading condition={state.members.length > 0}>
                    <Boxed title={"Miembros"} w={"100"} className="down">
                        <div className="flex start acenter gap-small">
                            {state.members.map((wrestler: Wrestler) => (
                                <div
                                    key={wrestler.id}
                                    data-id={wrestler.id}
                                    className="w1 flex center acenter gap"
                                >
                                    <LazyImage
                                        src={wrestler.image_name as string}
                                        alt={wrestler.name}
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h4>{wrestler.name}</h4>
                                        <p>{wrestler.overall}</p>
                                        <p>{wrestler.kayfabe_status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Boxed>
                </NullableLoading>
            </ConditionalLoading>
        </>
    );
}
