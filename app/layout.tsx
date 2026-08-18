import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Professional Fishing Guide',
  description: 'Expert fishing guide services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
