"use client";
import { useEffect } from "react";

interface BodyDeletableClassProps {
    className: string;
}

export default function BodyDeletableClass({
    className,
}: BodyDeletableClassProps) {
    useEffect(() => {
        document.body.classList.add(...className.split(" "));
        return () => {
            document.body.classList.remove(...className.split(" "));
        };
    }, [className]);

    return null;
}
