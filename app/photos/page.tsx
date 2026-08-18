import Image from 'next/image'

export default function Photos() {
  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=600&fit=crop',
      alt: 'Fishing action shot',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1490519132918-c652a0eae0ff?w=600&h=600&fit=crop',
      alt: 'Scenic fishing location',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop',
      alt: 'Successful catch',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      alt: 'Water landscape',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      alt: 'Client testimonial',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      alt: 'Guide portrait',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="relative py-24 text-white bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=400&fit=crop)'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl">Moments from our fishing adventures</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
