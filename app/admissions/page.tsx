import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, ArrowRight } from "lucide-react";

export default function AdmissionsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1C1F2E]">
            JOIN THE TECH REVOLUTION
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Embark on your journey to become a tech innovator at Hayle Barise
            Technical Development Center. Our cutting-edge programs are designed
            to shape the future of technology in Somalia and beyond.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Virtual Open House */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-[#1C1F2E]">
              Virtual Open House
            </h3>
            <p className="mb-6 text-gray-600">
              Experience our state-of-the-art facilities and meet our expert
              instructors from the comfort of your home. Join our next virtual
              tour and Q&A session.
            </p>
            <Button className="w-full bg-[#3bb995] hover:bg-[#319d7e]">
              Register for Open House
            </Button>
          </div>

          {/* Application Process */}
          <div className="bg-[#3bb995] p-8 rounded-2xl text-white">
            <h3 className="mb-6 text-2xl font-semibold">Application Process</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="mr-2 font-bold">1.</span>
                <p className="text-sm">Submit online application</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">2.</span>
                <p className="text-sm">Complete technical assessment</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">3.</span>
                <p className="text-sm">Attend virtual interview</p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 font-bold">4.</span>
                <p className="text-sm">Receive admission decision</p>
              </li>
            </ul>
            <Button
              variant="outline"
              className="w-full text-gray-700 border-white hover:bg-white hover:text-[#1C1F2E]"
            >
              Start Your Application
            </Button>
          </div>

          {/* Contact Information */}
          <div className=" bg-[#4c75ae] p-8 rounded-2xl text-white">
            <h3 className="mb-6 text-2xl font-semibold">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <p className="text-sm">admissions@haylebarise.edu</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <p className="text-sm">+252 61 XXX XXXX</p>
              </div>
            </div>
            <p className="text-sm mb-6">
              Have questions? Our admissions team is here to guide you through
              every step of your journey to becoming a tech professional.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-white text-purple-600 hover:bg-gray-100"
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Featured Programs */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#1C1F2E] mb-6">
            Featured Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Electerical Engineering", "Civil Engineering", "Mechanical Engineering"].map(
              (program) => (
                <div
                  key={program}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-lg font-medium text-[#1C1F2E] mb-2">
                    {program}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Discover our cutting-edge curriculum designed to meet
                    industry demands.
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </Button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Full-width Image */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/school1.png"
            alt="Students collaborating on a tech project at Hayle Barise"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Shape the Future of Skills in Somalia
              </h3>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
