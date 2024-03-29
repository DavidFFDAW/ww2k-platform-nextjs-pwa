import { ChildrenInterface } from "@/shared/models";
import React from "react";

export default function AdminTeamsLayout({ children }: ChildrenInterface) {
    return <section className="admin-teams-page">{children}</section>;
}
