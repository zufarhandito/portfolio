'use client'
import Image from 'next/image';
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Link from 'next/link';
import { HiFire } from 'react-icons/hi';

type Props = {
    title: string;
    desc: string;
    image: string;
    category: string;
    isHot: boolean;
}

export default function CardProject({ title, desc, image, category, isHot }: Props) {
    return (
        <Card className="flex-col shadow-none text-start rounded-none">
            <CardHeader
                shadow={false}
                className='rounded-none m-0'
                floated={false}
            >
                <Link href={""} >
                    <Image
                        width={300}
                        height={100}
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                </Link>
            </CardHeader>
            <CardBody className='px-0'>
                <Typography variant="small" color="gray" className="-mt-3">
                    {category}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    <Link href={""} className='flex items-center'>  {isHot? <HiFire className="w-5 h-5 text-orange-900" />:''} {title}</Link>
                </Typography>
                <Typography color="gray" className="mb-8">
                    <Link href={""}>{desc}</Link>
                </Typography>
            </CardBody>
        </Card>
    )
}