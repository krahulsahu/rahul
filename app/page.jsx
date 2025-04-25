"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Typewriter } from "react-simple-typewriter"
import Marquee from "react-fast-marquee"
import CountUp from "react-countup"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"
import GitHubCalendar from "react-github-calendar"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { techStack } from "@/data/icon";
import ProjectCard from "@/components/project-card"
import profileImage from '../public/images/my photo.jpg'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {

  const featuredProjects = projects.slice(0, 3)

  useEffect(() => {
    // Smooth scroll setup
    const smoothScroll = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      if (href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", smoothScroll))

    return () => links.forEach((link) => link.removeEventListener("click", smoothScroll))
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Typewriter */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10"></div>

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000 -z-10"></div>

        <div className="max-w-4xl space-y-6">
          <motion.div
            className="text-sm md:text-base font-medium text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block">👋 Hi there, I'm</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            Rahul Kumar
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl font-medium h-12 text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typewriter
              words={[
                "Full-Stack Developer",
                "DSA Enthusiast",
                "Tech Explorer",
                "MERN Stack Developer",
                "React.js Developer",
                "Node.js Backend Engineer",
                "Java Programmer",
                "Database Architect",
                "REST API Designer",
                "SpringBoots Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-[700px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I architect robust full-stack solutions that transform ideas into
            scalable web applications. With expertise across the MERN stack
            (MongoDB, Express, React, Node.js), I build performant systems with
            elegant UIs – like my AI Image Generator and E-commerce Platform.
            Explore my projects below to see how I solve problems with clean
            code and modern tech.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="rounded-full group relative overflow-hidden p-2"
              >
                <span className="relative z-10 m-1 ">View Projects</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Rahul_Kumar_Resume.pdf"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full group relative overflow-hidden p-2"
              >
                <span className="relative z-10 flex items-center gap-2 m-1">
                  Download Resume <Download className="h-4 w-4" />
                </span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full bg-black group relative overflow-hidden p-2"
              >
                <span className="relative z-10 m-1 ">Hire Me</span>
                <span className="absolute inset-0 bg-secondary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-12"
          >
            <ScrollLink to="about" smooth={true} duration={500}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full animate-bounce"
              >
                <ArrowDown className="h-6 w-6" />
              </Button>
            </ScrollLink>
          </motion.div>
        </div>
      </motion.section>

      {/* Profile Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Profile Image with blob background */}
            <motion.div className="relative mx-auto" variants={fadeIn}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl transform animate-pulse"></div>
              <div className="relative w-64 h-80 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src={profileImage}
                  alt="Rahul Kumar"
                  fill
                  className="object-cover object-top hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Quick Overview</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-primary text-4xl font-bold mb-2">
                    <CountUp
                      end={800}
                      suffix="+"
                      duration={2.5}
                      enableScrollSpy
                    />
                  </h3>
                  <p className="text-muted-foreground">DSA Problems Solved</p>
                  <p className="text-neutral-400">LeetCode & GfG</p>
                </div>

                <div className="bg-background rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-primary text-4xl font-bold mb-2">
                    <CountUp
                      end={20}
                      suffix="+"
                      duration={2.5}
                      enableScrollSpy
                    />
                  </h3>
                  <p className="text-muted-foreground">Projects Built </p>
                  <p className="text-neutral-400">Self Learning</p>
                </div>

                <div className="bg-background rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-primary text-4xl font-bold mb-2">
                    B.Tech
                  </h3>
                  <p className="text-muted-foreground">CSE @ NSEC - 25</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16">
        <div className="container mx-auto px-4 mb-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.h2>
        </div>

        <Marquee
          gradient={true}
          speed={50}
          gradientWidth={100}
          className="py-8"
        >
          {techStack.map((tech, index) => (
            <div key={index} className="mx-8 flex flex-col items-center">
              <div className="w-16 h-16 relative">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Quote/Motto Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <blockquote className="font-playfair text-2xl md:text-4xl italic">
              "Turning Problems Into Solutions — One Line of Code at a Time."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my latest work. These projects showcase my
              skills and passion for creating innovative solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={fadeIn}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/projects">
              <Button variant="outline" className="rounded-full group">
                <span className="flex items-center gap-2">
                  View All Projects{" "}
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* GitHub Contribution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">GitHub Contributions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My GitHub activity over the past year. Consistency is key to
              growth.
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto p-4 bg-background rounded-lg shadow-md overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GitHubCalendar
              username="krahulsahu"
              colorScheme="dark"
              className="mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Open to New Opportunities
            </h2>
            <p className="text-muted-foreground mb-8 ">
              As an enthusiastic junior developer eager to launch my tech
              career, I'm actively seeking
              <span className="font-semibold text-primary">
                {" "}
                full-time positions
              </span>{" "}
              where I can contribute my
              <span className="font-semibold text-primary">
                {" "}
                MERN stack skills
              </span>{" "}
              and
              <span className="font-semibold text-primary">
                {" "}
                problem-solving abilities
              </span>
              . Whether you're looking for a passionate entry-level developer or
              have advice for someone starting out, I'd love to connect!
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full group relative overflow-hidden px-7 py-2"
              >
                <span className="relative z-10">Let's Connect</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
