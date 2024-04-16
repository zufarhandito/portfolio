"use client"
import React from "react"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react"
import { motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi"
import { APP_TEXT } from "@/data/lang_id"
import { LanguageType } from "language"

type Props = {}

type DataType = {
  id: string
  title: string
  company: string
  date: string
  desc: LanguageType
}

const data: DataType[] = [
  {
    id: "bootcamp-codex",
    title: "Fullstack Javascript Bootcamp",
    company: "Code Id + MahakaX",
    date: "2023",
    desc: {
      id: "Memperkuat fundamental pemrograman dan berkolaborasi untuk menciptakan suatu final product menggunakan NestJS + NextJS",
      en: "Strengthen programming fundamental and colaborate with team to develop final product",
    },
  },
  {
    id: "frontend-annisa",
    title: "Frontend Developer",
    company: "Rumah Sakit ANNISA Tangerang",
    date: "2023 - present",
    desc: {
      id: "Berkolaborasi dengan tim untuk membangun SIMRS (Sistem Informasi Manajemen Rumah Sakit) and EMR (Electronic Medical Record) menggunakan NextJS dan ReactJS",
      en: "collaborate with team to develop fast & scalable app SIMRS (Sistem Informasi Manajemen Rumah Sakit) and EMR (Electronic Medical Record) using Nextjs & ReactJS.",
    },
  },
]

export default function Experiences({}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-14 px-14 lg:px-0">
      <div className="w-full md:w-1/4 text-end text-3xl font-extrabold">
        <Typography variant="h3" className="font-extrabold">
          {APP_TEXT.EXPERIENCE_TITLE}
        </Typography>
        <Typography variant="paragraph">
          {APP_TEXT.EXPERIENCE_DESCRIPTION}
        </Typography>
        <motion.div
          animate={{
            x: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <HiArrowRight className="ml-auto mt-5" />
        </motion.div>
      </div>
      <article className="w-full md:w-4/5 mb-44 ">
        <Timeline>
          {data.map((item, index) => (
            <motion.span
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,

                y: 0,
              }}
              transition={{
                delay: index * 0.3,
              }}
              viewport={{ once: true }}
              key={index}
            >
              <TimelineItem>
                {index === data.length - 1 ? "" : <TimelineConnector />}
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <div className="flex justify-between w-full">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="leading-none"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="small" color="gray" className="italic">
                      {item.date}
                    </Typography>
                  </div>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    variant="paragraph"
                    color="gray"
                    className="italic"
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    {item.desc.en}
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </motion.span>
          ))}
        </Timeline>
      </article>
    </div>
  )
}
