"use client";
import React, { useEffect } from "react";

export default function useMobile() {
    const [width, setWidth] = React.useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return {
        isMobile: width <= 768,
    };
}
