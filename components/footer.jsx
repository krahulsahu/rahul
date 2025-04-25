"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/krahulsahu", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/rahul-k-22839a1a1/", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:rahulkumarsahu8182@gmail.com", label: "Email" },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 px-4 md:px-6 border-t"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              RK
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Turning ideas into innovative web applications with clean code and modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Articles
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} © All Rights Reserved. Built with ♡ by Rahul Kumar
          </p>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors">
            Say Hello
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
