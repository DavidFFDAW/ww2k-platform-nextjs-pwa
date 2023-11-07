import React from 'react'
import { prisma } from '@/db/conn';
import Tweet from '../../Tweet';
import Title from '@/components/Title';

function getTweetsFromAccountID(account: string) {
    return prisma.tweets.findMany({
        orderBy: {
            created_at: 'desc',
        },
        include: {
            wrestler: true,
            replies: true,
        },
        where: {
            wrestler: {
                twitter_name: account,
            },
        },
    });
}

export default async function AccountTweetsSearchPage({ params }: { params: any }) {
    if (!params.account) {
        return <Title title={`No accountID was provided`} icon='twitter' />
    }
    const accountTweets = await getTweetsFromAccountID(params.account);

    if (accountTweets.length === 0) {
        return <Title title={`No tweets were found for hashtag: ${params.account}`} icon='twitter' />
    }

    return (
        <>
            {accountTweets.map(tweet =>
                (<Tweet key={tweet.id} tweet={tweet} replies={tweet.replies.length} wrestler={tweet.wrestler} />)
            )}
        </>
    )
}
