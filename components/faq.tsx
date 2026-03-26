'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '⁠How long will the meeting last...?',
    answer: 'Every last Saturday for 1 year.',
  },
  {
    question: 'What Time and Duration?',
    answer: '8pm - 9:15pm',
  },
  {
    question: 'What is the purpose of the Worship School.',
    answer: 'Its a one year mentorship programe with Apostle DeJoe. For Music Ministers and any believer that desires to understand the concept of Worship beyond Music.',
  },
  {
    question:  'Is the Worship School Terminated after one year?',
    answer: 'No. new students and people are enrolled and past students enter to other assignments.',
  },
  {
    question: 'Is it a Church that is running the Worship School?',
    answer: 'No, The Worship School is powered by Music Ministers Prayer Network which Is under Apostle DeJoe Ministries.',
  },
  {
    question: 'How do I join the Worship School?',
    answer: 'You register online, providing the information needed. and a token of #10,000.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-md font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5  text-gray-500 transition-transform ${
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