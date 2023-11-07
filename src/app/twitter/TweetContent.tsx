import Link from 'next/link';
import React from 'react'

interface TweetContentProps {
    content: string;
}

export default function TweetContent({ content }: TweetContentProps) {
    const splittedMessage = content.split(' ');
    const finalContent = splittedMessage.map((word: string, index: number) => {
        if (word.startsWith('#')) {
            return <Link key={index} href={`/twitter/hashtag/${word.slice(1)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2' }}>{word}</Link>
        }
        if (word.startsWith('@')) {
            return <Link key={index} href={`/twitter/account/${word.slice(1)}`} target="_blank" rel="noopener noreferrer">{word}</Link>
        }

        return word;
    });

    return (
        <>
            {finalContent.map((word: any, index: number) => {
                return <span key={index}>{word} </span>
            })}
        </>
    )
}
