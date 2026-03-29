'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number; y: number; r: number;
      dx: number; dy: number; opacity: number; pulse: number
    }[] = []

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animId: number
    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.012

      for (const p of particles) {
        p.pulse += 0.018
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 220, 140, ${alpha})`
        ctx.fill()
      }

      // Subtle horizontal light beam sweeping
      const beamX = (Math.sin(t * 0.4) * 0.5 + 0.5) * canvas.width
      const grad = ctx.createRadialGradient(beamX, canvas.height * 0.5, 0, beamX, canvas.height * 0.5, canvas.width * 0.45)
      grad.addColorStop(0, 'rgba(255, 200, 80, 0.04)')
      grad.addColorStop(1, 'rgba(255, 200, 80, 0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="bg-image-with-overlay relative h-[60vh] overflow-hidden">
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
          zIndex: 2,
        }}
      />

      <div
        className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28"
        style={{ zIndex: 3 }}
      >
        <div className="text-center">
          {/* Eyebrow label */}
          <p
            className="uppercase tracking-[0.35em] text-xs font-semibold mb-5 animate-fadein"
            style={{
              color: '#f5c97a',
              animationDelay: '0.1s',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            Apostle DeJoe Ministries
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight animate-fadein"
            style={{
              animationDelay: '0.3s',
              opacity: 0,
              animationFillMode: 'forwards',
              textShadow: '0 2px 24px rgba(0,0,0,0.45)',
              letterSpacing: '-0.01em',
            }}
          >
            Music Ministers<br />
            <span style={{ color: '#f5c97a' }}>Prayer Network</span>
          </h1>

          <div
            className="animate-fadein"
            style={{ animationDelay: '0.55s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-amber-300 opacity-60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-300 opacity-80" />
              <div className="h-px w-10 bg-amber-300 opacity-60" />
            </div>

            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Our assignment is to Awaken The End Time Music Ministers.
            </p>
          </div>

          <div
            className="animate-fadein"
            style={{ animationDelay: '0.75s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300"
              style={{
                border: '1.5px solid rgba(245, 201, 122, 0.7)',
                color: '#f5c97a',
                background: 'rgba(245, 201, 122, 0.07)',
                backdropFilter: 'blur(6px)',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245, 201, 122, 0.18)'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#f5c97a'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245, 201, 122, 0.07)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(245, 201, 122, 0.7)'
              }}
            >
              Register Here
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  )
}