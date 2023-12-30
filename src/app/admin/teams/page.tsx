import Title from "@/components/Title";
import CreateButton from "@/components/Buttons/CreateButton";
import { Metadata } from "next";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import TableListSkeleton from "./TableListSkeleton";
import { Suspense } from "react";
import TableList from "./TableList";
import Link from "next/link";

export const revalidate = 0;

export const metadata: Metadata = {
    title: getNamedTitle("Equipos"),
    description: "Administrar equipos",
};

export default function AdminTeamsPage() {
    return (
        <>
            <Title title="Teams" icon="people-fill" />

            <Suspense fallback={<TableListSkeleton />}>
                <TableList />
            </Suspense>

            <CreateButton endpoint="teams/pages/create" />
        </>
    );
}
