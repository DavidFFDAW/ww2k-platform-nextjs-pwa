"use client";
import { SessionProvider } from "next-auth/react";

export interface AppProvidersProps {
    children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
    return <SessionProvider>{children}</SessionProvider>;
}