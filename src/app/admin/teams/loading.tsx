import React from "react";
import TableListSkeleton from "./TableListSkeleton";
import CreateButton from "@/components/Buttons/CreateButton";
import Title from "@/components/Title";

export default function loading() {
    return (
        <>
            <Title title="Teams" icon="people-fill" />

            <TableListSkeleton />

            <CreateButton endpoint="teams/create" />
        </>
    );
}
