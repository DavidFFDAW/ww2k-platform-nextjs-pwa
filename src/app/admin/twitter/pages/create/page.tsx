import React from 'react'
import Title from '@/components/Title';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import { Metadata } from 'next';
import { Form } from '@/components/Forms';
import { getAllWrestlers } from '@/queries/wrestler.queries';
import TwitterUpsertFields from '../../components/TwitterUpsertFields';

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Crear Tweet"),
    description: "Twitter Create Page",
};

export default async function AdminTwitterCreatePage() {
    const wrestlers = await getAllWrestlers();

    return (
        <>
            <Title title={"Crear Tweet"} icon="twitter-x" />

            <Form
                method='POST'
                action='/api/twitter/create'
                className='grid two-column-grid astart place-items-normal responsive-grid gap twitter-upsert-form'
                sendHttp={true}
                redirect='/admin/twitter'
            >
                <TwitterUpsertFields datas={{}} wrestlers={wrestlers} />
            </Form>
        </>
    );
}

