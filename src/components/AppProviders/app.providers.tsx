"use client";
import { SnackbarProvider } from "notistack";

export interface AppProvidersProps {
    children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <SnackbarProvider
            autoHideDuration={4000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            className="notistack-notification-popup"
            maxSnack={3}
            dense={true}
        >
            {children}
        </SnackbarProvider>
    );
}
