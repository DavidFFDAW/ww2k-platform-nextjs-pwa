import { Boxed } from "@/components/Box/Boxed";
import { NullableLoading } from "@/components/Loading";
import React from "react";
import MembersList from "./MembersList";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import { Input, ToggleInput } from "@/components/Forms";
import Grid from "@/components/Layouts/Grid/Grid";
import Flex from "@/components/Layouts/Flex";

interface Props {
    list: any[];
}

export default function CreateRandomTeam({ list }: Props) {
    return (
        <NullableLoading condition={list.length > 0}>
            <Boxed
                title={"Generar equipo aleatorio"}
                w={"100"}
                className="down"
            >
                <div className="w1 flex column gap">
                    <Flex justify="start" align="end" gap={10}>
                        <Input
                            required={true}
                            max={150}
                            label={"Nombre"}
                            name={"name"}
                        />
                        <NumberInput
                            type={"number"}
                            max={3}
                            required={false}
                            label={"Media"}
                            name={"overall"}
                        />
                        <ToggleInput
                            label={"Activo"}
                            name={"active"}
                            checked={true}
                        />
                    </Flex>

                    <MembersList list={list} />

                    <div className="down w1 flex end acenter">
                        <ButtonCTA type={"submit"} text={"Crear equipo"} />
                    </div>
                </div>
            </Boxed>
        </NullableLoading>
    );
}
