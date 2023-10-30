import React from 'react'
import { ChildrenInterface } from '@/shared/models'

export default function WrestlersAdminLayout({ children }: ChildrenInterface) {
    return (
        <div className="admin-wrestlers-page">
            {children}
        </div>
    )
}
