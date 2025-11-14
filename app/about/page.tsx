import { Navigation } from '@/components/navigation'
import { FloatingParticles } from '@/components/floating-particles'
import { CookieBanner } from '@/components/cookie-banner'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <CookieBanner />

      <div className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-balance">
              About <br />
              <span className="text-accent">PurePawAir</span>
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="space-y-6">
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
            </div>

            <div className="my-16 border-t border-b border-border/50 py-8">
              <h2 className="font-serif text-3xl font-light mb-6 text-center">Our Philosophy</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">純</span>
                  </div>
                  <h3 className="font-serif text-xl font-light">Purity</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Clean air is the foundation of wellness
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">静</span>
                  </div>
                  <h3 className="font-serif text-xl font-light">Serenity</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Quiet operation for peaceful living
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">和</span>
                  </div>
                  <h3 className="font-serif text-xl font-light">Harmony</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Balance between pets and people
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-light">Why We Exist</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Pet owners face unique air quality challenges. Dander, odors, and allergens can affect both human and animal health. 
                Yet finding reliable information and quality products shouldn't be overwhelming.
              </p>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                We cut through the noise. Every air purifier, every power station, every recommendation on this site has been 
                researched and vetted with one question in mind: "Would this bring peace to a home with pets?"
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-light">Transparency</h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                We're participants in the Amazon Associates program. When you purchase through our links, we earn a small commission 
                at no extra cost to you. This supports our work in researching and recommending quality products.
              </p>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Our recommendations are always honest. We only feature products we believe in, regardless of commission rates.
              </p>
            </div>

            <div className="pt-8 text-center">
              <div className="inline-block border-t border-border/50 pt-4">
                <p className="font-serif text-sm font-light tracking-widest text-muted-foreground">
                  息 • BREATH • ДЫХАНИЕ
                </p>
              </div>
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
