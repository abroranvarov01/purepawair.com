'use client'

import { useEffect, useRef, useState } from 'react'

export function ZenInteraction() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [breathingRate, setBreathingRate] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    interface ZenParticle {
      x: number
      y: number
      targetX: number
      targetY: number
      size: number
      hue: number
    }

    const particles: ZenParticle[] = []
    const particleCount = 80

    // Create particles in circular formation
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2
      const radius = 100
      const x = canvas.width / 2 + Math.cos(angle) * radius
      const y = canvas.height / 2 + Math.sin(angle) * radius

      particles.push({
        x,
        y,
        targetX: x,
        targetY: y,
        size: 2 + Math.random() * 2,
        hue: 40 + Math.random() * 40, // Gold to mint range
      })
    }

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let mouseVelocity = 0
    let lastMouseTime = Date.now()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const newMouseX = e.clientX - rect.left
      const newMouseY = e.clientY - rect.top
      
      // Calculate velocity for breath detection
      const dx = newMouseX - mouseX
      const dy = newMouseY - mouseY
      const currentTime = Date.now()
      const timeDiff = currentTime - lastMouseTime
      
      if (timeDiff > 0) {
        mouseVelocity = Math.sqrt(dx * dx + dy * dy) / timeDiff
        setBreathingRate(Math.min(mouseVelocity * 100, 100))
        setIsInteracting(true)
        
        setTimeout(() => setIsInteracting(false), 2000)
      }
      
      mouseX = newMouseX
      mouseY = newMouseY
      lastMouseTime = currentTime
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      const breathCycle = Math.sin(time * 0.5) * 0.5 + 0.5

      particles.forEach((particle, i) => {
        const angle = (i / particleCount) * Math.PI * 2
        const baseRadius = 80 + breathCycle * 40
        const baseX = canvas.width / 2 + Math.cos(angle) * baseRadius
        const baseY = canvas.height / 2 + Math.sin(angle) * baseRadius

        // Mouse interaction
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = Math.max(0, 150 - distance) / 150

        particle.targetX = baseX + dx * force * 0.5
        particle.targetY = baseY + dy * force * 0.5

        // Smooth movement
        particle.x += (particle.targetX - particle.x) * 0.1
        particle.y += (particle.targetY - particle.y) * 0.1

        // Draw particle
        const opacity = 0.3 + breathCycle * 0.4
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 50%, 70%, ${opacity})`
        ctx.fill()

        // Draw connections to nearby particles
        particles.forEach((other, j) => {
          if (j <= i) return
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 80) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `hsla(160, 50%, 70%, ${0.1 * (1 - dist / 80)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-muted/30 to-background cursor-pointer"
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground font-light mb-2">
          {isInteracting ? 'Feel the harmony...' : 'Move slowly and breathe'}
        </p>
        <div className="h-1 w-32 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary transition-all duration-300"
            style={{ width: `${breathingRate}%` }}
          />
        </div>
      </div>
    </div>
  )
}
