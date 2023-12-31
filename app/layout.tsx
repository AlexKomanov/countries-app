import './globals.css'
import type {Metadata} from 'next'
import {Nunito_Sans} from 'next/font/google'
import Image from "next/image";
import countriesImage from "../public/countries.png";

const nunitoSuns = Nunito_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Countries App',
    description: 'Generated by Alex Komanov',
}

export default function RootLayout({
children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={nunitoSuns.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
            <nav className="w-full bg-white h-16 flex items-center justify-center">
                <section className="container flex items-center gap-3">
                    <Image src={countriesImage} alt="Countries Image" width={48} height={48}/>
                    <h1 className="font-bold text-2xl">Countries APP</h1>
                </section>
            </nav>
            {children}
        </main>
        </body>
        </html>
    )
}
