'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
const aboutImage = "/about_photo.jpg"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='h-screen flex items-center relative max-w-7xl justify-evenly'>
            <Card className='shadow-none text-center md:text-left flex flex-col md:flex-row items-center px-10'>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    src="/about_photo.jpg"
                    className='md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px] filter grayscale'
                />
                <CardBody>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Hi! I am Zufar Abyan Handito
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </motion.div>
                </CardBody>
            </Card>
        </div>

    )
}