import React from 'react';

interface CustomTable {
    title: string;
    children: React.ReactNode;
}

export default function CustomTable({ title, children }: CustomTable) {
    return (
        <div className="table-responsive-container-wrapper">
            <div className="preview-table boxed down">
                <h2 className="box-title import-preview-table-title">{title}</h2>

                <div className="w1 table-responsive-wrapper">{children}</div>
            </div>
        </div>
    );
}
