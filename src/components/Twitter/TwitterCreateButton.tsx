import React from 'react'
import Link from 'next/link';
import { NewTweet } from './Icons'

export default function TwitterCreateButton({ href }: { href: string }) {
    return (
        <Link href={href} className='btn got-to-admin twitter-button'>
            <button className="unbutton">
                <NewTweet size={25} />
            </button>
        </Link>

    )
}
