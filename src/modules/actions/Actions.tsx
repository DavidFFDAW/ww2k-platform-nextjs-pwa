'use client';
import React, { useRef, useState } from "react";
import { NullableLoading } from "@/components/Loading";
import { DotsIcon } from "@/components/Icons/CommonIcons";
import useClickOutside from "@/hooks/useClickOutside";
import "./actions.css";

interface ActionsContainerProps {
    absolute?: boolean;
    children: React.ReactNode;
}

export default function ActionsContainer({ absolute, children }: ActionsContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const toggleShowOpts = () => setShowOptions((show) => !show);

    useClickOutside(ref, () => {
        setShowOptions(false);
    });

    const absoluteActionsListClass = `actions-option-group ${absolute ? "absolute-right-actions" : "relative"}`;

    return (
        <div className={absoluteActionsListClass} ref={ref}>
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