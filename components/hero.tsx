import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-image-with-overlay h-[60vh]">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <h1 className="text-4xl leading-10 md:text-4xl font-bold text-white mb-4">
           Music Ministers Prayer Network
          </h1>
          <p className="text-md md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover your rhythm, connect with fellow musicians, and showcase your talent every month.
          </p>
          <Link
            href="/register"
            className="inline-block bg-transparent text-white px-8 border-white  border py-4 rounded-lg text-lg font-medium  transition "
          >
            Join the Program
          </Link>
        </div>
      </div>
    </section>
  )
}