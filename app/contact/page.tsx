'use client'

import { useState } from 'react'

export default function Contact() {
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
      {/* Header */}
      <section className="relative py-24 text-white bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl">Send us a message to book your fishing trip</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto px-4 py-16">
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

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Other Ways to Reach Us</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> your.email@example.com
          </p>
          <p className="text-gray-700">
            <strong>Best Response Time:</strong> Within 24 hours
          </p>
        </div>
      </section>
    </div>
  )
}
