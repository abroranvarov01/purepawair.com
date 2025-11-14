'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-serif font-light tracking-wide text-foreground group-hover:text-primary transition-colors">
            PurePawAir
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/reviews"
            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/about"
            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="w-3 h-3 rounded-full bg-secondary breathe" title="Air Quality: Pure" />
      </div>
    </nav>
  )
}
