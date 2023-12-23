"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BootstrapIcon } from "../Icon/BootstrapIcon";

export default function GoBackButton() {
    const router = useRouter();

    return (
        <button className="btn btn-go-back-route" onClick={() => router.back()}>
            <BootstrapIcon icon="chevron-left" />
        </button>
    );
}
