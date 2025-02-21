"use client"

import { useState, useEffect } from "react"
import type { StaticImageData } from "next/image"

export interface ImageSlide {
    src: string | StaticImageData
    alt: string
}

export function useImageSlider(images: ImageSlide[], interval = 5000) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)
    }, [images.length, interval])

    return currentIndex
}

