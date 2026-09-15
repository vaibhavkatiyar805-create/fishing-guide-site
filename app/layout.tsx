import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Task to Toast Events | Bespoke Event Curators & Scenography',
  description: 'From first concept to final toast. Bespoke event planning, high-society weddings, and celebrations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#1a0215]">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Editorial Luxury Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />

        <style dangerouslySetInnerHTML={{ __html: `
          .font-cinzel { font-family: 'Cinzel', serif; }
          .font-garamond { font-family: 'Cormorant Garamond', serif; }
          .font-sans-luxury { font-family: 'Montserrat', sans-serif; }
          
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          
          /* Custom sleek scrollbar */
          ::-webkit-scrollbar {
            width: 5px;
          }
          ::-webkit-scrollbar-track {
            background: #1a0215;
          }
          ::-webkit-scrollbar-thumb {
            background: #e9a2a3;
            border-radius: 999px;
          }
        `}} />

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
      <body className="bg-[#1e0319] text-[#fbf6f0] m-0 p-0 antialiased font-sans-luxury selection:bg-[#e9a2a3] selection:text-[#1e0319]">
        {children}
      </body>
    </html>
  )
}