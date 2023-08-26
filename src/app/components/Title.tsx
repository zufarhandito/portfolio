'use client'
import { Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {
    title: string
    desc?: string
}

export default function Title({title,desc}: Props) {
  return (
    <div>
    <Typography variant="h5" className="mt-14">
        {title}
    </Typography>
    <Typography variant="paragraph" >
        {desc}
    </Typography>
    <br />
    </div>
  )
}