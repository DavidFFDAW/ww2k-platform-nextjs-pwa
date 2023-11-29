"use client";
import React, { useState } from "react";
import { Wrestler } from "@prisma/client";
import Select from "@/modules/select/Select";
import { Form } from "@/components/Forms";
import "./draft.css";
import useDraft from "./useDraft";
import { NullableLoading } from "@/components/Loading";
import { ButtonCTA } from "@/components/Buttons/Buttons";
import BrandRoster from "./BrandRoster";

interface Props {
    wrestlers: Wrestler[];
    brand: string;
}

export default function Draft({ wrestlers, brand }: Props) {
    const { draftWrestlers, raw, smackdown, handleFormSubmition } =
        useDraft(wrestlers);

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
                        removeText={true}
                        list={draftWrestlers.map((wrestler) => ({
                            id: wrestler.id,
                            name: wrestler.name,
                            image: wrestler.image_name,
                        }))}
                    />
                    <div className="w1 flex end acenter">
                        <ButtonCTA type="submit" text={"Seleccionar"} />
                    </div>
                </Form >

                <div className="flex center al-center column gap wrestler-upsert-form">
                    {/* <div className="w1 boxed"> */}
                    {/* <DraftSelect draftedWrestlers={draftedWrestlers} getTheID={getTheID} />
                        <DraftButton draftedWrestlers={draftedWrestlers} chooseOwnerWrestler={chooseOwnerWrestler} /> */}

                    {/* <NullableLoading condition={!draftedWrestlers.loading && draftedWrestlers.list.length === 0}>
                            <DraftDownloadButton
                                draftedWrestlers={draftedWrestlers}
                            />
                        </NullableLoading> */}
                    {/* </div> */}

                    <div className="w1 boxed flex start astart  gap wrestler-upsert-form">
                        <BrandRoster list={raw} brand="Raw" />
                        <BrandRoster list={smackdown} brand="Smackdown" />

                    </div>
                </div>
            </div >
        </>
    );
}
