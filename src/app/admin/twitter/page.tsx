import { CreateButton } from "@/components/Buttons";
import { SearchForm } from "@/components/Forms";
import Title from "@/components/Title";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import { Pagination, SimplePagination } from "@/components/Pagination";
import { Likes, Retweets } from "@/components/Twitter/Icons";
import { getAllTweets } from "@/queries/twitter.queries";
import { PageContext } from "@/shared/models";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import { Metadata } from "next";
import React from "react";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Twitter Admin"),
    description: "Twitter",
};

export default async function AdminTwitterPage(context: PageContext) {
    const { page, author, message } = context.searchParams;
    const tweets = await getAllTweets(page, {author, message});

    return (
        <>
            <Title title={"Twitter"} icon="twitter-x" />

            <Pagination page={Number(page)} total={tweets.length / 3} numberOfPages={3} />

            <SearchForm
                url="/admin/twitter"
                className="w1 boxed down flex between acenter gap"
            >
                <div className="flex start acenter gap-small">
                    <input type="search" name="author" placeholder="Tweet author name" defaultValue={author} />
                    <input type="search" name="message" placeholder="Tweet message" defaultValue={message} />
                </div>
                <button type="submit" className="btn btn-secondary">Buscar</button>
            </SearchForm>

            <CreateButton endpoint="twitter/pages/create" />

            <div className="w1 down flex between column al-center gap">
                {tweets.map((tweet) => (
                    <div className="w1 flex start astart gap boxed" key={tweet.id}>
                        <div className="flex column acenter gap-small">
                            <LazyImageTwo
                                src={tweet.wrestler.twitter_image as string}
                                alt={'/vacant.webp'}
                                width={110}
                                height={110}
                            />
                            <h4>{tweet.wrestler.name}</h4>
                        </div>
                        <div className="w1 flex start column astart gap-small">
                            <p>{tweet.message}</p>

                            <div className="w1 flex start astart gap">
                                <aside className="flex start astart gap-smaller tweet-footer-item">
                                    <div className="icon">
                                        <Retweets />
                                    </div>
                                    <div className="text">
                                        <span>{tweet.retweets.toLocaleString()}</span>
                                    </div>
                                </aside>

                                <aside className="flex start astart gap-smaller tweet-footer-item">
                                    <div className="icon">
                                        <Likes />
                                    </div>
                                    <div className="text">
                                        <span>{tweet.likes.toLocaleString()}</span>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <SimplePagination page={Number(page)} total={tweets.length / 3} />
        </>
    );
}
