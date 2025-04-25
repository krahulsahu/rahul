"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function FeaturedProject({ project }) {
  const fallbackImage = "/images/default-project.jpg"; // Replace with your own fallback

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image || fallbackImage}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-4 left-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-background/80 text-foreground px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        <motion.h3
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="flex gap-4 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="group">
              <span className="flex items-center gap-2">
                View Project
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="group">
                <span className="flex items-center gap-2">
                  Source Code
                  <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </span>
              </Button>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

FeaturedProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    github: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
