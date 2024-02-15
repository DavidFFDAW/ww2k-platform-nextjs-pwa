import React from "react";
import "./header.css";
import ColorTheme from "./HeaderComponents/ColorTheme";

export default function Header() {
    return (
        <header className="w1 flex end acenter app-header app-main-top-header-custom responsive-w1">
            <ColorTheme />
        </header>
    );
}
