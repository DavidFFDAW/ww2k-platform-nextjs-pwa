"use client";
import { SnackbarProvider, closeSnackbar } from "notistack";
import RegisterServiceWorker from "../ServiceWorker/RegisterServiceWorker";
import { BootstrapIcon } from "../Icon/BootstrapIcon";

export interface AppProvidersProps {
    children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
    return (
        <RegisterServiceWorker>
            <SnackbarProvider
                autoHideDuration={4000}
                preventDuplicate={true}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                className="notistack-notification-popup"
                maxSnack={3}
                dense={true}
                action={(snackbarId) => (
                    <button onClick={() => closeSnackbar(snackbarId)}>
                        <BootstrapIcon icon="x" />
                    </button>
                )}
            >
                {children}
            </SnackbarProvider>
        </RegisterServiceWorker>
    );
}
