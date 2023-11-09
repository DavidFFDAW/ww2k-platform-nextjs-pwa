import React from 'react';
import Link from 'next/link';
import { BootstrapIcon } from '../Icon/BootstrapIcon';

interface SidebarLinkProps {
    to: string;
    icon: string;
    text: string;
    active?: boolean;
}

export default function SidebarLink({ to, icon, text, active }: SidebarLinkProps) {

    return (
        <>
            <Link
                href={to}
                title={text + ' Menu Link'}
                className={`uppercase sidebar-link flex start acenter gap-small ${active ? 'active' : 'non-active'}`}
            >
                <BootstrapIcon icon={icon} />
                {text}
            </Link>
        </>
    );
}

interface SidebarSubmitProps {
    icon: string;
    text: string;
}

export function SidebarSubmit({ icon, text }: SidebarSubmitProps) {
    return (
        <>
            <button
                type='submit'
                title={text + ' Menu Link'}
                className="uppercase sidebar-link flex start acenter gap-small unsubmit-appearance"
            >
                <BootstrapIcon icon={icon} />
                {text}
            </button>
        </>
    );
}
