import student1 from '../assets/student1.jpg';
import electricalInstallation from '../assets/electrical-installation.jpg';
import masonryTiling from '../assets/masonry-tiling.jpg';
import tailoring from '../assets/tailoring.jpg';
import hospitalityCatering from '../assets/hospitality-catering.jpg';
import mobileComputerRepair from '../assets/mobile-computer-repair.png';
import surveying from '../assets/surveying.jpg';
import { ReactNode } from "react"
import type { StaticImageData } from "next/image"
import { Course } from '../types/course'

export const courses: Course[] = [
    {
        id: 1,
        title: "Metal Work and Welding",
        startDate: "01.09.2025",
        duration: "20 months",
        program: "Diploma",
        weeklyStudy: "25 hours",
        summary:
            "Over the last few years, there has been quite a significant rise in the demand for Metal Processing and Welding professionals, with many construction and maintenance projects; from the creation of metal doors to car body fabrication, being outsourced to foreign competition due to lack of local skilled professionals.",
        modules: [
            "Introduction to Building and Construction",
            "Introduction to Electric Installation and Solar PV Energy",
            "Introduction to Workshop Technology (included health and safety and PPE)",
            "Maths, Physics and English",
            "Computer Aided Design",
            "Welding (arc, gas and spot welding)",
            "Mechanical Science",
            "Hydraulics",
        ],
        details:
            "In trainees' first year, they are familiarised with the fundamentals of mechanical engineering, building construction, electricity, workshop technology and welding alongside mathematics, physics and english, so that trainees are given the basic foundation to then proceed to specialise in their chosen course. In their second and final year we, as a centre, tailor our trainees' training program to align with their aims and aspirations. Students are guided through mastering material science, mechanical science and advanced topics such as arc and gas welding, hydraulics and vehicle body work to enhance our trainees' practical capabilities. During the training program, trainees will take part in a three-month work placement with the centre's partnered companies, these companies include the Coca Cola Company, Hamar Water Development Company, Dalsan Water and many more.",
        image: student1,
        studyMode: "Online",
        author: {
            name: "Author 1",
        },
        requirements: "Requirements for course 1",
        courseLeader: "Leader 1"
    },
    {
        id: 2,
        title: "Electrical Installation and Solar PV Technologies",
        startDate: "01.09.2025",
        duration: "20 months",
        program: "Diploma",
        weeklyStudy: "25 hours",
        summary:
            "Electricians and Solar PV technicians are at the forefront of the challenge for sustainable development; to design and install systems that are both efficient and affordable; to provide support to local businesses that have suffered from a stunt growth due to lack of skilled technicians.",
        modules: [
            "Introduction to Building and Construction",
            "Introduction to Electric Installation and Solar PV Energy",
            "Introduction to Workshop Technology (including health and safety and PPE)",
            "Maths, Physics and English",
            "Technical Drawing",
            "PV Systems",
            "Electric Machines and Generators",
            "Electronics",
            "Control Systems",
        ],
        details:
            "Year One, you will cover the fundamentals of electrical engineering, building construction, workshop technology and welding alongside mathematics, physics and English. Year Two, you will tailor your training program to fit your interests, you will learn to analyse and optimise on, off hybrid systems, and advanced topics such as electric machining, and residential and commercial installation that broaden and deepen your skills. During the training program, trainees will take part in a three-month work placement with the centre's partnered companies, these companies include Blue Sky Energy, Mogadishu Power, BECO, Target Group and many more. This course is accredited by the Ministry of Education, Culture and Higher Education, Ministry of Labour Social Affairs and Somali Chamber of Commerce Industry and it is the first step towards employment.",
        image: electricalInstallation,
        studyMode: "Offline",
        author: {
            name: "Author 2",
        },
        requirements: "Requirements for course 2",
        courseLeader: {
            name: "Ahmed Hashi Mohamed",
            description:
                "After working for more than 20 years in the manufacturing and shipping industries as an electrical engineer, Ahmed's years of experience will help with exercises that require planning and a lot of practical training.",
        },
    },
    {
        id: 3,
        title: "Masonry, Tiling and Interior Decoration",
        startDate: "01.09.2025",
        duration: "20 months",
        program: "Diploma",
        weeklyStudy: "25 hours",
        summary:
            "Since 2016, the construction industry has surpassed all other industries in becoming Somalia's largest and fastest-growing industry. With international investors investing millions into the construction of our country, there is now a great need for professional bricklayers, masons and tilers.",
        modules: [
            "Introduction to Building and Construction",
            "Introduction to Electric Installation and Solar PV Energy",
            "Introduction to Workshop Technology (including health and safety and PPE)",
            "Maths, Physics and English",
            "Computer-Aided Design",
            "Block Laying and Stone Setting",
            "Interior Decoration and Painting",
            "Tiles setting",
        ],
        details:
            "Like all our other courses, trainees will cover the fundamentals of Civil Engineering, Building Construction, Electricity, Workshop Technology and Welding alongside Mathematics, Physics and English in their first year. When trainees enter their second year, they'll begin to focus on learning material sciences to support block laying, tile and stone setting, and advanced topics such as interior decoration. Towards the end of the training program, trainees will take part in a three-month work placement with the centre's partnered companies, these companies include Jazeera Construction, Buruj Construction, Kulmiye Construction, Banadir Region Administration and many more.",
        image: masonryTiling,
        studyMode: "Online",
        author: {
            name: "Author 3",
        },
        requirements: "Requirements for course 3",
        courseLeader: {
            name: "Ahmed Nur",
            description:
                "Having studied Civil Engineering at Somalia International University, Ahmed Nur did not feel confident with his capacity and like many other young Somali graduates, he was unemployed. He enrolled at Hayle Barise as an opportunity to gain the necessary skills to differentiate himself from the crowd. After receiving his diploma from Hayle Barise he was given the role of junior instructor at HBTDC.",
        },
    },
    {
        id: 4,
        title: "Tailoring",
        startDate: "01.09.2025",
        duration: "6 months",
        program: "Certificate",
        weeklyStudy: "25 hours",
        summary:
            "As of recent years, there has been a surge in the import of foreign materials and clothing. With there being a lack of regulation in Somalia the textile industry is suffering heavily from issues like poor materials, inadequate skilled labour and dated equipment. The incursion of unregulated materials alongside the industry's lack of infrastructure has made the textile trade in Somalia one of its most volatile industries.",
        modules: [
            "Introduction to Sewing",
            "Basic Stitching",
            "Cutting & Stitching",
            "Design & Pattern Making",
            "Selection & Estimation of Cloth",
        ],
        details:
            "With Tailoring being one of our short courses, trainees will undergo practical intensive training, covering basic skills like treading a needle to producing ready-to-wear garments. This is an eight-month course. Trainees will receive direct training from our team at Hayle Barise at HBTDC for a total of six months, upon the completion of on-site training – trainees will receive a two-month internship placement at a local business to allow them to receive on-the-job training.",
        image: tailoring,
        studyMode: "Offline",
        author: {
            name: "Author 4",
        },
        requirements: "Requirements for course 4",
        courseLeader: "Leader 4"
    },
    {
        id: 5,
        title: "Hospitality and Catering",
        startDate: "01.09.2025",
        duration: "6 months",
        program: "Certificate",
        weeklyStudy: "25 hours",
        summary: "Our Hospitality and Catering course prepares students for careers in the growing hospitality industry.",
        modules: [],
        details:
            "This course provides hands-on training in various aspects of hospitality and catering, preparing students for diverse roles in the industry.",
        image: hospitalityCatering,
        studyMode: "Online",
        author: {
            name: "Author 5",
        },
        requirements: "Requirements for course 5",
        courseLeader: "Leader 5"
    },
    {
        id: 6,
        title: "Mobile and Computer Repair",
        startDate: "01.09.2025",
        duration: "6 months",
        program: "Certificate",
        weeklyStudy: "25 hours",
        summary: "Learn to diagnose and repair mobile devices and computers in this comprehensive course.",
        modules: [],
        details:
            "This course covers both hardware and software aspects of mobile and computer repair, equipping students with in-demand technical skills.",
        image: mobileComputerRepair,
        studyMode: "Offline",
        author: {
            name: "Author 6",
        },
        requirements: "Requirements for course 6",
        courseLeader: "Leader 6"
    },
    {
        id: 7,
        title: "Surveying",
        startDate: "01.09.2025",
        duration: "6 months",
        program: "Certificate",
        weeklyStudy: "25 hours",
        summary: "Gain practical skills in land surveying and mapping techniques.",
        modules: [],
        details:
            "This course provides training in modern surveying methods and technologies, preparing students for careers in construction, civil engineering, and land management.",
        image: surveying,
        studyMode: "Online",
        author: {
            name: "Author 7",
        },
        requirements: "Requirements for course 7",
        courseLeader: "Leader 7"
    },
];