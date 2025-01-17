import { useState, useEffect } from 'react'

export interface ImageSlide {
    src: string
    alt: string
}

export function useImageSlider(images: ImageSlide[], interval: number = 5000) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)
    }, [images.length, interval])

    return currentIndex
}

