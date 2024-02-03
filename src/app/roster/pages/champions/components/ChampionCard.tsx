"use client";
import React from "react";
import { Wrestler } from "@prisma/client";
import LazyImageTwo from "@/components/Image/LazyImageTwo";
import BrandImage from "@/app/roster/components/BrandImage";
import RosterCardName from "@/app/roster/components/RosterCardName";

interface Props {
    imgAlt?: string;
    imgSrc?: string;
    brand: string;
    wrestler: Wrestler;
    championship?: {
        name: string;
        brand: string;
        image: string;
        is_tag: boolean;
    };
}

export default function ChampionCard({
    wrestler,
    imgAlt = "/noimage.jpg",
    imgSrc = "/noimage.jpg",
    brand,
    championship,
}: Props) {
    return (
        <div
            className={
                "w1 grid-item roster-card relative brand-" +
                (wrestler.status === "manager" ? "" : brand)
            }
        >
            <div className="overlay-gradient"></div>
            <div className="roster-wrestler-brand">
                <BrandImage brand={brand.toUpperCase()} />
            </div>

            <LazyImageTwo
                width={128}
                height={128}
                src={imgSrc}
                srcError={imgAlt}
                alt={imgAlt}
                className="total-image roster-lazy-image image-container"
            />

            <div className="championship-image-container">
                <LazyImageTwo
                    width={64}
                    height={64}
                    src={championship?.image}
                    srcError="/noimage.jpg"
                    alt={championship?.name}
                    className="total-image roster-lazy-image-championship"
                />
            </div>

            <div className="roster-card-wrestler-name-container">
                <RosterCardName name={wrestler.name} brand={brand} />
            </div>
        </div>
    );
}
