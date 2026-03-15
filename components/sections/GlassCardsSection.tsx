"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
    color: "rgba(99, 102, 241, 0.8)"
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
    color: "rgba(139, 92, 246, 0.8)"
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    color: "rgba(168, 85, 247, 0.8)"
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
    color: "rgba(192, 132, 252, 0.8)"
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized.",
    color: "rgba(232, 121, 249, 0.8)"
  }
]

const CARD_OFFSET = 35
const SCALE_STEP = 0.02

export const GlassCardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = cardsRef.current.filter(Boolean)
    const total = cards.length
    if (total === 0) return

    cards.forEach((card, i) => {
      gsap.set(card, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        y: i * CARD_OFFSET,
        scale: 1 - (total - 1 - i) * SCALE_STEP
      })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${total * 400}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    })

    for (let i = 1; i < total; i++) {
      tl.to(cards[i], {
        y: i * CARD_OFFSET,
        scale: 1 - (total - 1 - i) * SCALE_STEP,
        duration: 1,
        ease: 'none'
      }, i - 1)
      
      for (let j = 0; j < i; j++) {
        tl.to(cards[j], {
          y: j * CARD_OFFSET + CARD_OFFSET,
          scale: 1 - (total - j) * SCALE_STEP,
          duration: 1,
          ease: 'none'
        }, i - 1)
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={containerRef} 
      style={{ 
        background: '#0a0a0a',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {PROCESS_PHASES.map((phase, index) => (
          <div
            key={phase.id}
            ref={el => { if (el) cardsRef.current[index] = el }}
            style={{
              width: 'min(95vw, 1800px)',
              height: '280px',
              borderRadius: '20px',
              isolation: 'isolate',
              zIndex: index + 1,
              willChange: 'transform'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '22px',
                padding: '2px',
                background: `linear-gradient(135deg, ${phase.color}, transparent 50%, ${phase.color.replace('0.8', '0.3')})`,
                zIndex: -1
              }}
            />

            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '0 4rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))',
              backdropFilter: 'blur(30px) saturate(150%)',
              WebkitBackdropFilter: 'blur(30px) saturate(150%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%)',
                pointerEvents: 'none'
              }} />

              <div style={{
                position: 'absolute',
                top: '8px',
                left: '16px',
                right: '16px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                pointerEvents: 'none'
              }} />

              <div style={{
                position: 'absolute',
                left: '4rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '8rem',
                fontWeight: 900,
                color: phase.color,
                opacity: 0.15,
                lineHeight: 1
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div style={{
                flex: 1,
                paddingLeft: '8rem',
                zIndex: 1
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em'
                }}>
                  {phase.title}
                </h2>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.6,
                  fontSize: '0.95rem',
                  maxWidth: '800px'
                }}>
                  {phase.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GlassCardsSection
