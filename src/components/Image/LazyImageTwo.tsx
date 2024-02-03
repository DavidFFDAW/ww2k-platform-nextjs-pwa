"use client";
import useOnScreen from "@/hooks/useOnScreen";
import React, { SyntheticEvent, useRef } from "react";
import { ComponentSpinner } from "../Spinner/Spinner";

interface Props {
    src?: string;
    srcError?: string;
    className?: string;
    imgClassName?: string;
    alt?: string;
    draggable?: boolean;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
}

export default function LazyImageTwo({
    src,
    className,
    alt = "defaul image",
    srcError = "/noimage.jpg",
    draggable = false,
    style,
    width = 512,
    height = 512,
}: Props) {
    const ref = useRef<HTMLImageElement>(null);
    const { isInView } = useOnScreen(ref);

    const imageSrc = src || srcError || "/noimage.jpg";

    const errorCatch = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLImageElement;
        target.onerror = null;
        target.src = srcError || "/noimage.jpg";
    };

    const imageSrcF = isInView ? imageSrc : "/noimage.jpg";
    const imageClassName = `lazy-image total-image ${className}`;

    return (
        <>
            <img
                ref={ref}
                style={style}
                className={isInView ? imageClassName : "hidden-image"}
                width={width}
                height={height}
                loading="lazy"
                {...(isInView && { src: imageSrcF })}
                alt={alt}
                data-src={imageSrc}
                draggable={draggable}
                onError={errorCatch}
            />
        </>
    );
}
