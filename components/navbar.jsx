"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Articles", path: "/articles" },
  ]

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={cn(
        "fixed top-0 left-0 right-0 w-full py-4 px-4 md:px-6 flex items-center justify-between z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <Link href="/" className="text-2xl font-bold relative group">
        <span className="relative z-10">R.K</span>
        <span className="absolute -inset-1 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <motion.div key={item.path} variants={itemVariants}>
            <Link
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === item.path ? "w-full" : "",
                )}
              ></span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div variants={itemVariants} className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <Link href="/contact">
          <Button className="rounded-full relative overflow-hidden group">
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </Link>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button onClick={toggleMenu} className="relative z-50">
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-8 p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      pathname === item.path ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="rounded-full mt-4">Hire Me</Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
