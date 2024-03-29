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

export default function LazyImage({
    src,
    className,
    imgClassName,
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
    const imageClassName = `lazy-image total-image ${imgClassName}`;

    return (
        <>
            <div ref={ref} className={className}>
                {isInView ? (
                    <img
                        // className={className}
                        style={style}
                        className={imageClassName}
                        width={width}
                        height={height}
                        loading="lazy"
                        src={imageSrcF}
                        alt={alt}
                        data-src={imageSrc}
                        draggable={draggable}
                        onError={errorCatch}
                    />
                ) : (
                    <ComponentSpinner />
                )}
            </div>
        </>
    );
}
