import { ChildrenInterface } from "@/shared/models";
import dynamic from "next/dynamic";
import React from "react";

const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
    ssr: false,
});

export default function AdminMainLayout({ children }: ChildrenInterface) {
    return (
        <>
            <Sidebar />
            <section className="responsive-lockup sidebar-main-margin main-admin-layout">
                {children}
            </section>
        </>
    );
}
