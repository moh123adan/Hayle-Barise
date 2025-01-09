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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863874611636!2d-122.40082868468193!3d37.78928077975665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df00b755%3A0xa7d5f01e6f544c8e!2s500%20Terry%20Francine%20St%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2sin!4v1673016081901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={true} // Use boolean instead of string
              loading="lazy"
              className="border-0"
            ></iframe>
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
