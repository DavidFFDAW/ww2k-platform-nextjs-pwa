import React, { SyntheticEvent } from "react";

interface Props {
    src?: string;
    className?: string;
    alt?: string;
    draggable?: boolean;
    width?: number;
    height?: number;
}

export default function Image({
    src,
    className,
    alt = "defaul image",
    draggable = false,
    width = 512,
    height = 512,
}: Props) {
    const imageSrc = src || "/noimage.jpg";

    const errorCatch = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLImageElement;
        target.onerror = null;
        target.src = "/noimage.jpg";
    };

    return (
        <img
            className={className}
            width={width}
            height={height}
            loading="lazy"
            src={imageSrc}
            alt={alt}
            data-src={imageSrc}
            draggable={draggable}
            aria-label={alt}
            onError={errorCatch}
        />
    );
}
