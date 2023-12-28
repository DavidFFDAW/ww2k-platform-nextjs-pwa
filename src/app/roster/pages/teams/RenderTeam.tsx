import LazyImage from "@/components/Image/LazyImage";
import { WrestlerTeam } from "@prisma/client";
import React from "react";

interface RenderTeamProps {
    members: WrestlerTeam[];
}

export default function RenderTeam({ members }: RenderTeamProps) {
    if (members.length == 2) {
        return (
            <>
                {members.map((wrestler: any, index) => {
                    const dex = index === 0 ? -20 : 100;

                    return (
                        <LazyImage
                            width={50}
                            height={50}
                            key={wrestler.Wrestler.id}
                            src={wrestler.Wrestler.image_name as string}
                            srcError="/vacant.webp"
                            alt={wrestler.Wrestler.name}
                            // className="total-image image-container"
                            className="ppppppppppppp"
                            imgClassName="papiroflesiax"
                            style={{
                                zIndex: members.length + 1 - index,
                                left: `${dex}px`,
                            }}
                        />
                    );
                })}
            </>
        );
    }

    if (members.length == 3) {
        return (
            <>
                {members.map((wrestler: any, index) => {
                    return (
                        <LazyImage
                            width={50}
                            height={50}
                            key={wrestler.Wrestler.id}
                            src={wrestler.Wrestler.image_name as string}
                            srcError="/vacant.webp"
                            alt={wrestler.Wrestler.name}
                            // className="total-image image-container"
                            className="ppppppppppppp"
                            imgClassName="papiroflesiax"
                            style={{
                                zIndex: members.length + 1 - index,
                                left: `${
                                    index === 0 ? -50 : index === 1 ? 25 : 100
                                }px`,
                            }}
                        />
                    );
                })}
            </>
        );
    }

    if (members.length >= 4) {
        return (
            <>
                {members.map((wrestler: any, index) => {
                    return (
                        <LazyImage
                            width={50}
                            height={50}
                            key={wrestler.Wrestler.id}
                            src={wrestler.Wrestler.image_name as string}
                            srcError="/vacant.webp"
                            alt={wrestler.Wrestler.name}
                            // className="total-image image-container"
                            className="ppppppppppppp"
                            imgClassName="papiroflesiax"
                            style={{
                                zIndex: members.length + 1 - index,
                                left: `${
                                    index === 0
                                        ? -55
                                        : index === 1
                                        ? 25
                                        : index === 2
                                        ? 100
                                        : 175
                                    // index === 0 ? -50 : index === 1 ? 25 : 100
                                }px`,
                            }}
                        />
                    );
                })}
            </>
        );
    }
}
