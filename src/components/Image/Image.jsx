import React, { useRef } from 'react';

export default function Image({ src, className, alt = 'defaul image', draggable = false, width = 512, height = 512 }) {
    const imageSrc = src || '/noimage.jpg';
    const ref = useRef(null);

    const errorCatch = ({ target }) => {
        target.onerror = null;
        target.src = '/noimage.jpg';
    };

    return (
        <img
            ref={ref}
            className={className}
            width={width}
            height={height}
            loading="lazy"
            src={src}
            alt={alt}
            data-src={imageSrc}
            draggable={draggable}
            aria-label={alt}
            onError={errorCatch}
        />
    );
}
