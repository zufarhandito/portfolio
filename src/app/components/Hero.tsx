'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SocialIcons from './SocialIcons'
import TypingAnimation from './TypingAnimation'
import Menus from './Menus'
import { HiChevronDown } from 'react-icons/hi'
import { Avatar, Typography } from '@material-tailwind/react'

type Props = {}

export default function Hero({ }: Props) {
    const [text, setText] = useState("zufarhandito")

    return (
        <div className='h-screen text-center justify-center flex items-center'>
            <span>
                <Avatar
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image"
                    size="lg"
                />
                <Typography variant="h4" className="mt-4">
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
                <Typography color="gray" className="mb-4 font-normal">
                    Software Engineer
                </Typography>
                <SocialIcons />
            </span>
            <button className='absolute bottom-5 flex flex-col items-center'>
                <Typography color="gray" className="mb-1 font-normal">
                    Take a tour
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
                    className='text-xl text-gray-600'
                >
                    <HiChevronDown />
                </motion.span>
            </button>
        </div>
    )
}