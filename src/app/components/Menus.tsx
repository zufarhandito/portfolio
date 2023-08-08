import Link from 'next/link'
import React from 'react'

type Props = {}

type ListType = {
    link: string,
    name: string
}
const list: ListType[] = [
    { link: '#about', name: 'About' },
    { link: '#skills', name: 'Skills' },
    { link: '#experiences', name: 'Experiences' },
    { link: '#projects', name: 'Projects' },
]

export default function Menus({ }: Props) {
    return (
        <div className='flex gap-12 text-sm mt-10'>
            {
                list.map((item, index) => (
                    <Link className='hover:translate-y-1 transition-transform' href={item.link} key={index}>{item.name}</Link>
                ))
            }
        </div>
    )
}