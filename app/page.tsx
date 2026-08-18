'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const trips = [
    {
      id: 1,
      name: 'Half Day Adventure',
      duration: '4 Hours',
      description: 'Perfect for those with limited time. Explore nearby fishing spots and learn essential techniques.',
      image: 'https://images.unsplash.com/photo-1490519132918-c652a0eae0ff?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Full Day Expedition',
      duration: '8 Hours',
      description: 'A comprehensive fishing experience covering multiple locations and techniques for better results.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Multi-Day Adventure',
      duration: '2-3 Days',
      description: 'Immersive fishing experience with overnight stays at premium fishing locations.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    },
  ]

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=600&fit=crop', alt: 'Fishing action shot' },
    { id: 2, src: 'https://images.unsplash.com/photo-1490519132918-c652a0eae0ff?w=600&h=600&fit=crop', alt: 'Scenic fishing location' },
    { id: 3, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop', alt: 'Successful catch' },
    { id: 4, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop', alt: 'Water landscape' },
    { id: 5, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop', alt: 'Client testimonial' },
    { id: 6, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop', alt: 'Guide portrait' },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tripType: '',
    date: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', tripType: '', date: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Expert Fishing Guides</h1>
          <p className="text-xl md:text-2xl mb-8">Professional guidance for unforgettable fishing adventures</p>
          <a href="#trips" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block">
            Explore Our Trips
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Expert Knowledge</h3>
            <p className="text-gray-700">Years of experience on the water with deep knowledge of local fishing spots and techniques.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Professional Service</h3>
            <p className="text-gray-700">Dedicated to providing a professional, safe, and enjoyable experience for every client.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Customized Trips</h3>
            <p className="text-gray-700">Tailored fishing experiences for all skill levels, from beginners to experienced anglers.</p>
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section id="trips" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Fishing Trips</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Curated experiences for anglers of all skill levels</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{trip.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{trip.duration}</p>
                  <p className="text-gray-700">{trip.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-3">Professional Guidance</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Expert fishing instruction</li>
                  <li>✓ Local knowledge and secrets</li>
                  <li>✓ Safety briefing</li>
                  <li>✓ Technique coaching</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Equipment & More</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ All fishing gear provided</li>
                  <li>✓ Refreshments included</li>
                  <li>✓ Photo opportunities</li>
                  <li>✓ Flexible scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Photo Gallery</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Moments from our fishing adventures</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-8">Send us a message to book your fishing trip</p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">Thanks for reaching out! We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="tripType" className="block text-sm font-medium text-gray-700 mb-1">
                Interested Trip Type
              </label>
              <select
                id="tripType"
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a trip type</option>
                <option value="half-day">Half Day Adventure</option>
                <option value="full-day">Full Day Expedition</option>
                <option value="multi-day">Multi-Day Adventure</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your fishing experience and what you're looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 p-6 bg-white rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Other Ways to Reach Us</h3>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> your.email@example.com
            </p>
            <p className="text-gray-700">
              <strong>Best Response Time:</strong> Within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Reel In Your Next Adventure?</h2>
          <p className="text-lg mb-8">All the information you need is right here</p>
        </div>
      </section>
    </div>
  )
}
