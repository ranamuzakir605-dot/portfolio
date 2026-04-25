import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

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
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300">
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <ThemeToggle />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
