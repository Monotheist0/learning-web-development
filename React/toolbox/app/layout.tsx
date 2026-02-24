import "./globals.css";
import { Special_Elite } from "next/font/google";

const elite = Special_Elite({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-special-elite",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body
                className={`bg-[#0d0d0d] text-[#B9989F] antialiased min-h-screen flex flex-col ${elite.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
