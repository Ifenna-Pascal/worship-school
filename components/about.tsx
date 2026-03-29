import Image from 'next/image'
import aboutImage from '@/app/images/mmpn.jpeg'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-4 text-md">
              Music Ministers Prayers Network is a ministry under Apostle De-Joe's Ministries. 
            </p>
            <p className="text-gray-600 mb-4 text-md">
              Our assignment is to Awaken The End Time Music Ministers.
              The Worship School holds from the <b>April 18TH - June 20TH</b> with Apostle De-Joe. 
              For Music Ministers and any believer that desires to understand the concept of Worship and how to do Music God's way.

            </p>
            <p className="text-gray-600 text-md">
              Join this move and be positioned to what God is doing in this End time.
            </p>
          </div>
          <div className="relative h-80 md:h-98 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={aboutImage}
              alt="Musicians playing together"
              fill
              className="object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}