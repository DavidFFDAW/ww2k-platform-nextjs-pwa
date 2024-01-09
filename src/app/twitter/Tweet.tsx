import React from 'react';
import { Likes, Replies, Retweets } from '@/components/Twitter/Icons';
import { existingDateToString } from '@/utilities/date.normalizer.utility';
import { Tweets, Wrestler } from '@prisma/client';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface TweetProps {
    tweet: Tweets;
    wrestler: Wrestler;
    replies?: number;
}

const TweetContent = dynamic(() => import('./TweetContent'), { ssr: false });

export default function Tweet({ tweet, wrestler, replies = 0 }: TweetProps) {
    return (
        <Link href={`/twitter/tweet/${tweet.id}`} style={{ cursor: 'pointer' }} className="tweet" data-id={tweet.id}>
            <header className="tweet-header">
                <div className="tweet-header-avatar">
                    <img src={wrestler.image_name as string} alt={`${wrestler.name} twitter pfp`} />
                </div>
                <div className="tweet-header-name">
                    <div className="tweet-header-name-username">
                        <span className="username">{wrestler.name}</span>
                    </div>
                    <div className="tweet-header-name-account anchor">
                        <span className="account not-needed-arroba">{wrestler.twitter_acc}</span>
                    </div>
                </div>
                <aside className="tweet-date">
                    {existingDateToString(tweet.created_at)}
                </aside>
            </header>
            
            <section className="tweet-content">
                <TweetContent content={tweet.message} />
            </section>

            <footer className="tweet-footer">
                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Replies />
                    </div>
                    <div className="text">
                        <span>{replies.toLocaleString()}</span>
                    </div>
                </aside>

                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Retweets />
                    </div>
                    <div className="text">
                        <span>{tweet.retweets.toLocaleString()}</span>
                    </div>
                </aside>

                <aside className="tweet-footer-item">
                    <div className="icon">
                        <Likes />
                    </div>
                    <div className="text">
                        <span>{tweet.likes.toLocaleString()}</span>
                    </div>
                </aside>
            </footer>
        </Link>
    );
}