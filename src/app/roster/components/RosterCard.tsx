"use client";
import React from "react";
import BrandImage from "./BrandImage";
import LazyImage from "@/components/Image/LazyImage";
import RosterCardName from "./RosterCardName";
import { Wrestler } from "@prisma/client";

interface Props {
    imgAlt?: string;
    imgSrc?: string;
    brand: string;
    wrestler: Wrestler;
}

export default function RosterCard({
    wrestler,
    imgAlt = "/noimage.jpg",
    imgSrc = "/noimage.jpg",
    brand,
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
            <LazyImage
                width={128}
                height={128}
                src={imgSrc}
                srcError={imgAlt}
                alt={imgAlt}
                className="total-image image-container"
            />
            <div className="roster-card-wrestler-name-container">
                <RosterCardName name={wrestler.name} brand={brand} />
            </div>
        </div>
    );
}
