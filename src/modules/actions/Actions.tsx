"use client";
import React, { useRef, useState } from "react";
import { NullableLoading } from "@/components/Loading/LoadingComponent";
import { DotsIcon } from "@/components/Icons/CommonIcons";
import { ActionOption } from "./ActionOption";
import { ActionFetch } from "./ActionFetch";
import { ActionSubmit } from "./ActionSubmit";
import useClickOutside from "@/hooks/useClickOutside";
import "./actions.css";

const ActionTypes = {
    BUTTON: "button",
    DEFAULT: "default",
    LINK: "link",
};

const ColorTypes = {
    SUCCESS: "success-action",
    DEFAULT: "default-action",
    DELETE: "delete-action",
    WARNING: "warning-action",
    INFO: "info-action",
    DARK: "dark-action",
};

interface ActionsContainerProps {
    children: React.ReactNode;
}

function ActionsContainer({ children }: ActionsContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const toggleShowOpts = () => setShowOptions((show) => !show);

    useClickOutside(ref, () => {
        setShowOptions(false);
    });

    return (
        <div className="actions-option-group relative" ref={ref}>
            <button
                className={`three-dots-actions ${showOptions ? "active" : "normal"
                    }`}
                role="button"
                aria-label="Open actions list"
                type="button"
                onClick={toggleShowOpts}
            >
                <DotsIcon />
            </button>

            <NullableLoading condition={showOptions}>
                <div className="actions-group-actions-list animate__animated animate__fadeIn animate__faster">
                    {children}
                </div>
            </NullableLoading>
        </div>
    );
}

const Actions = {
    Container: ActionsContainer,
    Link: ActionOption,
    Button: ActionFetch,
    Submit: ActionSubmit,
    Types: ActionTypes,
    Colors: ColorTypes,
};

export default Actions;
