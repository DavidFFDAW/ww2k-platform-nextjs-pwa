import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'

interface AdminMainLayoutProps {
    children: React.ReactNode;
}

export default function AdminMainLayout({ children }: AdminMainLayoutProps) {
    return (
        <>
            <Sidebar />
            <section className='responsive-lockup sidebar-main-margin'>
                {children}
            </section>
        </>
    )
}
