'use client'
import { motion } from 'framer-motion'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { HiLocationMarker } from 'react-icons/hi';

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='h-screen flex items-center justify-evenly'>
            <Card className='md:m-5 md:border-r-8 md:border-b-8 md:border-t md:border-l md:hover:border md:transition-all border-gray-900 rounded-none md:p-20 shadow-none text-center lg:text-left flex flex-col lg:flex-row items-center'>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    whileHover={{
                        rotate:10,
                    }}
                    viewport={{
                        once: true
                    }}
                    src="/about_photo.jpg"
                    className='md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-none md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] filter grayscale'
                />
                <CardBody>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="h5" color="blue-gray">
                            Hi! I am Zufar Abyan Handito
                        </Typography>
                        <Typography variant="small" className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                            <HiLocationMarker/> 
                            Yogyakarta, Indonesia
                        </Typography>
                        <Typography variant="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </motion.div>
                </CardBody>
                {/* shape decorations */}
                <div className='flex lg:flex-col gap-3'>
                    <div className='w-2 h-2 bg-gray-600 rounded-full'></div>
                    <div className='w-2 h-2 bg-gray-600 rounded-full'></div>
                    <div className='w-2 h-2 bg-gray-600 rounded-full'></div>
                </div>
                <div className='w-16 h-16 bg-gray-900 absolute bottom-0 right-0 md:inline-block rounded-tl-full hidden'></div>
            </Card>
        </div>

    )
}