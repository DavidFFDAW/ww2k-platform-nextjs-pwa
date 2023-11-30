"use client";
import React, { useState } from "react";
import Image from "../Image/Image";
import Link from "next/link";
import SidebarLink, { SidebarSubmit } from "./SidebarLink";
import { BootstrapIcon } from "../Icon/BootstrapIcon";
import { logout } from "@/actions/auth.actions";
import { usePathname } from "next/navigation";
import { AdminMenu } from "@/constants/routes";
import useMobile from "@/hooks/useMobile";

export default function Sidebar() {
    const pathname = usePathname();
    const { isMobile } = useMobile();

    const [sidebarData, setSidebarData] = useState<{ showSidebar: boolean }>({
        showSidebar: isMobile ? false : true,
    });

    const toggleSidebar = () => {
        setSidebarData((p) => ({ ...p, showSidebar: !p.showSidebar }));
    };

    const toggleOnClick = () => {
        if (window.innerWidth < 768) {
            toggleSidebar();
        }
    };

    const showSidebar = sidebarData.showSidebar ? "shown" : "";

    return (
        <aside className={`sidebar ${showSidebar}`} id="sidebear">
            <button
                type="button"
                role="button"
                className="btn close responsive"
                onClick={toggleSidebar}
            ></button>

            <div className="flex center sidebar-image-container">
                <Link href={"/admin"} title="Image Dashboard Link">
                    <Image
                        src={"/icons/icon-512x512.png"}
                        width={128}
                        height={128}
                        className="sidebar-image-logo"
                        alt="Image Dashboard Logo"
                    />
                </Link>
            </div>

            <div className="flex center links-container-big sidebar-links-container-overflow">
                <div className="sidebar-links-container links">
                    {AdminMenu.map((item, index) => {
                        const key = item.key || index;
                        if (item.showOnSidebar) {
                            return (
                                <SidebarLink
                                    active={pathname.includes(item.url)}
                                    icon={item.bootstrap}
                                    to={item.url}
                                    text={item.name}
                                    key={key}
                                    onClick={toggleOnClick}
                                />
                            );
                        }
                    })}

                    <form action={logout} className="w1">
                        <SidebarSubmit icon="signpost" text="Logout" />
                    </form>
                </div>
            </div>

            <button
                className="btn-sidebar btn-open-sidebar"
                onClick={toggleSidebar}
            >
                {sidebarData.showSidebar ? (
                    <BootstrapIcon icon={"chevron-left"} />
                ) : (
                    <BootstrapIcon icon={"chevron-right"} />
                )}
            </button>
        </aside>
    );
}
