'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { IconType } from 'react-icons';
import { BiLogoGithub, BiLogoWhatsapp, BiLogoLinkedin, BiLogoGmail, BiLogoDiscord } from 'react-icons/bi'
import { Tooltip, Typography } from '@material-tailwind/react';

type Props = {}

type IconListItem = {
    name: string,
    icon: IconType;
    url: string;
}

const iconList: IconListItem[] = [
    {
        name: 'Github',
        icon: BiLogoGithub,
        url: 'https://github.com/zufarhandito'
    },
    {
        name: 'LinkedIn',
        icon: BiLogoLinkedin,
        url: 'https://www.linkedin.com/in/zufar-handito-38537219b/'
    },
    {
        name: 'Discord',
        icon: BiLogoDiscord,
        url: 'https://wa.me/6281225740363'
    },
]

export default function SocialIcons({ }: Props) {
    return (
        <span className='flex gap-3 justify-center'>
            {
                iconList.map((icon, index) => (
                    <Tooltip key={index} content={icon.name}>
                        <Typography
                            as="a"
                            href={icon.url}
                            variant="lead"
                            color="light-blue"
                            textGradient
                        >
                            {React.createElement(icon.icon as IconType, { className: "w-6 h-6 text-white" })}
                        </Typography>
                    </Tooltip>
                ))
            }
        </span>
    )
}