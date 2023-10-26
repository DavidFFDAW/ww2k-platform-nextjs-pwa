"use client";
import { SnackbarProvider, closeSnackbar } from "notistack";

export interface AppProvidersProps {
    children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <SnackbarProvider
            autoHideDuration={10000}
            preventDuplicate={true}
            // autoHideDuration={4000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            className="notistack-notification-popup"
            maxSnack={3}
            dense={true}
            action={(snackbarId) => (
                <button onClick={() => closeSnackbar(snackbarId)}>
                    Dismiss
                </button>
            )}
        >
            {children}
        </SnackbarProvider>
    );
}
