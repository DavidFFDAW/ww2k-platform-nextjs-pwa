import React from 'react';

interface RosterCardNameProps {
    name: string;
    brand: string;
}

export default function RosterCardName({ name, brand }: RosterCardNameProps) {
    const splitted = name.split(' ');
    const firstName = splitted.slice(0, splitted.length - 1).join(' ');
    const lastName = splitted[splitted.length - 1];

    return (
        <h2 className="roster-wrestler-name">
            {splitted.length < 2 ? (
                <strong className={`lastname-${brand}`}>{name}</strong>
            ) : (
                <>
                    {firstName} <strong className={`lastname-${brand}`}>{lastName}</strong>{' '}
                </>
            )}
        </h2>
    );
}
