import { Boxed } from "@/components/Box/Boxed";
import { ButtonCTA, ButtonSecondary } from "@/components/Buttons/Buttons";
import { InputSelect } from "@/components/Forms";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import React from "react";

export default function SearchRandomTeam() {
    return (
        <Boxed title={"Buscador de miembros"} w={"100"}>
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
                    <ButtonSecondary type={"submit"} text={"Buscar miembros"} />
                </div>
            </div>
        </Boxed>
    );
}
