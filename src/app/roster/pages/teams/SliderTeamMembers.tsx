"use client";
import { Pagination } from "swiper/modules";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { TeamMembers } from "../../models/team.members.model";
import "swiper/css/pagination";
import "swiper/css";

export default function SliderTeamMembers({ members }: TeamMembers) {
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
