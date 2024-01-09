import React from 'react'
import Title from '@/components/Title';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import { Metadata } from 'next';
import { Form } from '@/components/Forms';
import { getAllWrestlers } from '@/queries/wrestler.queries';
import { PageContext } from '@/shared/models';
import TwitterUpsertFields from '@/app/admin/twitter/components/TwitterUpsertFields';

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Crear Respuesta a Tweet"),
    description: "Twitter Reply Tweet Creation Page",
};

export default async function AdminTwitterCreatePage(context: PageContext) {
    const replyingTo = context.params.id;
    const wrestlers = await getAllWrestlers();

    return (
        <>
            <Title title={"Crear respuesta a Tweet"} icon="twitter-x" />

            <Form
                method='POST'
                action='/api/twitter/create'
                className='grid two-column-grid astart place-items-normal responsive-grid gap twitter-upsert-form'
                sendHttp={true}
                redirect='/admin/twitter'
            >
                <input type="hidden" name='tweet_replying_to' value={replyingTo} />
                <TwitterUpsertFields datas={{}} wrestlers={wrestlers} />
            </Form>
        </>
    );
}

