import React from 'react'
import Title from '@/components/Title';
import { getNamedTitle } from '@/utilities/metadatas.utility';
import { Metadata } from 'next';
import { Form, Input, InputSelect, Textarea } from '@/components/Forms';
import { Boxed } from '@/components/Box/Boxed';
import { getAllWrestlers } from '@/queries/wrestler.queries';
import { getRandomNumber } from '@/utilities/random.number.utility';
import { ButtonCTA } from '@/components/Buttons/Buttons';

export const revalidate = 0;
export const metadata: Metadata = {
    title: getNamedTitle("Crear Tweet"),
    description: "Twitter Create Page",
};

export default async function AdminTwitterCreatePage() {
    const wrestlers = await getAllWrestlers();
    const randomComents = getRandomNumber(3000, 100000);
    const randomLikes = getRandomNumber(3000, 100000);
    const randomRetweets = getRandomNumber(3000, 100000);

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
                <Boxed className='w1 flex column gap-small' w={'100'}>
                    <InputSelect
                        name='wrestler_id'
                        label='Luchador'
                        required
                    >
                        {wrestlers.map(wrestler => (
                            <option value={wrestler.id} key={wrestler.id}>
                                {wrestler.name}
                            </option>
                        ))}
                    </InputSelect>

                    <Textarea name='tweet_content' label='Contenido' required />
                </Boxed>

                <Boxed className='w1 flex column gap-small' w={'100'}>
                    <Input name='comments' label='Comentarios' value={randomComents.toString()} placeholder='Comentarios del tweet' required />
                    <Input name='likes' label='Likes' value={randomLikes.toString()} placeholder='Likes del tweet' required />
                    <Input name='retweets' label='Retweets' value={randomRetweets.toString()} placeholder='Retweets del tweet' required />
                    <Input name='device' label='Dispositivo' value={'Android'} placeholder='Dispositivo desde el que se ha enviado el tweet' required />
                </Boxed>

                <div className="fixed-button">
                <ButtonCTA type={"submit"} text={"Guardar cambios"} />
            </div>
            </Form>
        </>
    );
}

