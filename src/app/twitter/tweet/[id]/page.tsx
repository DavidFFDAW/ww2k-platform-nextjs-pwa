import { getTweetAndReplies, getTweetByID, getTweetRepliesByID } from '@/queries/twitter.queries';
import { PageContext } from '@/shared/models'
import React from 'react'
import Tweet from '../../Tweet';
import { Tweets } from '@prisma/client';
import { NullableLoading } from '@/components/Loading';

export const revalidate = 0;

export default async function PublicTweetPage({ params }: PageContext) {
    const [tweet, replies] = await Promise.all([
        getTweetByID(Number(params.id)),
        getTweetRepliesByID(Number(params.id))
    ]);
    if (!tweet) return <div>Not Found</div>;
    console.log({ tweet });


    return (
        <div className='single-tweet-page down'>
            <Tweet tweet={tweet} replies={replies.length as number} wrestler={tweet.wrestler} />

            <div className='flex column astart gap' style={{ marginTop: 20 }}>
                <NullableLoading condition={replies.length > 0} >
                    {replies.map((reply) => {
                        return (
                            <div className='w1' style={{ paddingLeft: 25 }}>
                                <Tweet key={reply.id} tweet={reply} wrestler={reply.wrestler} />
                            </div>
                        )
                    })}
                </NullableLoading>
            </div>
        </div>
    )
}
