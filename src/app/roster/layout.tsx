import React from 'react';
import { ChildrenInterface } from '@/shared/models';
import './roster.css';

export default function PublicRosterLayout({ children }: ChildrenInterface) {
    return <div className="public-roster-page">{children}</div>;
}
