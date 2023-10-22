import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

interface AdminMainLayoutProps {
    children: React.ReactNode;
}

export default function AdminMainLayout({ children }: AdminMainLayoutProps) {
    return (
        <>
            <Sidebar />
            <section className="responsive-lockup sidebar-main-margin">
                {children}
            </section>
        </>
    );
}
