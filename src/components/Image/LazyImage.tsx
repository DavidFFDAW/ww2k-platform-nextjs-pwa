"use client";
import useOnScreen from "@/hooks/useOnScreen";
import React, { SyntheticEvent, useRef } from "react";
import { ComponentSpinner } from "../Spinner/Spinner";

interface Props {
    src?: string;
    className?: string;
    imgClassName?: string;
    alt?: string;
    draggable?: boolean;
    width?: number;
    height?: number;
}

export default function LazyImage({
    src,
    className,
    imgClassName,
    alt = "defaul image",
    draggable = false,
    width = 512,
    height = 512,
}: Props) {
    const ref = useRef<HTMLImageElement>(null);
    const { isInView } = useOnScreen(ref);

    const imageSrc = src || "/noimage.jpg";

    const errorCatch = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLImageElement;
        target.onerror = null;
        target.src = "/noimage.jpg";
    };

    const imageSrcF = isInView ? imageSrc : '/noimage.jpg';
    const imageClassName = `lazy-image total-image ${imgClassName}`;

    return (
        <>
            <div ref={ref} className={className}>
                {isInView ? <img
                    // className={className}
                    className={imageClassName}
                    width={width}
                    height={height}
                    loading="lazy"
                    src={imageSrcF}
                    alt={alt}
                    data-src={imageSrc}
                    draggable={draggable}
                    onError={errorCatch}
                /> : <ComponentSpinner />}
            </div>
        </>

    );
}
