import "@/css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProviders from "@/components/AppProviders/app.providers";
import "@/css/media.queries.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WWE 2K NextJs App",
    description:
        "Your thrusted source for WWE 2K news and updates about all universe related content.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <AppProviders>
                    <main className="app-page-wrapper">
                        <div className="boxed-content">{children}</div>
                    </main>
                </AppProviders>
            </body>
        </html>
    );
}
