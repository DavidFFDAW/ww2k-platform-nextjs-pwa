import React from 'react';
import './scrollable.css';

interface ScrollableAreaProps {
    title: string;
    children: React.ReactNode;
    height?: number;
}

export default function ScrollableArea({ title, children, height }: ScrollableAreaProps) {
    const style = {
        height: height || 100,
    };

    return (
        <section className="w1 scrollable-section-component">
            {title ? (
                <header className="scroll-section-title">
                    <h3>{title}</h3>
                </header>
            ) : null}
            <div className="scrollable-area overflowY non-overflowX" style={style}>
                {children}
            </div>
        </section>
    );
}
