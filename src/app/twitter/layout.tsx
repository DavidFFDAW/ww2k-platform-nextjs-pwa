import React from 'react';
import { ChildrenInterface } from '@/shared/models';
import './twitter.css';

export default function TwitterPublicPageLayout({ children }: ChildrenInterface) {
    return (
        <div className='public-twitter-module'>
            <div className="twitter__module">
                <div className="super-container">
                    <div className="cctt">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
