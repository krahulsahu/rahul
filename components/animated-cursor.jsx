"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")

    const handleLinkHover = () => setCursorVariant("hover")
    const handleLinkLeave = () => setCursorVariant("default")

    const handleButtonHover = () => setCursorVariant("button")
    const handleButtonLeave = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a")
    const buttons = document.querySelectorAll("button")

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleButtonHover)
      button.addEventListener("mouseleave", handleButtonLeave)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleButtonHover)
        button.removeEventListener("mouseleave", handleButtonLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "var(--primary)",
      mixBlendMode: "difference",
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "var(--primary)",
      mixBlendMode: "difference",
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "var(--primary)",
      mixBlendMode: "difference",
    },
    click: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "var(--destructive)",
      mixBlendMode: "difference",
    },
  }

  // Only show custom cursor on desktop
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 opacity-70"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}
