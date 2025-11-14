import { Navigation } from '@/components/navigation'
import { FloatingParticles } from '@/components/floating-particles'
import { CookieBanner } from '@/components/cookie-banner'
import { ZenInteraction } from '@/components/zen-interaction'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 breathe">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path
                  d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14C5.10457 14 6 13.1046 6 12Z"
                  fill="currentColor"
                  className="text-secondary"
                />
                <path
                  d="M20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10Z"
                  fill="currentColor"
                  className="text-secondary"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-light">
              Pure Air, Pure Life
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 text-balance leading-tight">
            Breathe In <br />
            <span className="text-primary">Clean Air</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            An experience of tranquility and purity. Premium air purifiers for pet owners who cherish every breath.
          </p>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full breathe"
            asChild
          >
            <Link href="#products">Explore Purity</Link>
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden float">
              <img
                src="/peaceful-sleeping-cat-next-to-modern-white-air-pur.jpg"
                alt="Peaceful pet with air purifier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-5xl font-light text-balance leading-tight">
                The Essence <br />
                <span className="text-secondary">of Calm</span>
              </h2>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                This is not just a store, but an experience of serenity and breathing. Every moment designed to bring harmony to your space and wellness to your beloved companions.
              </p>

              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Like a gentle inhale and exhale, our carefully selected products emerge to transform your environment into a sanctuary of pure air and peaceful living.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">
              Top Air Purifiers <br />
              <span className="text-accent">for Pet Owners</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Curated selections that harmonize technology with tranquility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'levoit-core-300',
                name: 'Levoit Core 300',
                description: 'Compact and powerful HEPA filtration designed specifically for pet owners. Whisper-quiet operation.',
                rating: 4.7,
                reviews: 45000,
                image: '/white-modern-compact-air-purifier-with-hepa-filter.jpg',
              },
              {
                id: 'coway-airmega-200m',
                name: 'Coway Airmega 200M',
                description: 'Smart air quality monitoring with maximum coverage. Perfect for medium to large spaces.',
                rating: 4.6,
                reviews: 12000,
                image: '/sleek-silver-smart-air-purifier-with-led-display.jpg',
              },
              {
                id: 'blueair-blue-pure-211',
                name: 'Blueair Blue Pure 211+',
                description: 'Scandinavian design meets powerful purification. Energy-efficient and eco-friendly.',
                rating: 4.8,
                reviews: 28000,
                image: '/minimalist-scandinavian-blue-air-purifier-with-fab.jpg',
              },
            ].map((product, i) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-500 float"
                style={{ animationDelay: `${i * 0.2}s` }}
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
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-2xl font-light">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="text-xs text-muted-foreground font-light">
                    {product.reviews.toLocaleString()} reviews
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground breathe"
                    asChild
                  >
                    <Link href={`/product/${product.id}`}>Read More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="ghost"
              size="lg"
              className="text-foreground/70 hover:text-foreground"
              asChild
            >
              <Link href="/reviews">View All Reviews →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portable Power Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/sunrise-dawn-sky-soft-pastel-clouds-peaceful-morni.jpg"
            alt="Peaceful dawn"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-5xl md:text-6xl font-light text-balance leading-tight">
                Portable Power, <br />
                <span className="text-primary">Anywhere</span>
              </h2>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Energy generators on the backdrop of dawn. Keep your air purifiers running wherever life takes you and your pets.
              </p>

              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Silent, reliable, and powerful. The perfect companion for maintaining clean air during travel, camping, or power outages.
              </p>

              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full breathe"
                asChild
              >
                <Link href="/reviews?category=power-stations">Explore Power Stations</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden float" style={{ animationDelay: '0.3s' }}>
              <img
                src="/portable-power-station-modern-design-outdoor-campi.jpg"
                alt="Portable power station"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section "Breathe Easy, Live Better" */}
      <section className="relative py-32 px-6 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">
              Breathe Easy, <br />
              <span className="text-secondary">Live Better</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Discover how clean air transforms the lives of pets and their families
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl float bg-card/50 backdrop-blur border border-border/50">
            <img
              src="/happy-pet-family-breathing-clean-air-at-home-with-.jpg"
              alt="Pet family enjoying clean air"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-center text-sm text-muted-foreground font-light mt-8 max-w-3xl mx-auto leading-relaxed">
            Experience real stories from pet parents who transformed their homes into sanctuaries of pure air. 
            See the difference that quality filtration makes in everyday life.
          </p>
        </div>
      </section>

      {/* Zen Interaction Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">
              Zen <span className="text-accent">Interaction</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Move slowly and breathe. Watch as the particles respond to your rhythm, creating harmony in motion.
            </p>
          </div>

          <ZenInteraction />

          <div className="mt-12 text-center space-y-4">
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              The slower your movements, the more harmoniously the particles flow. 
              This is the essence of mindful breathing — calm, intentional, pure.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section "Pet Parents Speak" */}
      <section className="relative py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">
              Pet Parents <br />
              <span className="text-primary">Speak</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Real experiences from families breathing easier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Hana Li',
                location: 'Seattle, WA',
                pet: 'Golden Retriever',
                quote: "The difference is incredible. My allergies have improved dramatically, and Luna seems so much more comfortable at home. It's like bringing the fresh outdoors inside.",
                rating: 5,
                image: '/hana-li-profile.jpg',
              },
              {
                name: 'Oliver Brooks',
                location: 'Austin, TX',
                pet: 'Two Persian Cats',
                quote: "As someone with asthma, clean air isn't optional. This purifier runs silently all day, and I can finally breathe freely around my cats. Pure peace of mind.",
                rating: 5,
                image: '/oliver-brooks-profile.jpg',
              },
              {
                name: 'Sofia Ramirez',
                location: 'Portland, OR',
                pet: 'Rescue Dog Mix',
                quote: "I was skeptical at first, but the change was noticeable within days. No more pet odors, and the air feels lighter. My rescue pup Max has never been happier.",
                rating: 5,
                image: '/sofia-ramirez-profile.jpg',
              },
              {
                name: 'Noah Kim',
                location: 'Boston, MA',
                pet: 'Maine Coon',
                quote: "The portable power station is a game-changer. We took it camping with our cat, and the air purifier kept running the entire trip. Truly liberating.",
                rating: 5,
                image: '/noah-kim-profile.jpg',
              },
              {
                name: 'Emily Chen',
                location: 'San Francisco, CA',
                pet: 'French Bulldog',
                quote: "Design meets function perfectly. It blends into our minimalist home while doing heavy-duty work. Our Frenchie's breathing issues have improved so much.",
                rating: 5,
                image: '/emily-chen-profile.jpg',
              },
              {
                name: 'Marcus Johnson',
                location: 'Denver, CO',
                pet: 'Labrador',
                quote: "Worth every penny. The HEPA filter captures all the fur and dander, and the air quality monitor gives me confidence that we're breathing clean. Our lab loves it.",
                rating: 5,
                image: '/marcus-johnson-profile.jpg',
              },
            ].map((review, i) => (
              <Card
                key={review.name}
                className="group p-6 space-y-4 border-border/50 bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-500 float"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 breathe">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium">{review.name}</h3>
                    <p className="text-xs text-muted-foreground font-light">{review.location}</p>
                    <p className="text-xs text-primary font-light">{review.pet}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-foreground/80 font-light leading-relaxed italic">
                  "{review.quote}"
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="ghost"
              size="lg"
              className="text-foreground/70 hover:text-foreground"
              asChild
            >
              <Link href="/reviews">Read More Stories →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section "About PurePawAir" with Japanese minimalism */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary animate-spin" style={{ animationDuration: '60s' }} />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-secondary animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent animate-spin" style={{ animationDuration: '30s' }} />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-balance">
              About <span className="text-accent">PurePawAir</span>
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                We believe in the Japanese philosophy of <em>ma</em> — the space between. 
                That sacred pause where clarity emerges and breath flows freely.
              </p>

              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                PurePawAir was born from a simple truth: our pets deserve the same quality of air we seek for ourselves. 
                Every product we recommend has been carefully considered, tested, and chosen for its ability to create harmony in your home.
              </p>

              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                This is more than curation. It's a commitment to the wellness of your family — both human and animal. 
                To the quiet moments of connection. To the deep breaths that ground us. To living intentionally in clean, calm spaces.
              </p>

              <div className="pt-8">
                <div className="inline-block border-t border-border/50 pt-4">
                  <p className="font-serif text-sm font-light tracking-widest text-muted-foreground">
                    息 • BREATH • ДЫХАНИЕ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
