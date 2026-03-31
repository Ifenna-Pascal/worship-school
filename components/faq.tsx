'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const faqs = [
  {
    question: 'How long will the meeting last...?',
    answer: 'Every Saturday, starting from April 18TH - June 20TH, 2026',
  },
  {
    question: 'What Time and Duration?',
    answer: 'he Time is 10:00am - 11:30am prompt, for the period of 2 months',
  },
  {
    question: 'What is the purpose of the Worship School.',
    answer: "It's a 2 months mentorship programme with Apostle DeJoe, for Music Ministers and any believer that desires to understand the concept of Worship beyond Music.",
  },
  {
    question: 'Is the Worship School Terminated after the duration?',
    answer: 'No! New people / students are enrolled, while past students enter to other assignments.',
  },
  {
    question: 'Is it a Church that is running the Worship School?',
    answer: "No! The Worship School is powered by Music Ministers Prayer Network (MMPN), which is under Apostle DeJoe Ministries.",
  },
  {
    question: 'How do I join the Worship School?',
    answer: "You register online, providing your personal data, and other information needed, with a token of ₦10,000 (10 USD)",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-md font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}