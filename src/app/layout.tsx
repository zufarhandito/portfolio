import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({
  // weight: '400',
  // style: ['normal'],
  subsets: ['latin'],
  // display: 'swap',
})

export const metadata: Metadata = {
  title: "zufarhandito",
  description: "zufarhandito's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
