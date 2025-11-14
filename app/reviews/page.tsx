'use client'

import { Navigation } from '@/components/navigation'
import { FloatingParticles } from '@/components/floating-particles'
import { CookieBanner } from '@/components/cookie-banner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'

const products = [
  {
    id: 'levoit-core-300',
    name: 'Levoit Core 300',
    category: 'Air Purifiers',
    description: 'Compact and powerful HEPA filtration designed specifically for pet owners. Whisper-quiet operation.',
    rating: 4.7,
    reviews: 45000,
    price: '$99.99',
    features: ['True HEPA Filter', 'Pet Allergy Filter', 'Whisper Quiet', '215 sq ft Coverage'],
    image: 'https://m.media-amazon.com/images/I/71t-9BTIg9L._AC_SY879_.jpg',
  },
  {
    id: 'coway-airmega-200m',
    name: 'Coway Airmega 200M',
    category: 'Air Purifiers',
    description: 'Smart air quality monitoring with maximum coverage. Perfect for medium to large spaces.',
    rating: 4.6,
    reviews: 12000,
    price: '$229.99',
    features: ['Smart Monitoring', '361 sq ft Coverage', 'Eco Mode', 'Auto Mode'],
    image: 'https://m.media-amazon.com/images/I/51bhvZyjnrL._AC_SX679_.jpg',
  },
  {
    id: 'blueair-blue-pure-211',
    name: 'Blueair Blue Pure 211+',
    category: 'Air Purifiers',
    description: 'Scandinavian design meets powerful purification. Energy-efficient and eco-friendly.',
    rating: 4.8,
    reviews: 28000,
    price: '$299.99',
    features: ['540 sq ft Coverage', 'Washable Filter', 'Energy Star', 'Ultra Silent'],
    image: 'https://m.media-amazon.com/images/I/81HOeaFRImL._AC_SX679_.jpg',
  },
  {
    id: 'winix-5500-2',
    name: 'Winix 5500-2',
    category: 'Air Purifiers',
    description: 'Advanced PlasmaWave technology eliminates odors and allergens at a molecular level.',
    rating: 4.6,
    reviews: 33000,
    price: '$159.99',
    features: ['PlasmaWave Tech', 'Auto Mode', '360 sq ft Coverage', 'Washable Filter'],
    image: 'https://m.media-amazon.com/images/I/71ENQM-0ptL._AC_SX679_.jpg',
  },
  {
    id: 'honeywell-hpa300',
    name: 'Honeywell HPA300',
    category: 'Air Purifiers',
    description: 'Maximum strength purification for large rooms. Captures up to 99.97% of particles.',
    rating: 4.5,
    reviews: 18000,
    price: '$249.99',
    features: ['465 sq ft Coverage', 'True HEPA Filter', 'Turbo Mode', 'Filter Indicators'],
    image: 'https://m.media-amazon.com/images/I/71z02JBHmzL._AC_SX679_.jpg',
  },
  {
    id: 'dyson-pure-cool',
    name: 'Dyson Pure Cool',
    category: 'Air Purifiers',
    description: 'Purifies and cools simultaneously. Bladeless design with smart air quality reports.',
    rating: 4.4,
    reviews: 8500,
    price: '$549.99',
    features: ['360° Filtration', 'Cooling Fan', 'App Control', 'Voice Control'],
    image: 'https://m.media-amazon.com/images/I/610prfJXNHL._AC_SX679_.jpg',
  },
  {
    id: 'jackery-explorer-1000',
    name: 'Jackery Explorer 1000',
    category: 'Power Stations',
    description: 'Portable power station with 1002Wh capacity. Perfect for running air purifiers anywhere.',
    rating: 4.8,
    reviews: 15000,
    price: '$999.99',
    features: ['1000W Output', 'Multiple Outlets', 'Solar Compatible', 'LCD Display'],
    image: 'https://m.media-amazon.com/images/I/61BnZCjgnQL._AC_SX679_.jpg',
  },
  {
    id: 'ecoflow-delta-2',
    name: 'EcoFlow Delta 2',
    category: 'Power Stations',
    description: 'Fast charging portable power with expandable capacity. Ultra-quiet operation.',
    rating: 4.7,
    reviews: 9000,
    price: '$899.99',
    features: ['1800W Output', 'Fast Charge', 'App Control', 'Expandable'],
    image: 'https://m.media-amazon.com/images/I/61OTWEJPx-L._SX522_.jpg',
  },
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Air Purifiers', 'Power Stations']

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <CookieBanner />

      <div className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-balance">
              Product <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Carefully curated selections floating on the surface of purity
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground breathe'
                    : 'border-border/50 hover:border-primary/50'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProducts.map((product, i) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-500 float"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-muted to-background">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur px-3 py-1 rounded-full text-xs font-light">
                    ★ {product.rating}
                  </div>
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur px-3 py-1 rounded-full text-xs font-light">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-2xl font-light">{product.name}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground font-light"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground font-light">
                    {product.reviews.toLocaleString()} reviews
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground breathe"
                    asChild
                  >
                    <Link href={`/product/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
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
