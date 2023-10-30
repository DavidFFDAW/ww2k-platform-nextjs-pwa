import Sidebar from "@/components/Sidebar/Sidebar";
import { ChildrenInterface } from "@/shared/models";
import React from "react";

export default function AdminMainLayout({ children }: ChildrenInterface) {
    return (
        <>
            <Sidebar />
            <section className="responsive-lockup sidebar-main-margin">
                {children}
            </section>
        </>
    );
}
