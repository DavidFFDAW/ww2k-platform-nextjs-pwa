import { LayoutInterface } from '@/shared/models'
import React from 'react'

export default function WrestlersAdminLayout({ children }: LayoutInterface) {
    return (
        <div className="admin-wrestlers-page">
            {children}
        </div>
    )
}
