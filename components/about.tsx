import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-4 text-lg">
              MusicMonthly is a community-driven program designed for musicians of all levels. 
              We provide a platform to learn, collaborate, and perform in a supportive environment.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Every month, we bring together vocalists, instrumentalists, and producers for workshops, 
              jam sessions, and open mic nights. Our mission is to nurture musical talent and build 
              lasting connections.
            </p>
            <p className="text-gray-600 text-lg">
              Whether you're a beginner or a pro, you'll find your place here. Join us and let your 
              music be heard!
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Musicians playing together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}