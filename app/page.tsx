'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [activeCard, setActiveCard] = useState(1)
  const [activeTab, setActiveTab] = useState<'all' | 'weddings' | 'parties' | 'decor'>('all')
  const [showCookie, setShowCookie] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
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
    if (!consent) setShowCookie(true)

    // Auto rotate the 3D cards every 4 seconds
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3)
    }, 4000)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-12')
          }
        })
      },
      { threshold: 0.1 }
    )

    const hiddenElements = document.querySelectorAll('.scroll-reveal')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('ttt_cookie_consent', 'accepted')
    setShowCookie(false)
  }

  // 3D Showcase Cards like Coffee reel
  const heroCards = [
    {
      id: 0,
      badge: 'Signature Decor',
      title: 'Bespoke Floral & Lighting',
      desc: 'Architectural florals and amber chandelier ambient glow.',
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 1,
      badge: 'Grand Weddings',
      title: 'Mandap & Royal Entries',
      desc: 'Breathtaking regal setups crafted for high-vibe celebrations.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      badge: 'Cocktails & Soirees',
      title: 'Stylized Bar & Entertainment',
      desc: 'Curated mixology lounges, artist coordination, and dance floors.',
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80',
    }
  ]

  const marqueePhotos = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=80',
  ]

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

  const faqs = [
    {
      q: 'How far in advance should we book Task to Toast?',
      a: 'For grand weddings and large celebrations, we recommend booking 3 to 6 months in advance. For private milestone birthdays and cocktail soirees, 3 to 4 weeks is usually ideal.'
    },
    {
      q: 'Do you manage destination events across India?',
      a: 'Yes! From palace celebrations in Rajasthan to beachfront weddings in Goa, our production and logistics team travels pan-India.'
    },
    {
      q: 'Can you work with our selected external vendors?',
      a: 'Absolutely. While we have our curated network of elite partners (catering, artists, sound), we are completely happy to collaborate with and coordinate any vendor you choose.'
    },
    {
      q: 'How do we get started?',
      a: 'Simply drop your details in the inquiry form below or hit the WhatsApp button. Our planning director will schedule a 1-on-1 vision call within 24 hours.'
    }
  ]

  const filteredGallery = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const waText = `Hi Task to Toast Events! I want to plan an event:%0A• Name: ${formData.name}%0A• Phone: ${formData.phone}%0A• Type: ${formData.eventType}%0A• Date: ${formData.date}%0A• Guests: ${formData.guestCount}%0A• Details: ${formData.message}`
    window.open(`https://wa.me/919999999999?text=${waText}`, '_blank')
    setIsSubmitted(true)
  }

  // Get style for 3D Arc display
  const getCardStyle = (index: number) => {
    const diff = (index - activeCard + 3) % 3
    if (diff === 0) {
      // Center card: active, front, fully scaled
      return 'translate-x-0 scale-105 z-20 opacity-100 rotate-0 shadow-[0_25px_50px_rgba(233,162,163,0.35)] border-[#e9a2a3]'
    } else if (diff === 1) {
      // Right card: angled back, smaller
      return 'translate-x-24 sm:translate-x-44 md:translate-x-56 scale-90 z-10 opacity-70 rotate-6 shadow-xl border-[#e9a2a3]/30 pointer-events-auto'
    } else {
      // Left card: angled back, smaller
      return '-translate-x-24 sm:-translate-x-44 md:-translate-x-56 scale-90 z-10 opacity-70 -rotate-6 shadow-xl border-[#e9a2a3]/30 pointer-events-auto'
    }
  }

  return (
    <div className="bg-[#400733] text-white selection:bg-[#e9a2a3] selection:text-[#400733] min-h-screen font-sans scroll-smooth overflow-x-hidden relative">
      
      {/* Dynamic Animated Ambient Orbs */}
      <div className="fixed top-[-100px] left-[-100px] w-[550px] h-[550px] bg-[#e9a2a3]/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-1000"></div>
      <div className="fixed bottom-[-150px] right-[-100px] w-[650px] h-[650px] bg-[#e9a2a3]/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse duration-700"></div>

      {/* Floating Glass Header */}
      <header className="sticky top-0 z-40 bg-[#400733]/85 backdrop-blur-xl border-b border-[#e9a2a3]/20 transition-all duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-3.5 h-3.5 rounded-full bg-[#e9a2a3] shadow-[0_0_15px_#e9a2a3] group-hover:scale-125 transition-transform duration-300 animate-ping"></span>
            <span className="text-xl sm:text-2xl font-black tracking-wider text-[#e9a2a3] uppercase transition-all duration-300 group-hover:tracking-widest">
              Task to Toast
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-rose-100/80">
            <a href="#showcase" className="hover:text-[#e9a2a3] transition-colors duration-200 hover:-translate-y-0.5 inline-block">Highlights</a>
            <a href="#about" className="hover:text-[#e9a2a3] transition-colors duration-200 hover:-translate-y-0.5 inline-block">About</a>
            <a href="#services" className="hover:text-[#e9a2a3] transition-colors duration-200 hover:-translate-y-0.5 inline-block">Services</a>
            <a href="#process" className="hover:text-[#e9a2a3] transition-colors duration-200 hover:-translate-y-0.5 inline-block">Process</a>
            <a href="#gallery" className="hover:text-[#e9a2a3] transition-colors duration-200 hover:-translate-y-0.5 inline-block">Portfolio</a>
            <a href="#faq" className="hover:text-[#e9a2a3] transition-colors duration-200 hover:-translate-y-0.5 inline-block">FAQ</a>
          </nav>
          <a 
            href="#contact" 
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full group shadow-[0_0_15px_rgba(233,162,163,0.3)] hover:shadow-[0_0_25px_rgba(233,162,163,0.6)] transition-shadow duration-300"
          >
            <span className="w-full h-full bg-gradient-to-br from-[#e9a2a3] to-[#801066] absolute"></span>
            <span className="relative px-6 py-2.5 transition-all ease-out bg-[#400733] rounded-full group-hover:bg-opacity-0 font-bold text-xs uppercase tracking-widest text-[#e9a2a3] group-hover:text-white">
              Plan Event
            </span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 text-center px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-[#e9a2a3]/10 text-[#e9a2a3] text-xs font-bold tracking-widest uppercase mb-6 border border-[#e9a2a3]/30 backdrop-blur-md shadow-sm animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#e9a2a3]"></span>
            Premier Luxury Event Curators
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
            From First Concept <br />
            <span className="text-[#e9a2a3] italic font-serif relative inline-block">
              To Final Toast
              <span className="absolute bottom-2 left-0 w-full h-[3px] bg-[#e9a2a3]/40 rounded-full"></span>
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-rose-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Curating bespoke weddings, milestone anniversaries, and high-vibe celebrations crafted to absolute perfection.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-[#e9a2a3] hover:bg-[#e38c8e] text-[#400733] font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(233,162,163,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(233,162,163,0.7)]"
            >
              Get Free Consultation
            </a>
            <a 
              href="#gallery" 
              className="w-full sm:w-auto border border-[#e9a2a3]/40 hover:border-[#e9a2a3] bg-white/5 hover:bg-[#e9a2a3]/10 text-white font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
            >
              Explore Portfolio
            </a>
          </div>
        </div>

        {/* 3D Arc Reel Showcase */}
        <div id="showcase" className="relative max-w-5xl mx-auto mt-16 h-[440px] flex items-center justify-center perspective-[1200px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {heroCards.map((card, index) => (
              <div
                key={card.id}
                onClick={() => setActiveCard(index)}
                className={`absolute w-72 sm:w-80 md:w-96 h-[390px] rounded-3xl overflow-hidden border transition-all duration-700 ease-out cursor-pointer flex flex-col justify-end p-6 bg-[#350529] ${getCardStyle(index)}`}
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.7] hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#400733] via-[#400733]/50 to-transparent"></div>
                
                <div className="relative z-10 text-left">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-[#e9a2a3] text-[#400733] mb-2 shadow-sm">
                    {card.badge}
                  </span>
                  <h3 className="text-xl font-black text-white leading-tight drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-xs text-rose-100/90 mt-1.5 leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selector Dots for 3D Slider */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {heroCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeCard === i ? 'w-8 bg-[#e9a2a3] shadow-[0_0_10px_#e9a2a3]' : 'w-2.5 bg-[#e9a2a3]/30 hover:bg-[#e9a2a3]/60'
              }`}
              aria-label={`Select card ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Infinite Auto-Scrolling Photo Marquee */}
      <section className="py-6 border-y border-[#e9a2a3]/20 bg-[#350529] overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex gap-6 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
          {[...marqueePhotos, ...marqueePhotos].map((photo, i) => (
            <div key={i} className="w-56 h-36 rounded-2xl overflow-hidden shrink-0 border border-[#e9a2a3]/30 shadow-md transform hover:scale-105 transition-transform duration-300">
              <img src={photo} alt="Event highlight" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section with Pop Effects */}
      <section className="bg-[#350529]/60 border-b border-[#e9a2a3]/20 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
          {[
            { num: '50+', label: 'Events Curated' },
            { num: '100%', label: 'On-Time Execution' },
            { num: '1,500+', label: 'Happy Guests' },
            { num: '5.0 ★', label: 'Client Reviews' }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#e9a2a3]/20">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#e9a2a3] drop-shadow-sm">{stat.num}</p>
              <p className="text-xs uppercase tracking-widest text-rose-200/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
          <span className="text-xs font-bold text-[#e9a2a3] uppercase tracking-widest">Why Task to Toast</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">Your Vision. Flawless Reality.</h2>
          <p className="mt-4 text-rose-200/70 text-base">You enjoy the spotlight; we run the entire stage behind the scenes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              title: 'Bespoke Concepts',
              desc: 'No repetitive templates. From bespoke floral palettes to custom ambient lighting setups, every corner reflects your story.'
            },
            {
              num: '02',
              title: 'Master Itinerary & Vendors',
              desc: 'Coordination across sound engineers, culinary masters, photographers, and performers under a minute-to-minute run sheet.'
            },
            {
              num: '03',
              title: 'Effortless Hosting',
              desc: 'From guest reception to final send-offs, our team provides discreet, polished, and warm five-star hospitality.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 bg-[#4d093d]/50 p-8 rounded-3xl border border-[#e9a2a3]/20 hover:border-[#e9a2a3] hover:shadow-[0_10px_35px_rgba(233,162,163,0.2)] hover:-translate-y-2 duration-300 backdrop-blur-sm group"
            >
              <span className="text-4xl font-black text-[#e9a2a3]/80 group-hover:text-[#e9a2a3] transition-colors block mb-4">{item.num}</span>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-rose-100/80 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-Step Animated Process Journey */}
      <section id="process" className="py-24 bg-[#350529] px-6 border-y border-[#e9a2a3]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
            <span className="text-xs font-bold text-[#e9a2a3] uppercase tracking-widest">How We Work</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">The Toast Journey</h2>
            <p className="mt-3 text-rose-200/70 text-sm">Four seamless steps from dream to execution</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your style, guest scale, venue choices, and budget.' },
              { step: '02', title: 'Moodboard & 3D', desc: 'Visualizing themes, florals, stages, and custom ambient lighting.' },
              { step: '03', title: 'Vendor Sync', desc: 'Locking caterers, sound, artists, and timing into a single itinerary.' },
              { step: '04', title: 'The Final Toast', desc: 'On-site execution so you can dance, mingle, and celebrate stress-free.' }
            ].map((p, idx) => (
              <div 
                key={idx}
                className="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 bg-[#400733] p-6 rounded-3xl border border-[#e9a2a3]/20 relative hover:-translate-y-2 hover:border-[#e9a2a3] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#e9a2a3]/20 text-[#e9a2a3] flex items-center justify-center font-black text-lg mb-4 border border-[#e9a2a3]/40">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-rose-200/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 bg-[#37062c] px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
            <span className="text-xs font-bold text-[#e9a2a3] uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">Curated Productions</h2>
            <p className="mt-4 text-rose-200/70 text-base">Comprehensive event curation tailored to any scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Weddings & Sangeet',
                tag: 'Full Production',
                desc: 'Breathtaking mandaps, dramatic grand entries, artist curation, and end-to-end guest hospitality.',
                img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop'
              },
              {
                title: 'Parties & Cocktails',
                tag: 'Turnkey Vibe',
                desc: 'Stylized cocktail soirees, milestone birthdays, personalized bar design, and dynamic DJ setups.',
                img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop'
              },
              {
                title: 'Corporate Galas',
                tag: 'Elite Standard',
                desc: 'Annual award nights, brand launches, and executive dinners designed with crisp precision.',
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop'
              }
            ].map((srv, idx) => (
              <div 
                key={idx}
                className="scroll-reveal opacity-0 translate-y-12 transition-all duration-700 bg-[#400733] rounded-3xl overflow-hidden border border-[#e9a2a3]/20 hover:border-[#e9a2a3]/60 hover:shadow-[0_15px_40px_rgba(233,162,163,0.25)] hover:-translate-y-2 flex flex-col group duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#400733] via-transparent to-transparent opacity-80"></div>
                  <span className="absolute top-4 right-4 bg-[#400733]/90 backdrop-blur-md text-[#e9a2a3] font-bold text-xs px-3 py-1.5 rounded-full border border-[#e9a2a3]/40">
                    {srv.tag}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{srv.title}</h3>
                    <p className="text-rose-100/80 text-sm leading-relaxed mb-6">{srv.desc}</p>
                  </div>
                  <a href="#contact" className="text-[#e9a2a3] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Inquire Package <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery with Filter Tabs */}
      <section id="gallery" className="py-28 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
          <span className="text-xs font-bold text-[#e9a2a3] uppercase tracking-widest">Visual Portfolio</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">Moments from the Archive</h2>
          <p className="mt-4 text-rose-200/70 text-base">Unfiltered glimpses of the toasts we have crafted</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(['all', 'weddings', 'parties', 'decor'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-[#e9a2a3] text-[#400733] shadow-[0_0_20px_#e9a2a3] scale-105' 
                    : 'bg-[#4d093d] text-rose-200 hover:bg-[#5e0d4c] hover:text-white'
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
              className="relative h-80 rounded-3xl overflow-hidden group bg-[#350529] border border-[#e9a2a3]/20 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#400733] via-[#400733]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-base font-bold text-[#e9a2a3] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animated FAQ Section */}
      <section id="faq" className="py-24 bg-[#350529] px-6 border-t border-[#e9a2a3]/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
            <span className="text-xs font-bold text-[#e9a2a3] uppercase tracking-widest">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#400733] rounded-2xl border border-[#e9a2a3]/20 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-sm text-white hover:text-[#e9a2a3] transition"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#e9a2a3] text-xl transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-xs text-rose-100/80 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="contact" className="py-28 bg-[#37062c] px-6 border-t border-[#e9a2a3]/20 relative">
        <div className="max-w-3xl mx-auto scroll-reveal opacity-0 translate-y-12 transition-all duration-700">
          <div className="text-center mb-14">
            <span className="text-[#e9a2a3] text-xs font-black uppercase tracking-widest">Connect With Our Team</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">Ready to Raise a Toast?</h2>
            <p className="text-rose-200/70 text-sm mt-3">Share your vision and our planning director will connect directly on WhatsApp.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-[#400733]/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#e9a2a3]/30 shadow-2xl space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2 tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rohini Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3.5 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3] transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2 tracking-wider">WhatsApp / Phone</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3.5 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3] transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2 tracking-wider">Event Type</label>
                <select 
                  value={formData.eventType}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e9a2a3] transition"
                >
                  <option value="Wedding">Wedding / Sangeet</option>
                  <option value="Birthday">Milestone Birthday</option>
                  <option value="Cocktail">Cocktail Soiree</option>
                  <option value="Corporate">Corporate Gala</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2 tracking-wider">Tentative Date</label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e9a2a3] transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2 tracking-wider">Est. Guests</label>
                <input 
                  type="text" 
                  placeholder="e.g. 150-200"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                  className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3.5 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-[#e9a2a3] mb-2 tracking-wider">Brief Vision</label>
              <textarea 
                rows={3} 
                placeholder="Tell us about the dream venue, vibe, or themes..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#350529] border border-[#e9a2a3]/30 rounded-xl px-4 py-3.5 text-white placeholder-rose-200/30 focus:outline-none focus:border-[#e9a2a3] transition"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#e9a2a3] hover:bg-[#e38c8e] text-[#400733] font-black uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(233,162,163,0.3)] hover:shadow-[0_0_35px_rgba(233,162,163,0.6)] hover:-translate-y-0.5"
            >
              Send Inquiry via WhatsApp
            </button>

            {isSubmitted && (
              <p className="text-center text-xs text-[#e9a2a3] font-semibold mt-2 animate-bounce">
                Redirecting to WhatsApp with your details...
              </p>
            )}
          </form>

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

      {/* Floating WhatsApp Action Button */}
      <a 
        href="https://wa.me/919999999999?text=Hi%20Task%20to%20Toast%2C%20I%20want%20to%20inquire%20about%20event%20planning."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
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
            We use cookies to analyze web traffic and deliver a personalized celebration planning journey.
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
              Decline
            </button>
          </div>
        </div>
      )}

    </div>
  )
}