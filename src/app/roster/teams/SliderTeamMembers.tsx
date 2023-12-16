"use client";
import { WrestlerTeam } from "@prisma/client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import "swiper/css/pagination";
import "swiper/css";

interface RenderTeamProps {
    members: WrestlerTeam[];
}

export default function SliderTeamMembers({ members }: RenderTeamProps) {
    return (
        <Swiper
            modules={[Pagination]}
            className="w1 h1 swiper swiper-slider"
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
        >
            {members.map((wrestler: any) => {
                return (
                    <SwiperSlide key={wrestler.Wrestler.id}>
                        <LazyImageTwo
                            width={50}
                            height={50}
                            key={wrestler.Wrestler.id}
                            src={wrestler.Wrestler.image_name as string}
                            srcError="/vacant.webp"
                            alt={wrestler.Wrestler.name}
                            className="w1 h1 image-container-slide"
                            imgClassName="w1 h1 image-slide"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
