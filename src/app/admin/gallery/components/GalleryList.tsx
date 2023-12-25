"use client";
import React from "react";
import Grid from "@/components/Layouts/Grid/Grid";
import LazyImageTwo from "@/components/Image/LazyImageTwo";

interface GalleryListProps {
    list: any[];
}

export default function GalleryList({ list }: GalleryListProps) {
    return (
        <>
            <datalist id="types">
                <option value="wrestler" />
                <option value="title" />
            </datalist>

            <Grid min={250} gap={10} columns={3} place="center" responsive>
                {list.map((item) => (
                    <div
                        key={item.id}
                        className="w1 h1 boxed flex column acenter gap-small"
                    >
                        <LazyImageTwo
                            src={item.image}
                            alt={item.image}
                            width={80}
                            height={80}
                            style={{ width: "100%" }}
                            imgClassName="roundded"
                        />
                        <div className="w1 flex column astart gap-small">
                            <p>ID: {item.external_item_id}</p>
                            <p className="w1 pp-text">
                                {item.assigned ? (
                                    <span className="pp-text">
                                        Asignado a {item.name}
                                    </span>
                                ) : (
                                    <span className="pp-text">Sin asignar</span>
                                )}
                            </p>
                            <input
                                className="w1"
                                type="text"
                                list="types"
                                name="type[]"
                                defaultValue={item.type}
                            />
                        </div>
                    </div>
                ))}
            </Grid>
        </>
    );
}
