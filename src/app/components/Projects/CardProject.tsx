"use client"
import Image from "next/image"
import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react"
import Link from "next/link"
import { HiFire } from "react-icons/hi"
import { getDynamicRoutes } from "@/app/utils/helpers"
import { DataType } from "project"

export default function CardProject({ item }: { item: DataType }) {
  const { category, desc, image, isHot, title, id } = item

  const doRedirectToDetails = () => {
    console.log(getDynamicRoutes<number>("HOMEPAGE", id))
  }

  return (
    <Card className="flex-col shadow-none text-start rounded-none">
      <CardHeader shadow={false} className="rounded-none m-0" floated={false}>
        <Image
          width={300}
          height={100}
          src={image}
          alt="card-image"
          className="h-full w-full object-cover hover:scale-105 transition-transform"
          onClick={() => {
            doRedirectToDetails()
          }}
        />
      </CardHeader>
      <CardBody className="px-0">
        <Typography variant="small" color="gray" className="-mt-3">
          {category}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <Link href={""} className="flex items-center">
            {" "}
            {isHot ? <HiFire className="w-5 h-5 text-orange-900" /> : ""}{" "}
            {title}
          </Link>
        </Typography>
        <Typography color="gray" className="mb-8">
          <Link href={""}>{desc}</Link>
        </Typography>
      </CardBody>
    </Card>
  )
}
