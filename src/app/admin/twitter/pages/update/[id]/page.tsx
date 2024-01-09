import React from 'react'
import Title from '@/components/Title';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import { Metadata } from 'next';
import { Form } from '@/components/Forms';
import { getAllWrestlers } from '@/queries/wrestler.queries';
import { PageContext } from '@/shared/models';
import { getTweetByID } from '@/queries/twitter.queries';
import TwitterUpsertFields from '../../../components/TwitterUpsertFields';


export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Editar Tweet"),
    description: "Twitter Update Page",
};

export default async function AdminTwitterCreatePage(context: PageContext) {
    const id = context.params.id;
    const wrestlers = await getAllWrestlers();
    const tweet = await getTweetByID(Number(id));

    return (
        <>
            <Title title={"Actualizar Tweet"} icon="twitter-x" />

            <Form
                method='POST'
                action={`/api/twitter/update/${id}`}
                className='grid two-column-grid astart place-items-normal responsive-grid gap twitter-upsert-form'
                sendHttp={true}
                redirect='/admin/twitter'
            >
                <input type="hidden" name="tweet_id" value={id} />

                <TwitterUpsertFields datas={{
                    tweet_content: tweet?.message,
                    comments: tweet?.comments,
                    likes: tweet?.likes,
                    retweets: tweet?.retweets,
                    device: tweet?.device,
                    wrestler_id: tweet?.author_id
                }} wrestlers={wrestlers} />
            </Form>
        </>
    );
}

