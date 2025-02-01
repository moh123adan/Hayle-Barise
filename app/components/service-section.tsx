import { Award, PenToolIcon as Tool, Users, MessageCircle } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Certificate And Diploma Training",
      icon: Award,
      color: "bg-violet-500",
      borderColor: "border-violet-100",
    },
    {
      title: "Maintenance Training",
      icon: Tool,
      color: "bg-emerald-500",
      borderColor: "border-emerald-100",
    },
    {
      title: "Training Of Trainers",
      icon: Users,
      color: "bg-orange-500",
      borderColor: "border-orange-100",
    },
    {
      title: "Consultancy Service",
      icon: MessageCircle,
      color: "bg-blue-500",
      borderColor: "border-blue-100",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-emerald-500 font-medium mb-4 tracking-wide">OUR PROGRAMS</h3>
        <h2 className="text-4xl font-bold text-slate-900">What We Offer</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-8 bg-white rounded-[2.5rem] border ${service.borderColor} hover:shadow-lg transition-shadow duration-300 group`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`${service.color} p-4 rounded-full mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 max-w-[200px]">{service.title}</h3>
            </div>
            {/* Curved shape decoration */}
            <div
              className={`absolute inset-0 border ${service.borderColor} rounded-[2.5rem] -z-10 transform transition-transform duration-300 group-hover:scale-105`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

