import { useEffect, useState } from 'react'

type Props = {
    text: string,
    typingSpeed: number
}

export default function TypingAnimation({ text, typingSpeed }: Props) {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setTypedText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, text, typingSpeed]);

    return (
        <span>{typedText}</span>
    )
}