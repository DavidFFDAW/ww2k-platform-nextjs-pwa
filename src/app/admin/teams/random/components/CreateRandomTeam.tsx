import { Boxed } from "@/components/Box/Boxed";
import { NullableLoading } from "@/components/Loading";
import React from "react";
import MembersList from "./MembersList";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import { NumberInput } from "@/components/Forms/Inputs/Number";
import { Input } from "@/components/Forms";

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
                    <div className="grid two-column gap-small acenter">
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
                    </div>

                    <MembersList list={list} />

                    <div className="down w1 flex end acenter">
                        <ButtonCTA type={"submit"} text={"Crear equipo"} />
                    </div>
                </div>
            </Boxed>
        </NullableLoading>
    );
}
