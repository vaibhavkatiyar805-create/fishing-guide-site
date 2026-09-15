'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  // Gallery Filter State
  const [activeTab, setActiveTab] = useState<'all' | 'weddings' | 'parties' | 'decor'>('all')

  // Cookie Banner State
  const [showCookie, setShowCookie] = useState(false)

  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    guestCount: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ttt_cookie_consent')
    if (!consent) {
      setShowCookie(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('ttt_cookie_consent', 'accepted')
    setShowCookie(false)
  }

  const galleryItems = [
    {
      id: 1,
      category: 'decor',
      title: 'Royal Table Scape & Florals',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      category: 'weddings',
      title: 'Grand Wedding Mandap & Entry',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      category: 'parties',
      title: 'Aesthetic Cocktail & Toast',
      src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      category: 'parties',
      title: 'Neon & Starlit Sangeet Night',
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Intimate Ceremony Moments',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 6,
      category: 'decor',
      title: 'Bespoke Ambient Lighting',
      src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&auto=format&fit=crop&q=80',
    },
  ]

  const filteredGallery = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp format message
    const waText = `Hi Task to Toast Events! I'd like to plan an event:%0A• Name: ${formData.name}%0A• Phone: ${formData.phone}%0A• Type: ${formData.eventType}%0A• Date: ${formData.date}%0A• Guests: ${formData.guestCount}%0A• Details: ${formData.message}`
    window.open(`https://wa.me/919999999999?text=${waText}`, '_blank')
    setIsSubmitted(true)
  }

  return (
    <div className="bg-[#400733] text-white selection:bg-[#e9a2a3] selection:text-[#400733] min-h-screen font-sans scroll-smooth">
      
      {/* Top Floating Glass Header */}
      <header className="sticky top-0 z-40 bg-[#400733]/85 backdrop-blur-md border-b border-[#e9a2a3]/20 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#e9a2a3] shadow-[0_0_12px_#e9a2a3]"></span>
            <span className="text-2xl font-black tracking-wider text-[#e9a2a3] uppercase drop-shadow-sm">
              Task to Toast
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-rose-100/80">
            <a href="#about" className="hover:text-[#e9a2a3] transition">About</a>
            <a href="#services" className="hover:text-[#e9a2a3] transition">Services</a>
            <a href="#gallery" className="hover:text-[#e9a2a3] transition">Portfolio</a>
            <a href="#contact" className="hover:text-[#e9a2a3] transition">Inquire</a>
          </nav>
          <a 
            href="#contact" 
            className="bg-[#e9a2a3] hover:bg-[#e38c8e] text-[#400733] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Plan Your Event
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#400733] via-[#400733]/70 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto py-24 z-10">
          <span className="inline-block py-1.5 px-5 rounded-full bg-[#e9a2a3]/15 text-[#e9a2a3] text-xs font-bold tracking-widest uppercase mb-6 border border-[#e9a2a3]/30 backdrop-blur-md">
            Premier Event Curators & Designers
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
            From First Concept <br />
            <span className="text-[#e9a2a3] italic font-serif">To Final Toast</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-rose-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Curating luxury weddings, landmark milestone celebrations, and high-vibe private soirees with effortless elegance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-[#e9a2a3] hover:bg-[#e38c8e] text-[#400733] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-xl shadow-[#e9a2a3]/20 transition-all duration-300 hover:-translate-y-1"
            >
              Get Free Estimate
            </a>
            <a 
              href="#gallery" 
              className="w-full sm:w-auto border border-[#e9a2a3]/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section className="border-y border-[#e9a2a3]/20 bg-[#350529]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#e9a2a3]">50+</p>
            <p className="text-xs uppercase tracking-wider text-rose-200/70 mt-1">Events Curated</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#e9a2a3]">100%</p>
            <p className="text-xs uppercase tracking-wider text-rose-200/70 mt-1">On-Time Execution</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#e9a2a3]">1000+</p>
            <p className="text-xs uppercase tracking-wider text-rose-200/70 mt-1">Smiles & Toasts</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#e9a2a3]">5.0 ★</p>
            <p className="text-xs uppercase tracking-wider text-rose-200/70 mt-1">Client Reviews</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Host With Us</h2>
          <p className="mt-3 text-rose-200/70 text-base">You enjoy the spotlight; we run the stage.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#4d093d] p-8 rounded-3xl border border-[#e9a2a3]/20 hover:border-[#e9a2a3]/50 transition-all duration-300 hover:-translate-y-2">
            <span className="text-3xl font-black text-[#e9a2a3] block mb-4">01</span>
            <h3 className="text-xl font-bold text-white mb-3">Signature Aesthetics</h3>
            <p className="text-rose-100/80 text-sm leading-relaxed">
              No cookie-cutter stages. Every floral arrangement, lighting hue, and table placement is tailored around your taste.
            </p>
          </div>
          <div className="bg-[#4d093d] p-8 rounded-3xl border border-[#e9a2a3]/20 hover:border-[#e9a2a3]/50 transition-all duration-300 hover:-translate-y-2">
            <span className="text-3xl font-black text-[#e9a2a3] block mb-4">02</span>
            <h3 className="text-xl font-bold text-white mb-3">Seamless Vendor Control</h3>
            <p className="text-rose-100/80 text-sm leading-relaxed">
              Catering, sound, artists, photography, and hospitality—we orchestrate every partner under a single tight itinerary.
            </p>
          </div>
          <div className="bg-[#4d093d] p-8 rounded-3xl border border-[#e9a2a3]/20 hover:border-[#e9a2a3]/50 transition-all duration-300 hover:-translate-y-2">
            <span className="text-3xl font-black text-[#e9a2a3] block mb-4">03</span>
            <h3 className="text-xl font-bold text-white mb-3">Unrivaled Hospitality</h3>
            <p className="text-rose-100/80 text-sm leading-relaxed">
              From the moment guests arrive to the final goodbyes, your guests will experience smooth, warm, and elite hosting.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#37062c] px-6 border-y border-[#e9a2a3]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Curated Packages</h2>
            <p className="mt-3 text-rose-200/70 text-base">Comprehensive event production tailored to your scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#400733] rounded-3xl overflow-hidden border border-[#e9a2a3]/20 flex flex-col group hover:shadow-2xl transition-all">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop" 
                  alt="Weddings" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <span className="absolute top-4 right-4 bg-[#400733]/90 text-[#e9a2a3] font-bold text-xs px-3 py-1.5 rounded-full border border-[#e9a2a3]/40">
                  Full Production
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Weddings & Sangeet</h3>
                  <p className="text-rose-100/80 text-sm leading-relaxed mb-6">
                    Grand entrances, regal mandap architecture, curated artist bookings, and bridal coordination.
                  </p>
                </div>
                <a href="#contact" className="text-[#e9a2a3] font-bold text-sm hover:underline">
                  Inquire Package &rarr;
                </a>
              </div>
            </div>

            <div className="bg-[#400733] rounded-3xl overflow-hidden border border-[#e9a2a3]/20 flex flex-col group hover:shadow-2xl transition-all">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop" 
                  alt="Private Parties" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <span className="absolute top-4 right-4 bg-[#400733]/90 text-[#e9a2a3] font-bold text-xs px-3 py-1.5 rounded-full border border-[#e9a2a3]/40">
                  Turnkey Vibe
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Milestones & Birthdays</h3>
                  <p className="text-rose-100/80 text-sm leading-relaxed mb-6">
                    Themed indoor/outdoor cocktail evenings, custom photo booths, dynamic sound, and lighting.
                  </p>
                </div>
                <a href="#contact" className="text-[#e9a2a3] font-bold text-sm hover:underline">
                  Inquire Package &rarr;
                </a>
              </div>
            </div>

            <div className="bg-[#400733] rounded-3xl overflow-hidden border border-[#e9a2a3]/20 flex flex-col group hover:shadow-2xl transition-all">
              <div className="h-60 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" 
                  alt="Corporate Gala" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <span className="absolute top-4 right-4 bg-[#400733]/90 text-[#e9a2a3] font-bold text-xs px-3 py-1.5 rounded-full border border-[#e9a2a3]/40">
                  Elite Standard
                </span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Corporate Galas & Dinners</h3>
                  <p className="text-rose-100/80 text-sm leading-relaxed mb-6">
                    Posh conferences, annual awards nights, and celebratory corporate toasts handled with precision.
                  </p>
                </div>
                <a href="#contact" className="text-[#e9a2a3] font-bold text-sm hover:underline">
                  Inquire Package &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery with Filter Tabs */}
      <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Event Showcase</h2>
          <p className="mt-3 text-rose-200/70 text-base">Unfiltered glimpses of the magic we have brought to life</p>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(['all', 'weddings', 'parties', 'decor'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#e9a2a3] text-[#400733] shadow-md shadow-[#e9a2a3]/30 scale-105' 
                    : 'bg-[#4d093d] text-rose-200 hover:bg-[#5b0c49]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="relative h-80 rounded-3xl overflow-hidden group bg-[#350529] border border-[#e9a2a3]/20 shadow-md"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#400733] via-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm font-bold text-[#e9a2a3]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Booking & Inquiries Form */}
      <section id="contact" className="py-24 bg-[#37062c] px-6 border-t border-[#e9a2a3]/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#e9a2a3] text-xs font-black uppercase tracking-widest">Let's Connect</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">Ready for the Toast?</h2>
            <p className="text-rose-200/70 text-sm mt-3">Share your vision and our planning director will reach out within 24 hours.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-[#400733] p-8 sm:p-12 rounded-3xl border border-[#e9a2a3]/30 shadow-2xl space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rohini Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2">WhatsApp / Phone</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2">Event Type</label>
                <select 
                  value={formData.eventType}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e9a2a3]"
                >
                  <option value="Wedding">Wedding / Sangeet</option>
                  <option value="Birthday">Milestone Birthday</option>
                  <option value="Cocktail">Cocktail / Private Party</option>
                  <option value="Corporate">Corporate Gala</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2">Tentative Date</label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e9a2a3]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2">Est. Guests</label>
                <input 
                  type="text" 
                  placeholder="e.g. 150-200"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2">Brief Vision / Requirements</label>
              <textarea 
                rows={3} 
                placeholder="Tell us about the venue, vibe, or special requests..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3]"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#e9a2a3] hover:bg-[#e38c8e] text-[#400733] font-black uppercase tracking-wider py-4 rounded-xl transition duration-300 shadow-xl hover:shadow-[#e9a2a3]/30"
            >
              Send Inquiry via WhatsApp
            </button>

            {isSubmitted && (
              <p className="text-center text-xs text-[#e9a2a3] font-semibold mt-2">
                Inquiry redirected to WhatsApp! We will connect with you shortly.
              </p>
            )}
          </form>

          {/* Social Follow */}
          <div className="mt-12 text-center">
            <a 
              href="https://www.instagram.com/task.to.toast.events/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#e9a2a3] hover:underline"
            >
              Follow Our Daily Stories on Instagram @task.to.toast.events &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-rose-200/50 border-t border-[#e9a2a3]/10 bg-[#350529]">
        <p>© 2026 Task to Toast Events. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a 
        href="https://wa.me/919999999999?text=Hi%20Task%20to%20Toast%2C%20I%20want%20to%20inquire%20about%20event%20planning."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Cookie Consent Banner */}
      {showCookie && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm bg-[#350529]/95 border border-[#e9a2a3]/40 p-5 rounded-2xl shadow-2xl backdrop-blur-md">
          <p className="text-xs text-rose-100/90 leading-relaxed mb-3">
            We use cookies to measure site visits and deliver an optimal celebration-planning experience.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={acceptCookies}
              className="bg-[#e9a2a3] text-[#400733] font-bold text-xs px-4 py-2 rounded-lg hover:bg-[#e38c8e] transition"
            >
              Accept All
            </button>
            <button 
              onClick={() => setShowCookie(false)}
              className="border border-[#e9a2a3]/30 text-rose-200 text-xs px-3 py-2 rounded-lg hover:bg-white/5 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}