import { NullableLoading } from "@/components/Loading";
import { Wrestler } from "@prisma/client";
import React, { useEffect, useState } from "react";

interface Props {
    wrestler: Wrestler;
    brand: "RAW" | "SMACKDOWN";
}

interface StateInterface {
    className: string;
    show: boolean;
}

export default function DraftPick({ wrestler, brand }: Props) {
    const [draftPickState, setDraftPickState] = useState<StateInterface>({
        className: "anim-appear",
        show: true,
    });

    const handleAnimationEnd = () => {
        if (draftPickState.className === "anim-appear") {
            setTimeout(() => {
                setDraftPickState((prev) => ({
                    ...prev,
                    className: "anim-disappear",
                }));
            }, 1000);
        }

        console.log("Animation ended");
    };

    const brands: any = {
        RAW: "/raw-roster.jpg",
        SMACKDOWN: "/sd-roster.jpg",
    };
    const brandImage: string = brands[brand.toUpperCase()] || brands.RAW;

    return (
        <NullableLoading condition={draftPickState.show}>
            <div
                className={`${draftPickState.className}  draft wrestler-card`}
                style={{ backgroundImage: `url(${brandImage})` }}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className="draft-wrestler-card-name">
                    <span>{wrestler.name}</span>
                </div>
                <div className="draft-wrestler-image">
                    <img
                        draggable={false}
                        src={wrestler.image_name as string}
                        alt={wrestler.name}
                    />
                </div>
                {/* {wrestler.championship && (
                <div className="draft-championship-image">
                    <img draggable={false} src={wrestler.championship.image} alt={wrestler.championship.name} />
                </div>
            )} */}
            </div>
        </NullableLoading>
    );
}
