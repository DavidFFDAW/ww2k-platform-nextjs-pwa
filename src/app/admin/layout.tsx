import Sidebar from "@/components/Sidebar/Sidebar";
import { LayoutInterface } from "@/shared/models";
import React from "react";

export default function AdminMainLayout({ children }: LayoutInterface) {
    return (
        <>
            <Sidebar />
            <section className="responsive-lockup sidebar-main-margin">
                {children}
            </section>
        </>
    );
}
