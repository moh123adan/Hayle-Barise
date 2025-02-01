import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-[#4c75ae]">
          Connect with Hayle Barise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-[#3bb995]">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#4c75ae]" />
                <div>
                  <h4 className="font-medium text-[#4c75ae]">ADDRESS</h4>
                  <p className="text-sm text-gray-600">
                    Hayle Barise Campus, Mogadishu, Somalia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-[#4c75ae]" />
                <div>
                  <h4 className="font-medium text-[#4c75ae]">EMAIL</h4>
                  <p className="text-sm text-gray-600">
                    info@haylebarise.edu.so
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-[#4c75ae]" />
                <div>
                  <h4 className="font-medium text-[#4c75ae]">PHONE</h4>
                  <p className="text-sm text-gray-600">+252 61 764 9609</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-[#4c75ae]" />
                <div>
                  <h4 className="font-medium text-[#4c75ae]">OFFICE HOURS</h4>
                  <p className="text-sm text-gray-600">
                    Saturday - Thursday: 8am - 4pm
                  </p>
                  <p className="text-sm text-gray-600">Friday : Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg lg:col-span-2">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-white/10 text-gray-800 placeholder-white/60 border-white/20"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white/10 text-gray-900 placeholder-white/60 border-white/20"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 text-white placeholder-white/60 border-white/20"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="bg-white/10 text-white placeholder-white/60 border-white/20"
                />
              </div>
              <Textarea
                placeholder="Your message..."
                className="bg-white/10 text-white placeholder-white/60 border-white/20"
                rows={4}
              />
              <Button className="w-full bg-[#3bb995] hover:bg-[#2fa884] text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map and Image */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254494.6863007991!2d45.1692146!3d2.0371383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc92d6!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1675234159947!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/heyle4.png"
              alt="Students at Hayle Barise Technical Development Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4c75ae]/80 to-[#3bb995]/80 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold text-center px-4">
                Shaping the Future of Skills in Somalia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
