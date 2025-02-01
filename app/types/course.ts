export interface Course {
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

