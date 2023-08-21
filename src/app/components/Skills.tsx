'use client'
import { Tooltip, Typography } from '@material-tailwind/react'
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

type ItemsType = {
    name: string;
    icon: string;
}

const Items: ItemsType[] = [
    {
        name: "Node JS",
        icon: "/nodejs.png"
    },
    {
        name: "Nest JS",
        icon: "/nestjs.png"
    },
    {
        name: "Laravel",
        icon: "/laravel.png"
    },
    {
        name: "React JS",
        icon: "/reactjs.png"
    },
    {
        name: "Next JS",
        icon: "/next.svg"
    },
    {
        name: "Tailwindcss",
        icon: "/tailwindcss.png"
    },
    {
        name: "Postgresql",
        icon: "/postgresql.png"
    },
    {
        name: "Mysql",
        icon: "/mysql.png"
    },
    {
        name: "Mongodb",
        icon: "/mongodb.png"
    },
    {
        name: "Git",
        icon: "/git.png"
    },
    {
        name: "Docker",
        icon: "/docker.png"
    },
    {
        name: "Linux",
        icon: "/linux.png"
    },
]

const animateMotion = {
    initial: { opacity: 0, y: 20 },
    inView: { opacity: 1, y: 0 }
}

export default function Skills({ }: Props) {
    return (
        <div className='bg-red-200 h-screen'>anjay</div>
        // <div
        //     className='h-screen flex flex-col text-center items-center justify-center gap-7 px-14 max-w-7xl'>
        //     <motion.div
        //         variants={animateMotion}
        //         initial="initial"
        //         whileInView="inView"
        //         viewport={{ once: true }}
        //     >
        //         <Typography variant='h5'>
        //             Skills
        //         </Typography>
        //         <Typography variant="paragraph" >
        //             I use several tech stacks, including but not limited to
        //         </Typography>
        //     </motion.div>
        //     <div className='grid grid-cols-4 gap-11'>
        //         {
        //             Items.map((item, index) => (
        //                 <motion.span
        //                     variants={animateMotion}
        //                     initial="initial"
        //                     whileInView="inView"
        //                     transition={{
        //                         delay: index * 0.08
        //                     }}
        //                     viewport={{ once: true }}
        //                     key={index}>
        //                     <Tooltip content={item.name}>
        //                         <Image key={index} alt={'icon' + index} src={item.icon} width={40} height={40} className='filter grayscale hover:grayscale-0 transition-all duration-300' />
        //                     </Tooltip>
        //                 </motion.span>
        //             ))
        //         }
        //     </div>
        // </div>
    )
}