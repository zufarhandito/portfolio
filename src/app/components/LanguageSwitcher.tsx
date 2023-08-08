'use client'
import { useState } from 'react'

type Props = {}

export default function LanguageSwitcher({ }: Props) {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const toggleLanguage = () => {
        setCurrentLanguage(prev => prev === 'en' ? 'id' : 'en')
    }

    return (
        <button onClick={toggleLanguage} className='relative'>
            {currentLanguage === 'en' ? 'ID' : 'EN'}
        </button>
    )
}