'use client'
import React from 'react'
import CardProject from './CardProject'
import { motion } from 'framer-motion'
import { Button, Card, Typography } from '@material-tailwind/react'
import Divider from './Divider'
import Title from '../Title'

type Props = {}

type DataType = {
    title: string;
    desc: string;
    category: string;
    isHot: boolean;
    image: string;
}

const data: DataType[] = [
    {
        title: "Sistem Pakar Ibu Hamil",
        desc: "Sistem Pakar Deteksi Dini Masalah Kesehatan pada Ibu Hamil Metode CF adalah sebuah sistem simulasi yang ditujukan kepada ibu hamil untuk monitoring penyakit yang dialaminya selama masa kehamilan",
        isHot: true,
        category: 'Expert System',
        image: "/oo.jpg"
    },
    {
        title: "Revamp CodeXAcademy",
        desc: "Revamp codexacademy bla bla bla..... bla bla bla...Revamp codexacademy bla bla bla..... bla bla bla...Revamp codexacademy bla bla bla..... bla bla bla...",
        category: 'Expert System',
        isHot: true,
        image: "/oo.jpg"
    },
    {
        title: "Sistem Pakar Ibu Hamil",
        desc: "Sistem Pakar Deteksi Dini Masalah Kesehatan pada Ibu Hamil Metode CF adalah sebuah sistem simulas kehamilan",
        category: 'Expert System',
        isHot: false,
        image: "/oo.jpg"
    },
    {
        title: "Sistem Pakar Ibu Hamil",
        desc: "Sistem Pakar elama masa kehamilan",
        category: 'Expert System',
        isHot: false,
        image: "/oo.jpg"
    },
]

export default function Projects({ }: Props) {
    return (
        <div className='text-center min-h-screen flex flex-col justify-center px-7'>
            <motion.div
                initial={{
                    y: -30,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true
                }}
            >
                <Title title='Highlighted Projects'/>
                <Divider />
            </motion.div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    data.map((item, index) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                delay: index * 0.2
                            }}
                            viewport={{ once: true }}
                            key={index}>
                            <CardProject title={item.title} desc={item.desc} image={item.image} category={item.category} isHot={item.isHot} />
                            {index === data.length - 1 ? "" : <Divider />}
                        </motion.div>
                    ))
                }
            </div>
                <Button className="rounded-none">
                    more projects
                </Button>
            <br />
        </div>
    )
}