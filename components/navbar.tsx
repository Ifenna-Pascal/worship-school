'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from "@/app/images/prayer-2.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-800/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
           <Link href={'/'} className="shrink-0">
            <Image  
              src={logo}
              alt='logo'
              className='w-13.75 h-13.75 rounded-[55px]'
              width={55}
              height={55}
            />
          </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-gray-800 transition">
                Home
              </Link>
              <Link href="/register" className="text-gray-300 hover:text-gray-800 transition">
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-300 hover:text-gray-800 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Slide-in Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? 'visible bg-gray-800/60 backdrop-blur-sm' : 'invisible bg-transparent'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in Menu Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-4">
        <Link href={'/'} className="shrink-0 hidden">
            <Image  
              src={logo}
              alt='logo'
              className='w-13.75 h-13.75 rounded-[55px]'
              width={55}
              height={55}
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-purple-400 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="p-4">
          <div className="space-y-2">
            <Link
              href="/"
              className="block py-3 px-4 text-gray-900 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/register"
              className="block py-3 px-4 text-gray-900 rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Optional: Social Links in Menu */}
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="border-t border-gray-800 pt-4">
            <p className="text-xs text-gray-500 text-center">MusicMonthly © 2026</p>
          </div>
        </div>
      </div>
    </>
  )
}