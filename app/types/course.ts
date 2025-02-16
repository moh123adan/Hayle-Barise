import { ReactNode } from "react"

export interface Course {
    details: ReactNode
    courseLeader: any
    program: string
    id: number
    title: string
    image: string
    startDate: string
    duration: string
    studyMode: string
    weeklyStudy: string
    author: {
        name: string
        image: string
    }
    modules: string[]
    summary: string
    requirements: string
}

