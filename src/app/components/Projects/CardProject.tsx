'use client'
import Image from 'next/image';
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import Link from 'next/link';

type Props = {
    title: string;
    desc: string;
    image: string;
    category: string;
}

export default function CardProject({ title, desc, image, category }: Props) {
    return (
        <Card className="flex-col md:flex-row shadow-none text-start rounded-none ">
            <CardHeader
                shadow={false}
                className='rounded-none pl-2'
                floated={false}
            >
                <Link href={""}>
                    <Image
                        width={300}
                        height={100}
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                </Link>
            </CardHeader>
            <CardBody>
                <Typography variant="small" color="gray" className="-mt-3">
                    {category}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    <Link href={""}>{title}</Link>
                </Typography>
                <Typography color="gray" className="mb-8">
                    <Link href={""}>{desc}</Link>
                </Typography>
            </CardBody>
        </Card>
    )
}