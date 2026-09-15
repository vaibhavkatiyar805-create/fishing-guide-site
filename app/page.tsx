'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const services = [
    {
      id: 1,
      name: 'Private Parties & Birthdays',
      duration: 'Bespoke Setup',
      description: 'Themed decor, dynamic lighting, music coordination, and seamless execution for intimate or large celebrations.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Weddings & Receptions',
      duration: 'Full Day & Multi-Day',
      description: 'Flawless day-of coordination, royal venue styling, guest hospitality, and vendor management from start to finish.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Corporate & Gala Dinners',
      duration: 'Turnkey Solutions',
      description: 'Sophisticated stage design, audio-visual excellence, curated dining arrangements, and professional hosting.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    },
  ]

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop', alt: 'Elegant Table Setting' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop', alt: 'Wedding Celebration' },
    { id: 3, src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=600&fit=crop', alt: 'Floral Decor Details' },
    { id: 4, src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=600&fit=crop', alt: 'Champagne Toast' },
    { id: 5, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop', alt: 'Outdoor Party Ambience' },
    { id: 6, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop', alt: 'Event Ceremony Setup' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&h=900&fit=crop)'}}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-rose-500/30 text-rose-200 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm border border-rose-400/30">
            Task to Toast Events
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Crafting Unforgettable Celebrations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            From seamless concept planning to the final celebratory toast — we curate memories that last forever.
          </p>
          <a href="#services" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 rounded-full text-lg font-semibold inline-block shadow-lg transition duration-200">
            Explore Services
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Why Celebrate With Us</h2>
        <p className="text-center text-gray-500 mb-12 text-lg">Every detail managed with precision, care, and passion</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-3 text-rose-600">Bespoke Design</h3>
            <p className="text-gray-600 leading-relaxed">Tailored themes, aesthetic florals, and unique styling tailored specifically to your personality and vibe.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-3 text-rose-600">End-to-End Planning</h3>
            <p className="text-gray-600 leading-relaxed">From booking elite vendors and artists to timeline execution, we take care of every single moving piece.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-3 text-rose-600">Stress-Free Magic</h3>
            <p className="text-gray-600 leading-relaxed">Relax and celebrate with your guests while our dedicated on-site team ensures everything runs flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Our Curated Experiences</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Customized event production for every milestone</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative h-64">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.name}</h3>
                    <p className="text-rose-600 font-semibold mb-3">{service.duration}</p>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="mt-14 p-8 sm:p-10 bg-white rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">The Task to Toast Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-rose-600 mb-3 text-lg">Planning & Coordination</h4>
                <ul className="text-gray-600 space-y-2.5">
                  <li>✓ Dedicated event director & personal coordinator</li>
                  <li>✓ Customized timelines, checklists & run sheets</li>
                  <li>✓ Professional vendor sourcing and negotiation</li>
                  <li>✓ On-site coordination & guest assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-rose-600 mb-3 text-lg">Aesthetic & Production</h4>
                <ul className="text-gray-600 space-y-2.5">
                  <li>✓ Custom mood boards & color palette design</li>
                  <li>✓ Curated decor, florals & ambient lighting</li>
                  <li>✓ Entertainment, sound & DJ coordination</li>
                  <li>✓ Seamless emergency backup planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Event Gallery</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Glimpses from celebrations we loved bringing to life</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Plan / Contact Section */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Plan Your Big Event?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us about your date, vision, and expected guests. Let's make it an effortless toast!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/task.to.toast.events/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-full text-base transition-colors shadow-sm"
            >
              DM on Instagram
            </a>
            <a 
              href="mailto:tasktotoastevents@gmail.com" 
              className="inline-block bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-semibold py-4 px-8 rounded-full text-base transition-colors"
            >
              Email Us
            </a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">We respond to all inquiries within 24 hours</p>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Task to Toast Events</h2>
          <p className="text-gray-400 text-sm">Celebrations Designed to Perfection</p>
        </div>
      </section>
    </div>
  )
}