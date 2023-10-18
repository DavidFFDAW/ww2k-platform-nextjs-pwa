import React from 'react';
import './scrollable.css';

export default function ScrollableArea({ title, children, height }) {
    const style = {
        height: height || 100,
        overflowY: 'auto',
        overflowX: 'hidden',
    };

    return (
        <section className="w1 scrollable-section-component">
            {title ? (
                <header className="scroll-section-title">
                    <h3>{title}</h3>
                </header>
            ) : null}
            <div className="scrollable-area" style={style}>
                {children}
            </div>
        </section>
    );
}
