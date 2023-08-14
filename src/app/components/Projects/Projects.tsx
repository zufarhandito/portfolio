'use client'
import React from 'react'
import CardProject from './CardProject'
import { motion } from 'framer-motion'
import { Button, Card, Typography } from '@material-tailwind/react'
import Divider from './Divider'

type Props = {}

type DataType = {
    title: string;
    desc: string;
    category: string;
    image: string;
}

const data: DataType[] = [
    {
        title: "Sistem Pakar Ibu Hamil",
        desc: "Sistem Pakar Deteksi Dini Masalah Kesehatan pada Ibu Hamil Metode CF adalah sebuah sistem simulasi yang ditujukan kepada ibu hamil untuk monitoring penyakit yang dialaminya selama masa kehamilan",
        category: 'Expert System',
        image: "/oo.jpg"
    },
    {
        title: "Revamp CodeXAcademy",
        desc: "Revamp codexacademy bla bla bla..... bla bla bla...",
        category: 'Expert System',
        image: "/oo.jpg"
    },
    {
        title: "Sistem Pakar Ibu Hamil",
        desc: "Sistem Pakar Deteksi Dini Masalah Kesehatan pada Ibu Hamil Metode CF adalah sebuah sistem simulasi yang ditujukan kepada ibu hamil untuk monitoring penyakit yang dialaminya selama masa kehamilan",
        category: 'Expert System',
        image: "/oo.jpg"
    },
]

export default function Projects({ }: Props) {
    return (
        <div className=' text-center min-h-screen flex flex-col justify-center px-7'>
            <motion.span
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
                <Typography variant="h5" >
                    Highlighted Projects
                </Typography>
            </motion.span>
            <br />
            <Divider />
            <div>
                {
                    data.map((item, index) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            key={index}>
                            <CardProject title={item.title} desc={item.desc} image={item.image} category={item.category} />
                            {index === data.length - 1 ? "" : <Divider />}
                        </motion.span>
                    ))
                }
                <Button className="rounded-none shadow-none hover:shadow-none bg-gray-900 ">
                    more projects
                </Button>
            </div>
            <br />
        </div>
    )
}