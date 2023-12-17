import React from "react";
import "./scrollable.css";

interface ScrollableAreaProps {
    title: string;
    children: React.ReactNode;
    height?: number;
    reset?: boolean;
    buttonText?: string;
    clearList?: () => void;
}

export default function ScrollableArea({
    title,
    children,
    height,
    reset,
    buttonText,
    clearList,
}: ScrollableAreaProps) {
    const style = {
        height: height || 100,
    };

    return (
        <section className="w1 scrollable-section-component">
            {title ? (
                <header className="scroll-section-title flex between acenter">
                    <h3>{title}</h3>
                    {reset ? (
                        <button
                            className="btn button cta-secondary"
                            onClick={clearList}
                        >
                            {buttonText || "Reset"}
                        </button>
                    ) : null}
                </header>
            ) : null}
            <div
                className="scrollable-area overflowY non-overflowX"
                style={style}
            >
                {children}
            </div>
        </section>
    );
}
