import { Boxed } from '@/components/Box/Boxed'
import { ButtonCTA } from '@/components/Buttons/Buttons'
import { Input, InputSelect, Textarea } from '@/components/Forms'
import { getRandomNumber } from '@/utilities/random.number.utility'
import { Wrestler } from '@prisma/client'
import React from 'react'

interface TwitterUpsertFields {
    datas: any;
    wrestlers: Wrestler[];
}

export default function TwitterUpsertFields({ datas, wrestlers }: TwitterUpsertFields) {
    const randomComents = datas.comments || getRandomNumber(3000, 100000).toLocaleString();
    const randomLikes = datas.likes || getRandomNumber(3000, 100000).toLocaleString();
    const randomRetweets = datas.retweets || getRandomNumber(3000, 100000).toLocaleString();

    return (
        <>
            <Boxed className='w1 flex column gap-small' w={'100'}>
                <InputSelect
                    name='wrestler_id'
                    label='Luchador'
                    {...datas.wrestler_id && { value: datas.wrestler_id }}
                    required
                >
                    {wrestlers.map(wrestler => (
                        <option value={wrestler.id} key={wrestler.id}>
                            {wrestler.name}
                        </option>
                    ))}
                </InputSelect>

                <Textarea
                    name='tweet_content'
                    label='Contenido'
                    required
                    {...datas.tweet_content && { value: datas.tweet_content }}
                />
            </Boxed>

            <Boxed className='w1 flex column gap-small' w={'100'}>
                <Input name='comments' label='Comentarios' value={randomComents} placeholder='Comentarios del tweet' required />
                <Input name='likes' label='Likes' value={randomLikes} placeholder='Likes del tweet' required />
                <Input name='retweets' label='Retweets' value={randomRetweets} placeholder='Retweets del tweet' required />
                <Input name='device' label='Dispositivo' value={'Android'} placeholder='Dispositivo desde el que se ha enviado el tweet' required />
            </Boxed>

            <div className="fixed-button">
                <ButtonCTA type={"submit"} text={"Guardar cambios"} />
            </div>
        </>
    )
}
