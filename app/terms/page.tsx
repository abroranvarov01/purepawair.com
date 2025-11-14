import { Navigation } from '@/components/navigation'
import { FloatingParticles } from '@/components/floating-particles'
import { CookieBanner } from '@/components/cookie-banner'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <CookieBanner />

      <div className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-balance">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-sm text-muted-foreground font-light">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Agreement to Terms</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                By accessing PurePawAir.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Affiliate Disclosure</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                PurePawAir.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program 
                designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                We may earn commissions from qualifying purchases made through links on this website. These commissions come at 
                no additional cost to you and help support our work in researching and recommending quality products.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Product Information</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We strive to provide accurate product information and reviews. However, manufacturers may change product 
                specifications without notice. We recommend verifying current product details directly with retailers before purchase.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                Prices displayed on this site are for reference only and may not reflect current pricing on retailer websites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Content Accuracy</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                While we make every effort to ensure the accuracy of information on PurePawAir.com, we make no warranties or 
                representations about the accuracy or completeness of the content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Intellectual Property</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                The content on PurePawAir.com, including text, graphics, logos, and images, is the property of PurePawAir.com 
                or its content suppliers and is protected by copyright laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Limitation of Liability</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                PurePawAir.com shall not be liable for any damages arising from the use or inability to use products purchased 
                through affiliate links, or from any information, content, or services provided on this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Changes to Terms</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. 
                Your continued use of the site following the posting of changes constitutes acceptance of those changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Contact</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:hello@purepawair.com" className="text-primary hover:underline">
                  hello@purepawair.com
                </a>
              </p>
            </section>
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
