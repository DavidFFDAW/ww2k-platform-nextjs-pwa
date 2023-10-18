import React, { useRef } from 'react';
import useOnScreen from '~/hooks/useOnScreen';

export default function Image({ src, className, alt = 'defaul image', draggable = false, width = 512, height = 512 }) {
    const imageSrc = src || '/noimage.jpg';
    const ref = useRef(null);
    const { isInView } = useOnScreen(ref);

    const errorCatch = ({ target }) => {
        target.onerror = null;
        target.src = '/noimage.jpg';
    };

    const imageSrcF = isInView ? imageSrc : '/noimage.jpg';

    return (
        <img
            ref={ref}
            className={className}
            width={width}
            height={height}
            loading="lazy"
            src={imageSrcF}
            alt={alt}
            data-src={imageSrc}
            draggable={draggable}
            aria-label={alt}
            onError={errorCatch}
        />
    );
}
