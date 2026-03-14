"use client"

import React, { useEffect, useRef } from 'react'
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

const CARD_OFFSET = 40
const SCALE_FACTOR = 0.03

export const GlassCardsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const cardsContainer = cardsContainerRef.current
    if (!container || !cardsContainer) return

    const cards = gsap.utils.toArray<HTMLElement>('.glass-card')
    const numCards = cards.length

    gsap.set(cards[0], { y: 0, scale: 1 })

    cards.slice(1).forEach((card, i) => {
      gsap.set(card, {
        y: (i + 1) * 150 + 500,
        scale: 1 - (i + 1) * SCALE_FACTOR,
        opacity: 0
      })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${numCards * 600}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

    cards.slice(1).forEach((card, i) => {
      const stackIndex = i + 1
      
      tl.to(card, {
        y: stackIndex * CARD_OFFSET,
        scale: 1 - (numCards - stackIndex - 1) * SCALE_FACTOR,
        opacity: 1,
        duration: 1,
        ease: 'none'
      }, i)

      cards.slice(0, stackIndex).forEach((prevCard, j) => {
        tl.to(prevCard, {
          y: j * CARD_OFFSET,
          scale: 1 - (numCards - j - 1) * SCALE_FACTOR,
          duration: 1,
          ease: 'none'
        }, i)
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={containerRef} 
      style={{ 
        background: '#0a0a0a',
        minHeight: '100vh'
      }}
    >
      <div 
        ref={cardsContainerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {PROCESS_PHASES.map((phase, index) => (
          <div
            key={phase.id}
            className="glass-card"
            style={{
              position: 'absolute',
              width: 'min(85vw, 580px)',
              height: '400px',
              borderRadius: '24px',
              isolation: 'isolate',
              zIndex: index + 1,
              willChange: 'transform, opacity'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '27px',
                padding: '3px',
                background: `conic-gradient(
                  from ${index * 60}deg,
                  transparent 0deg,
                  ${phase.color} 60deg,
                  ${phase.color.replace('0.8', '0.5')} 120deg,
                  transparent 180deg,
                  ${phase.color.replace('0.8', '0.3')} 240deg,
                  transparent 360deg
                )`,
                zIndex: -1
              }}
            />

            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05))',
              backdropFilter: 'blur(25px) saturate(180%)',
              WebkitBackdropFilter: 'blur(25px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                0 1px 0 rgba(255, 255, 255, 0.2) inset
              `,
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontSize: '3.5rem',
                fontWeight: 800,
                color: phase.color,
                opacity: 0.6,
                lineHeight: 1
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
                pointerEvents: 'none'
              }} />

              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                right: '12px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                pointerEvents: 'none'
              }} />

              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 1
              }}>
                {phase.title}
              </h2>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                position: 'relative',
                zIndex: 1,
                maxWidth: '90%'
              }}>
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GlassCardsSection
