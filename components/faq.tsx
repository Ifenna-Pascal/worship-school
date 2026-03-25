'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Who can join the program?',
    answer: 'Anyone with a passion for music! Whether you\'re a beginner or a professional, you\'re welcome to join.',
  },
  {
    question: 'Do I need to bring my own instrument?',
    answer: 'We recommend bringing your own instrument, but we do have some basic instruments available for use during sessions.',
  },
  {
    question: 'How much does it cost?',
    answer: 'The program is free for the first month. After that, it\'s $20/month to cover venue and workshop costs.',
  },
  {
    question: 'What genres of music are covered?',
    answer: 'We cover all genres! From classical to rock, jazz to electronic – our workshops are diverse.',
  },
  {
    question: 'Can I join mid-month?',
    answer: 'Absolutely! You can join at any time. We\'ll help you catch up with the current month\'s activities.',
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
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}