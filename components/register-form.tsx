'use client'

import { emailExists, generateRandomToken } from '@/utils/functions';
import { SyntheticEvent, useState } from 'react'
import { toast } from 'sonner';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const info = await emailExists(formData.email, 'https://sheetdb.io/api/v1/taxlfm0bcnac1' as string).catch(() => {
        setLoading(false);
        return  toast.error('something went wrong!!');
      });
      if (info) {
        toast.error(info);
        setLoading(false);
        return;
      }
        //     const token = generateRandomToken()
        // fetch('https://sheetdb.io/api/v1/taxlfm0bcnac1' as string, {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   method: "POST",
        //   body: JSON.stringify({
        //     ...formData,
        //     accessToken: token,
        //     id: "TIMESTAMP",
        //     status: 'unPaid',
        //     date: new Date().toDateString(),
        //     time: new Date().toLocaleTimeString(),
        //   }),
        // })
        // .then(() => {
        //   toast.success("Message sent successfully");
        //   setSubmitted(true)
        // })
        //  .catch(() => {
        //     setLoading(false);
        //     toast.error("An error occurred. Please try again");
        //   })
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-green-50  text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-8">Thank You!</h3>
        <p className="text-green-600">Your registration has been received. We'll be in touch soon!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white py-8 px-4  shadow-lg">
      <div className="mb-8">
        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 h-12.5 border border-gray-300  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>

        <div className="mb-8">
        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
          Last Name *
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 h-12.5 border border-gray-300  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>


      <div className="mb-8">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 h-12.5 border border-gray-300  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 h-12.5 border border-gray-300  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={4}
          value={formData.comments}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="border-gray-500 mt-2 mb-10 border text-gray-900 bg-transparent py-4  w-60 transition"
      >
        Submit
      </button>
    </form>
  )
}