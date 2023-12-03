"use client";
import { Form } from "@/components/Forms";
import { ChildrenInterface } from "@/shared/models";
import React from "react";

export default function BulkUpdateForm({ children }: ChildrenInterface) {
    return (
        <Form
            method="PUT"
            action="/api/wrestlers/bulk-update"
            sendHttp={true}
            refresh={true}
            preParseCallback={(serializedDatas: any) => {
                return serializedDatas.ids.map((id: string, index: number) => {
                    return {
                        id,
                        name: serializedDatas.names[index],
                        alias: serializedDatas.aliases[index],
                        finisher: serializedDatas.finishers[index],
                    };
                });
            }}
        >
            {children}
        </Form>
    );
}
