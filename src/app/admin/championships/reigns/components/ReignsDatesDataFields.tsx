"use client";
import React from "react";
import { InputDate, ToggleInput } from "@/components/Forms";
import ReadonlyInput from "@/components/Forms/Inputs/Readonly";
import { ConditionalLoading } from "@/components/Loading";

export default function ReignsDatesDataFields() {
    const now = new Date().toISOString().split("T")[0];

    const [datas, setDatas] = React.useState({
        days: 0,
        won_date: now,
        lost_date: now,
        current: false,
    });

    const onChangeCallback = (_: React.ChangeEvent<HTMLInputElement>) => {
        setDatas((previous) => ({
            ...previous,
            current: !previous.current,
        }));
    };

    const changeWonDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log({ val: event.target.value });
        const wonDate = new Date(event.target.value);
        const lostDate = new Date(datas.lost_date);
        const days = Math.abs(
            (wonDate.getTime() - lostDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        console.log({ days });
        
        
        setDatas((previous) => ({
            ...previous,
            won_date: event.target.value,
            days: days,
        }));
    };

    return (
        <>
            <div className="flex start aend place-items-end gap-small flex-responsive">
                <div className="w1 flex column gap-5">
                    <label className="label" htmlFor={'days'}>
                        Dias del reinado
                        <span className="required">*</span>
                    </label>

                    <div className="w1 flex acenter numeric-input numeric-input-wrapper-container-div relative">
                        <div className="w1 input-wrapper-container-div relative">
                            <input
                                type="number"
                                className="w1 readonly-input"
                                name="days"
                                required={true}
                                value={datas.days.toString()}
                                placeholder={"Dias del reinado"}
                                readOnly={true}
                            />
                        </div>
                    </div>
                </div>
                

                <InputDate
                    value={datas.won_date}
                    name="won_date"
                    label="Fecha de inicio"
                    required={true}
                    max={new Date().toISOString().split("T")[0]}
                    onChangeDate={changeWonDate}
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
