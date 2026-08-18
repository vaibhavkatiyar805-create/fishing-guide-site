import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Expert Fishing Guides</h1>
          <p className="text-xl md:text-2xl mb-8">Professional guidance for unforgettable fishing adventures</p>
          <Link href="/trips" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            View Our Trips
          </Link>
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

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Reel In Your Next Adventure?</h2>
          <p className="text-lg mb-8">Get in touch to book your fishing trip today</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
