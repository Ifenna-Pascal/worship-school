'use client'

import { emailExists, generateRandomToken } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react'
import { toast } from 'sonner';

const BASE_URL = 'https://sheetdb.io/api/v1/z2q6jhtwj2yc3'
export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  })

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // ✅ Check if email exists
    const info = await emailExists(
      formData.email,
      BASE_URL 
    );

    if (info) {
      toast.error(info);
      setLoading(false);
      return;
    }

    // ✅ Submit data
    const res = await fetch(
      BASE_URL,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          id: Date.now(), 
          status: 'unPaid',
          date: new Date().toDateString(),
          time: new Date().toLocaleTimeString(),
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Submit failed: ${res.status}`);
    }

    toast.success('Message sent successfully');
    router.push('/success')
  } catch (err: any) {
    console.error(err);
    toast.error(err.message || 'Something went wrong!!');
  } finally {
    setLoading(false);
  }
};

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
          className="w-full px-4 py-2 h-12.5 border border-gray-300 rounded-md  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
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
          className="w-full px-4 py-2 h-12.5 border border-gray-300 rounded-md  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
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
          className="w-full px-4 py-2 h-12.5 border border-gray-300 rounded-md  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          WhatsApp Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 h-12.5 border border-gray-300 rounded-md  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="border-gray-500 bg-black/90 rounded-md mt-2 mb-10 border text-white py-4  w-60 transition"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}