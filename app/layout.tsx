import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Task to Toast Events | Luxury Event Curators',
  description: 'From first concept to final toast. Bespoke event planning, weddings, and celebrations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DKNHWKK40E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DKNHWKK40E');
            `,
          }}
        />
      </head>
      <body className="bg-[#400733] text-white m-0 p-0 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}