import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from 'sonner'

// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

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
       <Toaster />
      <body className={`${poppins.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}