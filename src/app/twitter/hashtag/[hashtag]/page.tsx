import React from 'react'
import { prisma } from '@/db/conn';
import { ConditionalLoading } from '@/components/Loading';
import Tweet from '../../Tweet';
import Title from '@/components/Title';

function getTweetsFromHashtag(hashtag: string) {
    return prisma.tweets.findMany({
        orderBy: {
            created_at: 'desc',
        },
        include: {
            wrestler: true,
            replies: true,
        },
        where: {
            message: {
                contains: `#${hashtag}`,
            },
        },
    });
}

export default async function HashtagSearchPage({ params }: { params: any }) {
    const hashtagTweets = await getTweetsFromHashtag(params.hashtag);

    if (hashtagTweets.length === 0) {
        return <Title title={`No tweets were found for hashtag: ${params.hashtag}`} icon='twitter' />
    }

    return (
        <>
            <ConditionalLoading condition={hashtagTweets.length > 0}>
                {hashtagTweets.map(tweet =>
                    (<Tweet key={tweet.id} tweet={tweet} replies={tweet.replies.length} wrestler={tweet.wrestler} />)
                )}
            </ConditionalLoading>
        </>
    )
}
