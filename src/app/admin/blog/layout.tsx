import React from "react";
import { LayoutInterface } from "@/shared/models";
import "./blog.css";

export default function AdminBlogLayout({ children }: LayoutInterface) {
    return <div className="admin-blog-page">{children}</div>;
}
