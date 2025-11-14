'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left leading-relaxed">
          Этот веб-сайт использует файлы cookie для улучшения вашего опыта. Продолжая использовать сайт, вы соглашаетесь с нашей политикой конфиденциальности.
        </p>
        <Button
          onClick={acceptCookies}
          className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 breathe"
        >
          Принять
        </Button>
      </div>
    </div>
  )
}
