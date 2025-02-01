import type { Course } from "../types/course"

export const courses: Course[] = [
    {
        id: 1,
        title: "Machanical Engineering",
        image: "/images/machanical.png",
        startDate: "2025-03-01",
        duration: "12 months",
        studyMode: "Diploma",
        weeklyStudy: "2 hours",
        author: {
            name: "",
            image: "/placeholder.svg?height=80&width=80",
        },
        modules: [
            "Introduction to Mechanical Engineering",
            "Thermodynamics",
            "Fluid Mechanics",
            "Machine Design",
            "Materials Science",
            "Engineering Mathematics",
        ],
        summary: "This course provides a comprehensive introduction to mechanical engineering principles and practices.",
        requirements: "High school diploma or equivalent. Basic knowledge of mathematics and physics.",
    },
    {
        id: 2,
        title: "Mason, Stone-Setting & Tiling",
        image: "/images/mason.png",
        startDate: "2025-05-01",
        duration: "2 Years",
        studyMode: "Diploma",
        weeklyStudy: "25 hours",
        author: {
            name: "",
            image: "/placeholder.svg?height=80&width=80",
        },
        modules: [
            "Introduction to Building and Construction",
            "Tiles setting",
            "Interior Decoration and Painting",
            "Computer Aided Design",
            "Maths, Physics and English",
            "Introduction to Workshop Technology (included health and safety and PPE)",
        ],
        summary: "Learn the art and science of masonry, stone-setting, and tiling in this comprehensive course.",
        requirements: "No prior experience required. Must be physically fit for practical work.",
    },
    {
        id: 3,
        title: "Electrical Installation & Solar PV",
        image: "/images/electerical1.png",
        startDate: "2025-01-26",
        duration: "2 Years",
        studyMode: "Diploma",
        weeklyStudy: "25 hours",
        author: {
            name: "Ahmed Hashi Mohamed",
            image: "/images/teacher2.png",
        },
        modules: [
            "Fundamentals of Electricity",
            "Electrical Wiring and Installation",
            "Solar PV Systems",
            "Energy Storage and Management",
            "Safety Protocols and Regulations",
            "Project Planning and Execution",
        ],
        summary: "Gain expertise in electrical installation with a focus on solar photovoltaic systems.",
        requirements: "Basic understanding of mathematics and physics. No prior electrical experience required.",
    },
    {
        id: 4,
        title: "Xcd",
        image: "/images/xcd.png",
        startDate: "2025-01-26",
        duration: "2 Years",
        studyMode: "Diploma",
        weeklyStudy: "25 hours",
        author: {
            name: "Hassan Omar Mohamed",
            image: "/images/teacher1.png",
        },
        modules: [
            "cdv",
            "cacdv",
            "advdv",
        ],
        summary: "davd",
        requirements: "adcdvd.",
    },
]





