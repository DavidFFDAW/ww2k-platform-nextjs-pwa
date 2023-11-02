"use client";
import "./assets/gallery.css";
import React from "react";
import GalleryContainer from "./components/Container";
import GalleryContext from "./context/GalleryContext";

// Everything needed to work within the gallery
// is used here just so when you need or want to use
// the gallery, you can just import this module.
function GalleryModule({ selectImageCallback }) {
    return (
        <>
            <GalleryContext.Provider selectImageCallback={selectImageCallback}>
                <aside
                    className="gallery-module"
                    style={{ position: "relative" }}
                >
                    <GalleryContainer />
                </aside>
            </GalleryContext.Provider>
        </>
    );
}

export default GalleryModule;
