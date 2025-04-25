"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative overflow-hidden rounded-full"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.1 }}
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: -180 }}
            transition={{ duration: 0.1 }}
          >
            <Moon className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full transition-transform duration-300 hover:scale-100"></span>
    </Button>
  )
}
