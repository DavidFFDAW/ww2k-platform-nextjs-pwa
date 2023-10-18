import React from 'react'

interface Pr {
    children: React.ReactNode;
}

export default function WrestlersAdminLayout({ children }: Pr) {
    return (
        <div className="admin-wrestlers-page">
            {children}
        </div>
    )
}
