'use client'
import React from 'react'
import { Typography } from "@material-tailwind/react";

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="w-screen bg-gray-900 p-5">
            <Typography color="white" variant="small" className="text-center font-normal">
                Build with ❤️ by zufarhandito
            </Typography>
        </footer>
    )
}