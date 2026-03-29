'use client'

import { useEffect } from 'react'
import { UserPlus, Calendar, Mic, Star, Wallet } from 'lucide-react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: (
      <span>
        Register <Link href={'/register'}><b>here</b></Link> to join the class.
      </span>
    ),
  },
  {
    icon: Star,
    title: 'Make Payments',
    description: 'To be able to have access to our different classes and training programs..',
  },
  {
    title: 'Confirm Payments',
    icon: Wallet,
    description: (
      <span>
        Send the receipt of your payment confirmation to the{' '}
        <a href="https://wa.me/2348032827933" target="_blank" className="ml-2 text-green-700">
          +234-806-931-5735
        </a>{' '}
        on WhatsApp for confirmation
      </span>
    ),
  },
  {
    icon: Calendar,
    title: 'Attend Sessions',
    description: 'Join monthly sessions with other students',
  },
  {
    icon: Mic,
    title: 'Participate',
    description: 'Collaborate with fellow students, ask questions, answer questions, be a part of our community.',
  },
]

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-up"
        >
          How It Works
        </h2>

        {/* Desktop */}
        <div className="hidden md:flex justify-between items-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 text-center relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-purple-200" />
              )}
              <div className="relative z-10">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(245, 201, 122, 0.15)',
                    border: '1.5px solid rgba(245, 201, 122, 0.4)',
                  }}
                >
                  <step.icon className="w-8 h-8" style={{ color: '#f5c97a' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(245, 201, 122, 0.15)',
                  border: '1.5px solid rgba(245, 201, 122, 0.4)',
                }}
              >
                <step.icon className="w-6 h-6" style={{ color: '#f1b33e' }} />
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