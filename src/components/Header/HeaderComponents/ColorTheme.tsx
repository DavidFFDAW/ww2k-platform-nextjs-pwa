"use client";
import { NullableLoading } from "@/components/Loading";
import { getColorTheme, setColorTheme } from "@/services/theme.service";
import React from "react";

export default function ColorTheme() {
    const [theme, setTheme] = React.useState("light");

    React.useEffect(() => {
        const localTheme = getColorTheme();
        if (localTheme) {
            setTheme(localTheme);
            document.body.classList.add(localTheme);
        }
    }, []);

    const changeColorTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setColorTheme(newTheme);

        document.body.classList.remove("dark");
        document.body.classList.remove("light");
        document.body.classList.add(newTheme);
    };

    return (
        <>
            <label className="switch block" htmlFor={undefined}>
                <input
                    type="checkbox"
                    defaultChecked={theme === "dark"}
                    onChange={changeColorTheme}
                />

                <span className={`slider round ${theme}`}>
                    <div className="ball">
                        <NullableLoading condition={theme === "dark"}>
                            <i className="bi bi-moon"></i>
                        </NullableLoading>

                        <NullableLoading condition={theme === "light"}>
                            <i className="bi bi-sun"></i>
                        </NullableLoading>
                    </div>
                </span>
            </label>
        </>
    );
}
