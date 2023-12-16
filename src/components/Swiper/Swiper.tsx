"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

interface SwiperProps {
    children: React.ReactNode;
}

export default function SwiperComponent({ children }: SwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="w1 h1 swiper swiper-slider"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {children}
        </Swiper>
    );
}

export function SwiperSlideComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SwiperSlide className="swiper-slide">{children}</SwiperSlide>;
}
