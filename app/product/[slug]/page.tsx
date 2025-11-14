'use client'

import { Navigation } from '@/components/navigation'
import { FloatingParticles } from '@/components/floating-particles'
import { CookieBanner } from '@/components/cookie-banner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 4l-6 6 6 6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 4l6 6-6 6" />
  </svg>
)

const productData: Record<string, any> = {
  'levoit-core-300': {
    name: 'Levoit Core 300',
    price: '$99.99',
    rating: 4.7,
    reviews: 45000,
    category: 'Air Purifiers',
    description:
      'The Levoit Core 300 is a compact yet powerful air purifier designed specifically with pet owners in mind. Its True HEPA filter captures 99.97% of airborne particles as small as 0.3 microns, including pet dander, dust, pollen, and smoke.',
    features: [
      'True HEPA Filter captures 99.97% of particles',
      'Pet Allergy Filter specifically designed for pet homes',
      'Whisper-quiet operation at 24dB',
      'Covers up to 215 sq ft in 12.5 minutes',
      'Energy-efficient and CARB certified',
      '3 fan speeds plus sleep mode',
      'Compact design fits any room',
      'Filter replacement indicator',
    ],
    specifications: {
      Coverage: '215 sq ft',
      'Noise Level': '24-50 dB',
      'Filter Type': 'True HEPA + Activated Carbon',
      Dimensions: '8.7" x 8.7" x 14.2"',
      Weight: '7.5 lbs',
      'Power Consumption': '10-23W',
      'CADR Rating': '135 CFM',
    },
    images: [
      'https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_SY879_.jpg',
      '/levoit-air-purifier-front-view.jpg',
      '/levoit-air-purifier-side-view.jpg',
      '/levoit-air-purifier-control-panel.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/LEVOIT-Purifier-Home-Allergies-Pets/dp/B07VVK39F7',
    customerReviews: [
      {
        name: 'Emily R.',
        rating: 5,
        date: 'January 2025',
        comment:
          'Game changer for our home with two cats! The air smells fresher and my allergies have improved significantly.',
      },
      {
        name: 'Michael T.',
        rating: 5,
        date: 'December 2024',
        comment:
          'So quiet I forget it\'s running. Perfect size for my bedroom and really makes a difference with pet odors.',
      },
      {
        name: 'Lisa K.',
        rating: 4,
        date: 'December 2024',
        comment:
          'Works great! Only downside is filter replacements can add up, but worth it for the clean air.',
      },
    ],
  },
  'coway-airmega-200m': {
    name: 'Coway Airmega 200M',
    price: '$229.99',
    rating: 4.6,
    reviews: 12000,
    category: 'Air Purifiers',
    description:
      'The Coway Airmega 200M combines smart technology with powerful purification. Its advanced filtration system and air quality monitoring make it perfect for pet owners who want real-time insights into their home environment.',
    features: [
      'Real-time air quality monitoring',
      'App control and scheduling',
      'Covers up to 361 sq ft',
      'Eco Mode saves energy',
      'Filter lifetime indicator',
      'Sleek, modern design',
      '3-stage filtration system',
      'Timer and scheduler',
    ],
    specifications: {
      Coverage: '361 sq ft',
      'Noise Level': '22-53 dB',
      'Filter Type': 'Max2 Filter (HEPA + Activated Carbon)',
      Dimensions: '16.8" x 9.6" x 16.1"',
      Weight: '12.8 lbs',
      'Power Consumption': '6-43W',
      'CADR Rating': '246 CFM',
    },
    images: [
      'https://m.media-amazon.com/images/I/51bhvZyjnrL._AC_SX679_.jpg',
      '/coway-airmega-front-view.jpg',
      '/coway-airmega-display-closeup.jpg',
      '/coway-airmega-in-room-setting.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/Coway-AP-1512HH-Purifier-Monitoring-Indicator/dp/B0CW5HP3BF',
    customerReviews: [
      {
        name: 'Jennifer P.',
        rating: 5,
        date: 'January 2025',
        comment:
          'Love the app! I can monitor air quality from anywhere and adjust settings remotely.',
      },
      {
        name: 'David L.',
        rating: 5,
        date: 'December 2024',
        comment:
          'The eco mode is fantastic. Automatically adjusts based on air quality and saves on electricity.',
      },
      {
        name: 'Amanda R.',
        rating: 4,
        date: 'November 2024',
        comment: 'Great purifier overall. Setup was easy and it looks nice in our living room.',
      },
    ],
  },
  'blueair-blue-pure-211': {
    name: 'Blueair Blue Pure 211+',
    price: '$299.99',
    rating: 4.8,
    reviews: 28000,
    category: 'Air Purifiers',
    description:
      'Swedish design meets powerful air purification. The Blueair Blue Pure 211+ is perfect for large rooms and delivers whisper-quiet, energy-efficient performance while looking stunning in any space.',
    features: [
      'Covers up to 540 sq ft',
      'Washable pre-filter in multiple colors',
      'Energy Star certified',
      'Ultra-quiet operation',
      'One-button control',
      '360-degree air intake',
      'Low maintenance',
      'Eco-friendly materials',
    ],
    specifications: {
      Coverage: '540 sq ft',
      'Noise Level': '31-56 dB',
      'Filter Type': 'Particle + Carbon Filter',
      Dimensions: '13" x 13" x 20.4"',
      Weight: '13 lbs',
      'Power Consumption': '30-61W',
      'CADR Rating': '350 CFM',
    },
    images: [
      'https://m.media-amazon.com/images/I/81HOeaFRImL._AC_SX679_.jpg',
      '/blueair-blue-pure-different-angles.jpg',
      '/blueair-blue-pure-fabric-colors.jpg',
      '/blueair-in-living-room.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/BLUEAIR-Signature-Eliminating-Purifier-Large/dp/B08KTH125D',
    customerReviews: [
      {
        name: 'Robert W.',
        rating: 5,
        date: 'January 2025',
        comment:
          'Best purifier I\'ve owned. Beautiful design and incredibly effective with our two dogs.',
      },
      {
        name: 'Michelle S.',
        rating: 5,
        date: 'December 2024',
        comment:
          'The washable pre-filter is genius! Saves money and you can change colors to match your decor.',
      },
      {
        name: 'Thomas H.',
        rating: 5,
        date: 'November 2024',
        comment: 'Worth every penny. Our home with three cats has never had cleaner air.',
      },
    ],
  },
  'winix-5500-2': {
    name: 'Winix 5500-2',
    price: '$159.99',
    rating: 4.6,
    reviews: 33000,
    category: 'Air Purifiers',
    description:
      'Advanced PlasmaWave technology eliminates odors and allergens at a molecular level. Perfect for pet homes with its powerful filtration and smart sensors.',
    features: [
      'PlasmaWave technology for odor elimination',
      'Smart sensors adjust automatically',
      'Covers up to 360 sq ft',
      'Remote control included',
      'Sleep mode for quiet operation',
      'Washable carbon filter',
    ],
    specifications: {
      Coverage: '360 sq ft',
      'Noise Level': '27-59 dB',
      'Filter Type': 'True HEPA + PlasmaWave',
      Dimensions: '15" x 8.2" x 23.6"',
      Weight: '15.4 lbs',
      'Power Consumption': '6-70W',
      'CADR Rating': '243 CFM',
    },
    images: [
      'https://m.media-amazon.com/images/I/71ENQM-0ptL._AC_SX679_.jpg',
      '/winix-air-purifier-display.jpg',
      '/winix-remote-control.jpg',
      '/winix-in-bedroom.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/5510-Purifier-Generation-Deodorization-Allergies/dp/B0DJG1731C',
    customerReviews: [
      {
        name: 'Christopher B.',
        rating: 5,
        date: 'January 2025',
        comment: 'The PlasmaWave technology really works! Pet smells are gone within hours.',
      },
      {
        name: 'Nancy D.',
        rating: 5,
        date: 'December 2024',
        comment: 'Auto mode is so convenient. It adjusts itself based on air quality.',
      },
      {
        name: 'Paul M.',
        rating: 4,
        date: 'November 2024',
        comment: 'Great value for the features. Remote is handy.',
      },
    ],
  },
  'honeywell-hpa300': {
    name: 'Honeywell HPA300',
    price: '$249.99',
    rating: 4.5,
    reviews: 18000,
    category: 'Air Purifiers',
    description:
      'Maximum strength purification for large rooms. Trusted brand with proven HEPA filtration technology.',
    features: [
      'Covers up to 465 sq ft',
      'True HEPA filter captures 99.97%',
      'Turbo clean setting',
      'Filter change indicators',
      '5 air changes per hour',
      'Energy Star certified',
    ],
    specifications: {
      Coverage: '465 sq ft',
      'Noise Level': '50-63 dB',
      'Filter Type': 'True HEPA',
      Dimensions: '20.8" x 10.8" x 22.3"',
      Weight: '21 lbs',
      'Power Consumption': '40-130W',
      'CADR Rating': '300 CFM',
    },
    images: [
      'https://m.media-amazon.com/images/I/71z02JBHmzL._AC_SX679_.jpg',
      '/honeywell-hpa300-controls.jpg',
      '/honeywell-filter-system.jpg',
      '/honeywell-in-large-room.jpg',
    ],
    amazonUrl: 'https://www.amazon.com/Cabiclean-Replacement-Compatible-Honeywell-Purifier/dp/B08YRGXSL1',
    customerReviews: [
      {
        name: 'Karen L.',
        rating: 5,
        date: 'January 2025',
        comment: 'Powerful and reliable. Perfect for our large living room with pets.',
      },
      {
        name: 'Steven R.',
        rating: 4,
        date: 'December 2024',
        comment: 'A bit loud on turbo but very effective. Worth it.',
      },
      {
        name: 'Diana F.',
        rating: 5,
        date: 'November 2024',
        comment: 'Honeywell quality as expected. Great for allergies.',
      },
    ],
  },
  'dyson-pure-cool': {
    name: 'Dyson Pure Cool',
    price: '$549.99',
    rating: 4.4,
    reviews: 8500,
    category: 'Air Purifiers',
    description:
      'Purifies and cools simultaneously with Dyson\'s signature bladeless design. Smart features and air quality reports via app.',
    features: [
      '360-degree HEPA filtration',
      'Cooling fan function',
      'App control with air reports',
      'Voice control compatible',
      'Night mode for quiet operation',
      'Oscillation up to 350°',
    ],
    specifications: {
      Coverage: '400 sq ft',
      'Noise Level': '40-64 dB',
      'Filter Type': '360° Glass HEPA',
      Dimensions: '41" x 8.8" x 4.8"',
      Weight: '10.3 lbs',
      'Power Consumption': '6-40W',
      'CADR Rating': 'Not rated',
    },
    images: [
      'https://m.media-amazon.com/images/I/610prfJXNHL._AC_SX679_.jpg',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
    ],
    amazonUrl: 'https://www.amazon.com/Dyson-Purifier-Cool-TP4B-Purifying/dp/B0CY3KNSK8',
    customerReviews: [
      {
        name: 'Alexander T.',
        rating: 5,
        date: 'January 2025',
        comment: 'Love the design and dual function. App is great for monitoring air quality.',
      },
      {
        name: 'Maria G.',
        rating: 4,
        date: 'December 2024',
        comment: 'Expensive but worth it. Looks beautiful and works perfectly.',
      },
      {
        name: 'Jonathan K.',
        rating: 4,
        date: 'November 2024',
        comment: 'The cooling feature is a nice bonus. Very quiet on low.',
      },
    ],
  },
  'jackery-explorer-1000': {
    name: 'Jackery Explorer 1000',
    price: '$999.99',
    rating: 4.8,
    reviews: 15000,
    category: 'Power Stations',
    description:
      'Portable power station with 1002Wh capacity. Perfect for running air purifiers during power outages or outdoor use.',
    features: [
      '1000W continuous output',
      '1002Wh battery capacity',
      'Multiple AC, USB, DC outlets',
      'Solar panel compatible',
      'LCD display shows status',
      'Pure sine wave inverter',
    ],
    specifications: {
      Capacity: '1002Wh (278,400mAh)',
      Output: '1000W continuous, 2000W surge',
      'AC Outlets': '3 x 110V',
      'USB Ports': '2 x USB-C, 2 x USB-A',
      Weight: '22 lbs',
      'Charge Time': '7.5 hours (wall), 8 hours (solar)',
      Dimensions: '13.1" x 9.2" x 11.1"',
    },
    images: [
      'https://m.media-amazon.com/images/I/61BnZCjgnQL._AC_SX679_.jpg',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
    ],
    amazonUrl: 'https://www.amazon.com/Jackery-Explorer-Portable-Generator-Emergencies/dp/B0DFG2WDQH',
    customerReviews: [
      {
        name: 'Brian W.',
        rating: 5,
        date: 'January 2025',
        comment: 'Essential for power outages. Runs my air purifier for hours!',
      },
      {
        name: 'Leslie H.',
        rating: 5,
        date: 'December 2024',
        comment: 'Great for camping with pets. Keeps their space comfortable.',
      },
      {
        name: 'Marcus S.',
        rating: 5,
        date: 'November 2024',
        comment: 'Reliable and powerful. Worth every penny for peace of mind.',
      },
    ],
  },
  'ecoflow-delta-2': {
    name: 'EcoFlow Delta 2',
    price: '$899.99',
    rating: 4.7,
    reviews: 9000,
    category: 'Power Stations',
    description:
      'Fast charging portable power with expandable capacity. Ultra-quiet operation perfect for indoor use with air purifiers.',
    features: [
      '1800W output power',
      'Fast charge in 50 minutes',
      'App control and monitoring',
      'Expandable battery capacity',
      'X-Boost technology',
      'Multiple charging methods',
    ],
    specifications: {
      Capacity: '1024Wh',
      Output: '1800W continuous, 2700W surge',
      'AC Outlets': '6 x 110V',
      'USB Ports': '2 x USB-C, 4 x USB-A',
      Weight: '27 lbs',
      'Charge Time': '50 minutes (AC)',
      Dimensions: '15.7" x 8.3" x 11"',
    },
    images: [
      'https://m.media-amazon.com/images/I/61OTWEJPx-L._SX522_.jpg',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
      '/placeholder.svg?height=600&width=600',
    ],
    amazonUrl: 'https://www.amazon.com/EF-ECOFLOW-Portable-Charging-Generator/dp/B0B9XB57XM',
    customerReviews: [
      {
        name: 'Rachel P.',
        rating: 5,
        date: 'January 2025',
        comment: 'Fast charging is amazing! App control is very convenient.',
      },
      {
        name: 'Kevin N.',
        rating: 5,
        date: 'December 2024',
        comment: 'Powers everything I need. Quality build and reliable.',
      },
      {
        name: 'Sandra J.',
        rating: 4,
        date: 'November 2024',
        comment: 'Great product but a bit heavy. Performance is excellent though.',
      },
    ],
  },
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productData[slug] || productData['levoit-core-300']

  return <ProductContent product={product} />
}

function ProductContent({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <CookieBanner />

      <div className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/reviews"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Reviews
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image Carousel */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-background">
                <img
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-background/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-primary'
                        : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <div className="text-sm text-muted-foreground font-light mb-2">
                  {product.category}
                </div>
                <h1 className="font-serif text-5xl font-light mb-4 text-balance">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-secondary'
                            : 'text-muted'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm ml-2">
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
                
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-foreground/80 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-serif text-2xl font-light mb-4">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2 text-sm font-light">
                      <span className="text-secondary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-full breathe"
                asChild
              >
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                  View on Amazon
                </a>
              </Button>

              <p className="text-xs text-center text-muted-foreground font-light">
                As an Amazon Associate, we earn from qualifying purchases
              </p>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-24">
            <h2 className="font-serif text-4xl font-light mb-8 text-center">
              Technical <span className="text-accent">Specifications</span>
            </h2>
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border/30">
                    <span className="font-light text-muted-foreground">{key}</span>
                    <span className="font-light">{value as string}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Customer Reviews */}
          <div className="mt-24">
            <h2 className="font-serif text-4xl font-light mb-8 text-center">
              Customer <span className="text-secondary">Reviews</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {product.customerReviews.map((review: any, index: number) => (
                <Card
                  key={index}
                  className="p-6 border-border/50 bg-card/50 backdrop-blur float"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-light">{review.name}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-foreground/80 font-light leading-relaxed italic">
                      "{review.comment}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4">
            <div className="font-serif text-2xl font-light text-foreground mb-6">
              PurePawAir
            </div>
            <p className="text-sm text-muted-foreground font-light">
              © 2025 PurePawAir.com. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-light">
              Participant in the Amazon Associates Program. As an Amazon Associate, we earn from qualifying purchases.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4">
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
