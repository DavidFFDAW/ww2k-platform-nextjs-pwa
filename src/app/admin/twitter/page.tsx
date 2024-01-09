import { CreateButton } from "@/components/Buttons";
import { Form, SearchForm } from "@/components/Forms";
import Title from "@/components/Title";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import { Pagination, SimplePagination } from "@/components/Pagination";
import { Likes, Retweets } from "@/components/Twitter/Icons";
import { getAllTweets } from "@/queries/twitter.queries";
import { PageContext } from "@/shared/models";
import { getNamedTitle } from "@/utilities/metadatas.utility";
import { Metadata } from "next";
import React from "react";
import ActionsContainer from "@/modules/actions/Actions";
import { ActionColors, ActionLink, ActionSubmit } from "@/modules/actions";

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Twitter Admin"),
    description: "Twitter",
};

export default async function AdminTwitterPage(context: PageContext) {
    const { page, author, message } = context.searchParams;
    const tweets = await getAllTweets(page, { author, message });

    return (
        <>
            <Title title={"Twitter"} icon="twitter-x" />

            <Pagination page={Number(page)} total={tweets.length / 3} numberOfPages={3} />

            <SearchForm
                url="/admin/twitter"
                className="w1 boxed down flex between acenter gap flex-responsive responsive-align-end"
            >
                <div className="flex start acenter gap-small flex-responsive w1-responsive responsive-align-end">
                    <input className="w1-responsive" type="search" name="author" placeholder="Tweet author name" defaultValue={author} />
                    <input className="w1-responsive" type="search" name="message" placeholder="Tweet message" defaultValue={message} />
                </div>
                <button type="submit" className="btn cta">Buscar</button>
            </SearchForm>

            <CreateButton endpoint="twitter/pages/create" />

            <div className="w1 down flex between column al-center gap">
                {tweets.map((tweet) => (
                    <div className="w1 flex start astart gap boxed relative" key={tweet.id}>
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

                        <ActionsContainer absolute>
                            <ActionLink
                                color={ActionColors.WARNING}
                                toHref={`/admin/twitter/pages/update/${tweet.id}`}
                                icon="pencil-square"
                                text={`Editar Tweet`}
                            />
                            <ActionLink
                                color={ActionColors.SUCCESS}
                                toHref="/admin/twitter/pages/create/"
                                icon="plus-circle"
                                text={`Crear nuevo Tweet`}
                            />
                            <ActionLink
                                color={ActionColors.INFO}
                                toHref={`/admin/twitter/pages/create/reply/${tweet.id}`}
                                icon="reply"
                                text={`Crear respuesta a este Tweet`}
                            />
                            <Form action={`/api/twitter/delete/${tweet.id}`} method="POST" refresh={true} sendHttp={true}>
                                <ActionSubmit
                                    color={ActionColors.DELETE}
                                    icon="trash-fill"
                                    text="Borrar este Tweet"
                                    name="tweet_id"
                                    value={tweet.id.toString()}
                                />
                            </Form>
                        </ActionsContainer>
                    </div>
                ))}
            </div>

            <SimplePagination page={Number(page)} total={tweets.length / 3} />
        </>
    );
}
