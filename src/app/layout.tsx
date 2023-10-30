import "@/css/globals.css";
import type { Metadata } from "next";
import AppProviders from "@/components/AppProviders/app.providers";
import "@/css/media.queries.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

export const metadata: Metadata = {
    title: "WWE 2k Manager",
    description:
        "Your reliable source for WWE 2K news and updates about all universe related content.",
    themeColor: "#2A4494",
    authors: [
        { name: 'David Fernández Flores', url: 'https://github.com/DavidFFDAW' }
    ],
    colorScheme: "dark light",
    category: "Entertainment & Sports",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className="app-body nextjs-app react-router-wrapper wwe2k-app-container">
                <AppProviders>
                    <main className="app-page-wrapper">
                        <div className="boxed-content">{children}</div>
                    </main>
                </AppProviders>
            </body>
        </html>
    );
}
