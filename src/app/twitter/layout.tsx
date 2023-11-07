import React from 'react'
import { LayoutProps } from '../../../.next/types/app/layout';
import './twitter.css';

export default function TwitterPublicPageLayout({ children }: LayoutProps) {
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
