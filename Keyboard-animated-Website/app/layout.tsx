import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Kami Techs - Wireless Keyboard",
    description: "Experience precision engineering with Kami Techs wireless keyboard. Mechanical switches, premium design, unmatched performance.",
    keywords: ["wireless keyboard", "mechanical keyboard", "Kami Techs", "premium keyboard", "gaming keyboard"],
    openGraph: {
        title: "Kami Techs - Wireless Keyboard",
        description: "Experience precision engineering with Kami Techs wireless keyboard.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
