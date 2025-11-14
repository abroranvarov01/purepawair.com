import { Navigation } from '@/components/navigation'
import { FloatingParticles } from '@/components/floating-particles'
import { CookieBanner } from '@/components/cookie-banner'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative">
      <FloatingParticles />
      <Navigation />
      <CookieBanner />

      <div className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-balance">
              Privacy <span className="text-secondary">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground font-light">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Information We Collect</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                When you visit PurePawAir.com, we may collect certain information automatically, including your IP address, 
                browser type, referring website, pages visited, and the time spent on those pages.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                If you contact us through our contact form, we collect your name, email address, and message content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">How We Use Your Information</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 font-light">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Send periodic emails (if you opt in)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Cookies</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We use cookies to enhance your experience on our website. Cookies are small files stored on your device that 
                help us remember your preferences and understand how you use our site.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                You can choose to disable cookies through your browser settings, but this may affect your ability to use 
                certain features of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Third-Party Services</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We use third-party services, including Amazon Associates, that may collect information used to identify you. 
                When you click on affiliate links and make purchases, Amazon may collect information according to their own 
                privacy policies.
              </p>
              <p className="text-foreground/80 font-light leading-relaxed">
                We also use analytics services to understand how visitors use our website. These services may use cookies and 
                similar technologies to collect information about your browsing behavior.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Data Security</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Your Rights</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 font-light">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Children's Privacy</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Changes to Privacy Policy</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light">Contact Us</h2>
              <p className="text-foreground/80 font-light leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
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
