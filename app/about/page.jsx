"use client"

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import profileImage from "../../public/images/my photo.jpg";

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

export default function About() {


  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl md:text-6xl flex-col font-bold mb-8 grid grid-row-3  text-center py-3">
              <span className="block">Passion</span>
              <span className="block">Fuels</span>
              <span className="block">Purpose!</span>
            </h1>
            <div className="absolute right-4 top-24 lg:hidden">
              <Link href="/contact">
                <Button className="rounded-full group relative overflow-hidden">
                  <span className="relative z-10">Hire Me</span>
                  <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={fadeIn}>
            <div>
              <h2 className="text-2xl font-bold mb-4">BIOGRAPHY</h2>
              <p className="text-muted-foreground">
                I'm{" "}
                <span className="font-semibold text-primary">Rahul Kumar</span>,
                a{" "}
                <span className="font-semibold">
                  B.Tech CSE student (7.52 CGPA)
                </span>{" "}
                at Netaji Subhash Engineering College with a . My technical
                journey combines strong{" "}
                <span className="font-semibold">
                  problem-solving skills (450+ LeetCode/GfG)
                </span>{" "}
                with hands-on experience in{" "}
                <span className="font-semibold">full-stack development</span>{" "}
                across multiple projects.
              </p>

              <p className="text-muted-foreground mt-4">
                My technical arsenal includes:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                  <li>
                    <span className="font-medium">Frontend:</span> React,
                    Tailwind CSS, Bootstrap
                  </li>
                  <li>
                    <span className="font-medium">Backend:</span> Node.js,
                    Express, REST APIs, SpringBoots
                  </li>
                  <li>
                    <span className="font-medium">Databases:</span> MongoDB, SQL
                  </li>
                  <li>
                    <span className="font-medium">Languages:</span> Java,
                    JavaScript, C++
                  </li>
                </ul>
              </p>

              <p className="text-muted-foreground mt-4">
                Currently seeking{" "}
                <span className="font-semibold">
                  entry-level developer roles
                </span>{" "}
                where I can contribute my technical skills and grow under
                mentorship. My unique combination of{" "}
                <span className="font-semibold">analytical thinking</span> (from
                DSA practice) and{" "}
                <span className="font-semibold">practical implementation</span>{" "}
                (through projects) makes me ready to deliver value from day one.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <motion.div
                className="p-4 border rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </motion.div>
              <motion.div
                className="p-4 border rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-3xl font-bold text-primary">800+</p>
                <p className="text-sm text-muted-foreground">
                  DSA Problems Solved
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Web</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    HTML
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    CSS
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    JavaScript
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    ReactJS
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    NextJS
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Node.js
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Express.js
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    MongoDB
                  </motion.li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Others</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    GitHub
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Postman
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    IntelliJ-IDEA
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    VS Code
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Microsoft Office
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Tailwind CSS
                  </motion.li>

                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  ></motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    REST APIs
                  </motion.li>
                  <motion.li
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Problem Solving
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {/* B.Tech */}
              <motion.div
                className="bg-card p-6 rounded-lg border shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Bachelor of Technology in Computer Science & Engineering
                    </h3>
                    <p className="text-muted-foreground">
                      Netaji Subhash Engineering College, Kolkata
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Relevant Coursework: Data Structures & Algorithms, DBMS,
                      Computer Networks, OOPs, Operating Systems, Software
                      Engineering
                    </p>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                    2022 - 2025 | CGPA: 7.52
                  </div>
                </div>
              </motion.div>

              {/* Diploma */}
              <motion.div
                className="bg-card p-6 rounded-lg border shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Diploma in Electrical Engineering
                    </h3>
                    <p className="text-muted-foreground">
                      Government Polytechnic College, Muzaffarpur
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Developed strong analytical skills through electrical
                      circuit design and power systems coursework
                    </p>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                    2019 - 2022 | CGPA: 8.04
                  </div>
                </div>
              </motion.div>

              {/* Class X */}
              <motion.div
                className="bg-card p-6 rounded-lg border shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">
                      All India Secondary School Examination (Class X)
                    </h3>
                    <p className="text-muted-foreground">
                      Mother's Pride International School, Begusarai (CBSE)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Foundation in mathematics and science that paved way for
                      engineering
                    </p>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                    2019 | Percentage: 84%
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Oasis Infobyte */}
            <motion.div
              className="relative pl-8 border-l-2 border-primary/30"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="font-semibold">
                Frontend Development Intern @ Oasis Infobyte
              </h3>
              <p className="text-muted-foreground">
                Jul 2023 - Aug 2023 · Remote
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                <li>
                  Created{" "}
                  <span className="font-medium">
                    3 interactive web projects
                  </span>{" "}
                  including a temperature converter and todo application
                </li>
                <li>
                  Implemented{" "}
                  <span className="font-medium">DOM manipulation</span> and
                  event handling for dynamic user experiences
                </li>
                <li>
                  Participated in weekly code reviews, improving code quality by
                  25%
                </li>
                <li>
                  Completed{" "}
                  <span className="font-medium">
                    student internship program
                  </span>{" "}
                  with focus on practical web development skills
                </li>
              </ul>
              
            </motion.div>
            {/* CipherByte Technologies */}
            <motion.div
              className="relative pl-8 border-l-2 border-primary/30"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="font-semibold">
                Web Development Intern @ CipherByte Technologies
              </h3>
              <p className="text-muted-foreground">
                Aug 2023 - Sep 2023 · Remote
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                <li>
                  Developed responsive web interfaces using{" "}
                  <span className="font-medium">
                    HTML5, CSS3, and JavaScript
                  </span>{" "}
                  that improved user engagement
                </li>
                <li>
                  Collaborated on a team project to build a{" "}
                  <span className="font-medium">customer feedback portal</span>{" "}
                  with form validation
                </li>
                <li>
                  Gained hands-on experience with{" "}
                  <span className="font-medium">Bootstrap framework</span> and
                  version control using Git
                </li>
                <li>
                  Completed training modules on{" "}
                  <span className="font-medium">React.js fundamentals</span> and
                  REST API concepts
                </li>
              </ul>
             
            </motion.div>

           

            {/* Project Experience */}
            <motion.div
              className="relative pl-8 border-l-2 border-primary/30"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="font-semibold">Academic Projects</h3>
              <p className="text-muted-foreground">
                2022 - Present · Netaji Subhash Engineering College
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                <li>
                  <span className="font-medium">AI Image Generator</span>: MERN
                  stack application with 1000+ generated images
                </li>
                <li>
                  <span className="font-medium">Sorting Visualizer</span>: React
                  application demonstrating 5+ algorithms with custom controls
                </li>
                <li>
                  <span className="font-medium">E-commerce Platform</span>:
                  Full-stack implementation with cart and product management
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <Button className="rounded-full group relative overflow-hidden">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
