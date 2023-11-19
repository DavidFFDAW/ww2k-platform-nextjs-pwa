"use client";
import { Boxed } from "@/components/Box/Boxed";
import { ButtonSecondary, DangerButton } from "@/components/Buttons/Buttons";
import Image from "@/components/Image/Image";
import ScrollableArea from "@/components/Scrollable/ScrollableArea";
import Select from "@/modules/select/Select";
import React from "react";

interface SelectedState {
    temporal: any;
    selected: any[];
}

interface GroupSelectionProps {
    list: any[];
    members?: any[];
}

export default function GroupSelection({ list, members }: GroupSelectionProps) {
    const [selected, setSelected] = React.useState<SelectedState>({
        temporal: null,
        selected: members || [],
    });

    const removeTeamMemberByID = (id: number) => {
        setSelected((p) => ({
            ...p,
            selected: p.selected.filter((m) => m.id !== id),
        }));
    };

    return (
        <Boxed w={"100"}>
            <div className="space-down">
                <ScrollableArea height={200} title={"Miembros de equipo"}>
                    {selected.selected.map((member, index) => {
                        const image = member.image || "/noimage.jpg";
                        return (
                            <div
                                key={index}
                                className="w1 scrollable-item flex between acenter gap"
                            >
                                <input
                                    type="hidden"
                                    name="members[]"
                                    value={member.id}
                                />
                                <input
                                    type="hidden"
                                    name="overalls[]"
                                    value={member.average}
                                />
                                <div className="flex start acenter gap">
                                    {/* <div className="backgroundimage" style={{ backgroundImage: `url(${image})` }}></div> */}
                                    <Image
                                        width={50}
                                        height={50}
                                        className="total-img"
                                        src={image}
                                        alt={member.name}
                                    />
                                    <p>{member.name}</p>
                                    <p>Media: {member.average}</p>
                                </div>
                                <DangerButton
                                    text={<>&times;</>}
                                    onClick={() =>
                                        removeTeamMemberByID(member.id)
                                    }
                                />
                            </div>
                        );
                    })}
                </ScrollableArea>
            </div>

            <Select
                zIndex={100}
                listHeight={250}
                name={"select-wrestler-team"}
                list={list.map((i) => ({
                    id: i.id,
                    name: i.name,
                    image: i.image_name,
                    average: i.overall,
                }))}
                selectCallback={(item: any) => {
                    setSelected((p) => ({ ...p, temporal: item }));
                }}
            />

            <div className="down w1 flex end acenter">
                <ButtonSecondary
                    text={"Agregar"}
                    onClick={() => {
                        setSelected((p) => ({
                            ...p,
                            selected: [...p.selected, p.temporal],
                        }));
                    }}
                />
            </div>
        </Boxed>
    );
}
