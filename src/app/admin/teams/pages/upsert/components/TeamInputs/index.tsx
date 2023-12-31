"use client";
import React from "react";
import { Input } from "@/components/Forms";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import {
    getInitialObject,
    transformSlugData,
} from "./services/team.input.service";

export interface TeamInput {
    name?: string;
    average?: number;
    slug?: string;
}

export default function TeamInputs({ name, average, slug }: TeamInput) {
    const [datas, setDatas] = React.useState<TeamInput>(() =>
        getInitialObject({ name, average, slug })
    );

    return (
        <>
            <div className="w1 flex column gap-5">
                <label className="label" htmlFor={name}>
                    Nombre
                    <span className="required">*</span>
                </label>
                <div className="input-wrapper-container-div relative">
                    <input
                        className="w1"
                        maxLength={150}
                        type={"text"}
                        name="name"
                        required={true}
                        defaultValue={datas.name || ""}
                        placeholder={"Nombre de equipo"}
                        onChange={(e) => {
                            setDatas((previousState) => {
                                return {
                                    ...previousState,
                                    slug: transformSlugData(e.target.value),
                                };
                            });
                        }}
                    />
                </div>
            </div>

            <NumberInput
                type={"number"}
                max={3}
                required={false}
                label={"Media"}
                name={"overall"}
                value={datas.average}
            />
            <Input
                required={true}
                max={150}
                label={"Slug"}
                name={"slug"}
                value={datas.slug}
            />
        </>
    );
}
