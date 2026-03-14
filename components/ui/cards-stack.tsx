"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { cn } from "../../lib/utils"

interface CardStickyProps {
  index: number
  incrementY?: number
  incrementZ?: number
  children?: React.ReactNode
  className?: string
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px" }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  ({ index, incrementY = 100, incrementZ = 10, children, className }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    })
    
    const y = useTransform(scrollYProgress, [0, 1], [index * incrementY, 0])
    const z = useTransform(scrollYProgress, [0, 1], [index * incrementZ, 0])
    const opacity = useTransform(scrollYProgress, 
      [0, 0.1, 0.9, 1], 
      [0.3, 1, 1, 0.3]
    )
    const scale = useTransform(scrollYProgress, 
      [0, 0.1, 0.9, 1], 
      [0.8, 1, 1, 0.8]
    )

    return (
      <div 
        ref={containerRef}
        className={cn("sticky top-24", className)}
        style={{ zIndex: index }}
      >
        <motion.div
          ref={ref}
          style={{
            y,
            zIndex: index,
            opacity,
            scale,
          }}
        >
          {children}
        </motion.div>
      </div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
