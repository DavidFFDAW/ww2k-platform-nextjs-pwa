"use client";
import React from "react";
import { InputDate, ToggleInput } from "@/components/Forms";
import ReadonlyInput from "@/components/Forms/Inputs/Readonly";
import { ConditionalLoading } from "@/components/Loading";

export default function ReignsDatesDataFields() {
    const [datas, setDatas] = React.useState({
        days: 0,
        won_date: "",
        lost_date: "",
        current: false,
    });

    const onChangeCallback = (_: React.ChangeEvent<HTMLInputElement>) => {
        setDatas((previous) => ({
            ...previous,
            current: !previous.current,
        }));
    };

    return (
        <>
            <div className="flex start aend place-items-end gap-small flex-responsive">
                <ReadonlyInput
                    name="days"
                    value={datas.days}
                    label="Días de reinado"
                    placeholder="Días del reinado"
                    required={true}
                />

                <InputDate
                    value={datas.won_date}
                    name="won_date"
                    label="Fecha de inicio"
                    required={true}
                    max={new Date().toISOString().split("T")[0]}
                />
            </div>

            <div className="flex start aend place-items-end gap-small flex-responsive responsive-align-center">
                <div className="w1">
                    <ToggleInput
                        name="current"
                        label="¿Es el reinado actual?"
                        checked={datas.current}
                        onChangeCallback={onChangeCallback}
                    />
                </div>

                <ConditionalLoading
                    condition={!datas.current}
                    fallback={<div className="w1"></div>}
                >
                    <InputDate
                        name="lost_date"
                        label="Fecha de final"
                        value={datas.lost_date}
                        required={true}
                        max={new Date().toISOString().split("T")[0]}
                    />
                </ConditionalLoading>
            </div>
        </>
    );
}
