"use client";
import React from "react";
import { Wrestler } from "@prisma/client";
import Select from "@/modules/select/Select";
import { Form } from "@/components/Forms";
import useDraft from "./useDraft";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import BrandRoster from "./BrandRoster";
import "./draft.css";

interface Props {
    wrestlers: Wrestler[];
    brand: string;
}

export default function Draft({ wrestlers }: Props) {
    const {
        draftWrestlers,
        raw,
        smackdown,
        handleFormSubmition,
    } = useDraft(wrestlers);

    return (
        <>
            <div className="draft flex column gap">
                <Form
                    className="w1 boxed flex center al-center column gap wrestler-upsert-form"
                    method="POST"
                    sendHttp={false}
                    refresh={false}
                    action="/api/drafts/create"
                    onSubmitCallback={handleFormSubmition}
                >
                    <Select
                        name="selected_wrestler"
                        listHeight={400}
                        list={draftWrestlers.map((wrestler) => ({
                            id: wrestler.id,
                            name: wrestler.name,
                            image: wrestler.image_name,
                        }))}
                    />
                    <div className="w1 flex end acenter">
                        <ButtonCTA type="submit" text={"Seleccionar"} />
                    </div>
                </Form>

                <div className="flex center al-center column gap wrestler-upsert-form">
                    {/* <NullableLoading condition={raw.length > 0}>
                        <DraftPick wrestler={raw[raw.length - 1]} brand="RAW" />
                    </NullableLoading> */}

                    <div className="w1 boxed flex start astart  gap wrestler-upsert-form">
                        <BrandRoster list={raw} brand="Raw" />
                        <BrandRoster list={smackdown} brand="Smackdown" />
                    </div>
                </div>
            </div>
        </>
    );
}
