import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import "./assets/embla.css";

type PropType = {
    options?: EmblaOptionsType;
    children?: React.ReactNode;
    autoplayOptions?: AutoplayOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options, children, autoplayOptions } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay(autoplayOptions || {}),
    ]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">{children}</div>
            </div>
        </div>
    );
};

export default EmblaCarousel;

export function EmblaSlide({ children }: { children: React.ReactNode }) {
    return <div className="embla__slide">{children}</div>;
}
