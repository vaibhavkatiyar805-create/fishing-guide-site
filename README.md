# Professional Fishing Guide Website

A modern, professional website for a fishing guide business built with Next.js and Tailwind CSS.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **4 Main Pages**:
  - Home - Hero image with CTA
  - Trips - Detailed trip offerings
  - Gallery - Photo gallery of adventures
  - Contact - Static contact form

- **Professional Styling** - Clean, modern design with blue theme
- **Fast Performance** - Built with Next.js for optimal speed
- **Easy Customization** - Update content directly in the pages

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Content
- Edit pages in `/app` directory
- Modify text, images, and colors as needed

### Add Your Photos
- Replace image URLs with your own
- Images from `/public` folder or external URLs work great

### Update Contact Email
- In `/app/contact/page.tsx`, update the email address displayed

### Change Business Name
- Update "Fishing Guide" text in `/app/components/Navigation.tsx`
- Update metadata in `/app/layout.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Connect your domain
4. Deploy!

### Connect Your Domain

1. Update nameservers at your domain registrar to point to Vercel
2. Add domain in Vercel project settings
3. SSL certificate added automatically

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
fishing-guide-site/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── contact/
│   ├── trips/
│   ├── photos/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
└── tailwind.config.ts
```

---

Built with Next.js 16 & Tailwind CSS
