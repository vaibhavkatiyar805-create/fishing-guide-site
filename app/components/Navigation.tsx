'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Task to Toast Events
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex gap-8 flex-col md:flex-row absolute md:static top-16 md:top-0 left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}>
          <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Home</Link></li>
          <li><Link href="/trips" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Trips</Link></li>
          <li><Link href="/photos" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Gallery</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
