"use client";
import { SessionProvider } from "next-auth/react";

export interface AuthSessionProps {
    children: React.ReactNode;
}

export default function AuthSession({ children }: AuthSessionProps) {
    return <SessionProvider>{children}</SessionProvider>;
}