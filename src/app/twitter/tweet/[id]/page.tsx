import React from "react";
import Tweet from "../../Tweet";
import { PageContext } from "@/shared/models";
import { NullableLoading } from "@/components/Loading";
import { getTweetByID, getTweetRepliesByID } from "@/queries/twitter.queries";

export const revalidate = 0;

export default async function PublicTweetPage({ params }: PageContext) {
    const [tweet, replies] = await Promise.all([
        getTweetByID(Number(params.id)),
        getTweetRepliesByID(Number(params.id)),
    ]);
    if (!tweet) return <div>Not Found</div>;

    return (
        <div className="single-tweet-page down">
            <Tweet
                tweet={tweet}
                replies={replies.length as number}
                wrestler={tweet.wrestler}
            />

            <div className="flex column astart gap" style={{ marginTop: 20 }}>
                <NullableLoading condition={replies.length > 0}>
                    {replies.map((reply) => {
                        return (
                            <div
                                key={reply.id}
                                className="w1"
                                style={{ paddingLeft: 25 }}
                            >
                                <Tweet
                                    tweet={reply}
                                    wrestler={reply.wrestler}
                                />
                            </div>
                        );
                    })}
                </NullableLoading>
            </div>
        </div>
    );
}
