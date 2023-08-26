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
import { HiArrowRight } from 'react-icons/hi';

type Props = {}

type DataType = {
    title: string;
    company: string;
    date: string;
    desc: string;
}

const data: DataType[] = [
    {
        title: 'Intensive Bootcamp',
        company: 'Code Id + MahakaX',
        date: '2023 - 2023',
        desc: 'I joined Intensive Bootcamp at CodeXAcademy for 3 months. lorem ipsum dolor sit amet ....'
    },
    {
        title: 'Graduated',
        company: 'Universitas Islam Indonesia',
        date: '2023',
        desc: 'I graduated from Universitas Islam Indonesia'
    },
    {
        title: 'In-Game Designer',
        company: 'Meraki Studios (freelance)',
        date: '2018 - 2021',
        desc: 'I Created Minecraft assets based on clients requested....'
    },
]

export default function Experiences({ }: Props) {
    return (
        <div className='flex flex-col md:flex-row gap-14 px-14 lg:px-0'>
            <div className='w-full md:w-1/5 text-end text-3xl font-extrabold'>
                <Typography variant="h3" className="font-extrabold">
                Events and <br /> Experiences
                </Typography>
                <Typography variant="paragraph">
                    These are my recent work <br /> experiences and several <br /> important moments
                </Typography>
                <motion.div
                    animate={{
                        x: [0, -10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                >
                    <HiArrowRight className="ml-auto mt-5" />
                </motion.div>
            </div>
            <article className="w-full md:w-4/5 mb-44 ">
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
                            <TimelineItem>
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
        </div>
    )
}