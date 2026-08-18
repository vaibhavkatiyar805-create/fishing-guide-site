import Image from 'next/image'

export default function Trips() {
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

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Fishing Trips</h1>
          <p className="text-xl">Curated experiences for anglers of all skill levels</p>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={trip.image}
                  alt={trip.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{trip.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{trip.duration}</p>
                <p className="text-gray-700">{trip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Professional Guidance</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Expert fishing instruction</li>
                <li>✓ Local knowledge and secrets</li>
                <li>✓ Safety briefing</li>
                <li>✓ Technique coaching</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">Equipment & More</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ All fishing gear provided</li>
                <li>✓ Refreshments included</li>
                <li>✓ Photo opportunities</li>
                <li>✓ Flexible scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
