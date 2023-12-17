import React from "react";
import { ChildrenInterface } from "@/shared/models";
import "./blog.css";

export default function PublicBlogPageLayout({ children }: ChildrenInterface) {
    return <div className="public-page-blog">{children}</div>;
}
