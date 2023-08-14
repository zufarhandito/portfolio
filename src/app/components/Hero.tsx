'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SocialIcons from './SocialIcons'
import TypingAnimation from './TypingAnimation'
import Menus from './Menus'
import { HiChevronDown } from 'react-icons/hi'
import { Avatar, Typography } from '@material-tailwind/react'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [text, setText] = useState("zufarhandito")

    return (
        <header className='h-screen text-center justify-center flex items-center bg-gray-900'>
            <span>
                <Avatar
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image"
                    size="lg"
                />
                <Typography variant="h3" color="white" className="mt-4">
                    <TypingAnimation text={text} typingSpeed={100} />
                    <motion.span
                        animate={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    >
                        |
                    </motion.span>
                </Typography>
                <Typography color="white" className="mb-4 font-normal">
                    Software Engineer
                </Typography>
                <SocialIcons />
            </span>
            <button className='absolute bottom-5 flex flex-col items-center'>
                <Typography color="white" className="mb-1 font-normal">
                    <Link href="#about">Take a tour</Link>
                </Typography>
                <motion.span
                    animate={{
                        y: [0, -5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                    className='text-xl text-white'
                >
                    <HiChevronDown />
                </motion.span>
            </button>
        </header>
    )
}