import { UserPlus, Calendar, Mic, Star } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Register for the program and tell us about your musical interests.',
  },
  {
    icon: Calendar,
    title: 'Attend Sessions',
    description: 'Join weekly workshops and jam sessions with fellow musicians.',
  },
  {
    icon: Mic,
    title: 'Participate',
    description: 'Take part in open mic nights and collaborative performances.',
  },
  {
    icon: Star,
    title: 'Make Payments',
    description: 'Perform at our monthly showcase event and get noticed.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>

        {/* Desktop Stepper */}
        <div className="hidden md:flex justify-between items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-purple-200" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <step.icon className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}