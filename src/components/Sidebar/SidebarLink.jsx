import React from 'react';
import Link from 'next/link';
import { BootstrapIcon } from '../Icon/BootstrapIcon';

export default function SidebarLink({ to, icon, text, }) {

    return (
        <>
            <Link
                href={to}
                title={text + ' Menu Link'}
                className="uppercase sidebar-link flex start gap-small acenter"
            >
                <BootstrapIcon icon={icon} />
                {text}
            </Link>
        </>
    );
}
