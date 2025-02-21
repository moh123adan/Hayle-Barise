import { ReactNode } from "react"
import type { StaticImageData } from "next/image"


export interface Course {
    details: ReactNode
    courseLeader: any
    program: string
    id: number
    title: string
    image: StaticImageData,
    startDate: string
    duration: string
    studyMode: string
    weeklyStudy: string
    author: {
        name: string
    }
    modules: string[]
    summary: string
    requirements: string
}

