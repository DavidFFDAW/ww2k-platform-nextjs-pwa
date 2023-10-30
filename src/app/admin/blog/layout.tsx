import React from "react";
import { ChildrenInterface } from "@/shared/models";
import "./blog.css";

export default function AdminBlogLayout({ children }: ChildrenInterface) {
    return <div className="admin-blog-page">{children}</div>;
}
