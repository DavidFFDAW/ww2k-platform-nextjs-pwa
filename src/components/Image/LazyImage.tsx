import useOnScreen from "@/hooks/useOnScreen";
import React, { SyntheticEvent, useRef } from "react";
import { ConditionalLoading } from "../Loading/LoadingComponent";
import Spinner, { ComponentSpinner } from "../Spinner/Spinner";

interface Props {
    src?: string;
    className?: string;
    alt?: string;
    draggable?: boolean;
    width?: number;
    height?: number;
}

export default function LazyImage({
    src,
    className,
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

    return (
        <>
            <div ref={ref}>
                {isInView ? <img
                    className={className}
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
