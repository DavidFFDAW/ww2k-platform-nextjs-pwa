import React from 'react'
import Tweet from './Tweet';
import { prisma } from '@/db/conn'
import { ConditionalLoading } from '@/components/Loading';

function getTweets() {
    return prisma.tweets.findMany({
        orderBy: {
            created_at: 'desc',
        },
        include: {
            wrestler: true,
            replies: true,
        },
    });
}

export default async function TwitterList() {
    const tweets = await getTweets();

    return (
        <ConditionalLoading condition={tweets.length > 0}>
            {tweets.map(tweet =>
                (<Tweet key={tweet.id} tweet={tweet} replies={tweet.replies.length} wrestler={tweet.wrestler} />)
            )}
        </ConditionalLoading>
    )
}
