'use client'
import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';

type Props = {}

type DataType = {
    title: string;
    company: string;
    date: string;
    desc: string;
}

const data: DataType[] = [
    {
        title: 'In-Game Designer',
        company: 'Meraki Studios',
        date: '2018 - 2021',
        desc: 'I Created Minecraft assets based on clients requested....'
    },
    {
        title: 'Intensive Bootcamp',
        company: 'Code Id + MahakaX',
        date: '2023 - 2023',
        desc: 'I joined Intensive Bootcamp at CodeXAcademy for 3 months. lorem ipsum dolor sit amet ....'
    },
]

export default function Experiences({ }: Props) {
    return (
        <article className="max-w-7xl px-20 min-h-screen flex flex-col items-center justify-center ">
            <Typography variant="h5" className="my-7 text-center">
                Experiences
            </Typography>
            <Timeline>
                {
                    data.map((item, index) => (
                        <motion.span
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: index * 0.3
                            }}
                            viewport={{ once: true }}
                            key={index}>
                            <TimelineItem key={index}>
                                {(index === data.length - 1 ? '' : <TimelineConnector />)}
                                <TimelineHeader className="h-3">
                                    <TimelineIcon />
                                    <div className='flex justify-between w-full'>
                                        <Typography variant="h6" color="blue-gray" className="leading-none">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="small" color="gray" className="italic" >
                                            {item.date}
                                        </Typography>
                                    </div>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography variant="paragraph" color="gray" className="italic" >
                                        {item.company}
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                        {item.desc}
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </motion.span>
                    ))
                }
            </Timeline>
        </article>
    )
}