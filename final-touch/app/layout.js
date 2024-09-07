// "use client"
import { Outfit } from "next/font/google";
import "./globals.css";

import { noSSR } from "next/dynamic";
const inter = Outfit({ subsets: ["latin"] });


export const metadata = {
    title: "Mahata Purba Para Free Primary School",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return ( <
        html lang = "ben" >
        <
        body className = { inter.className } > { children } < /body> < /
        html >
    );
}