'use client'

import React from 'react'
import { IconType } from 'react-icons';
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail} from 'react-icons/bi'
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
        name: 'Gmail (zufarhandito@gmail.com)',
        icon: BiLogoGmail,
        url: 'https://mail.google.com/mail/u/0/?fs=1&to=zufarhandito@gmail.com&su=Your%20Subject&body=Your%20Messages&tf=cm'
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