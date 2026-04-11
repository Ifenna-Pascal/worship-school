import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from 'sonner'


export const metadata: Metadata = {
  title: 'Music Ministers Pray Network.',
  description: "For Music Ministers and any believer that desires to understand the concept of Worship and how to do Music God's way.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Toaster position='top-right' />
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}