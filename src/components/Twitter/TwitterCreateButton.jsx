import React from 'react'
import { Link } from 'react-router-dom'
import { NewTweet } from '~/pages/Twitter/component/TweetIcons'

export default function TwitterCreateButton({ href }) {
    return (
        <Link to={href} className='btn got-to-admin twitter-button'>
            <button className="unbutton">
                <NewTweet size={25} />
            </button>
        </Link>

    )
}
