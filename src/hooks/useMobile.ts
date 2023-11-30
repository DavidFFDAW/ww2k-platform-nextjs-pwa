"use client";
import React, { useEffect } from "react";

export default function useMobile() {
    const [width, setWidth] = React.useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        // setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    console.log({ width });

    return {
        isMobile: width <= 768,
    };
}
