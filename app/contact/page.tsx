import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <h2 className="mb-16 text-center text-4xl font-bold text-[#1C1F2E]">
          CONTACT US
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Visit the School */}
          <div className="bg-[#1C1F2E] p-12 text-white">
            <h3 className="mb-8 text-2xl font-medium text-[#6366F1]">
              Visit the School
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">ADDRESS</h4>
                <p className="text-sm">500 Terry Francine Street</p>
                <p className="text-sm">San Francisco, CA 94158</p>
              </div>
              <div>
                <h4 className="font-medium">INFORMATION</h4>
                <p className="text-sm">info@mysite.com</p>
              </div>
              <div>
                <h4 className="font-medium">E-MAIL US</h4>
                <p className="text-sm">info@mysite.com</p>
              </div>
              <div>
                <h4 className="font-medium">CALL OUR MAIN LINE</h4>
                <p className="text-sm">123-456-7890</p>
              </div>
              <div>
                <h4 className="font-medium">OFFICE HOURS</h4>
                <p className="text-sm">Monday - Friday: 9am - 5pm</p>
                <p className="text-sm">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px]">
            <Image
              src="/images/student9.png"
              alt="Students in school"
              fill
              className="object-cover"
            />
          </div>

          {/* Map */}
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="School location map"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-[#1C1F2E] p-12 text-white">
            <h3 className="mb-8 text-2xl font-medium text-[#6366F1]">
              You Can Also
              <br />
              Contact Us by Form
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent text-white placeholder-gray-400 border-gray-600"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent text-white placeholder-gray-400 border-gray-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent text-white placeholder-gray-400 border-gray-600"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="bg-transparent text-white placeholder-gray-400 border-gray-600"
                />
              </div>
              <Textarea
                placeholder="Type your message here..."
                className="bg-transparent text-white placeholder-gray-400 border-gray-600"
                rows={4}
              />
              <Button className="w-full bg-[#6366F1] hover:bg-[#5558DD]">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
