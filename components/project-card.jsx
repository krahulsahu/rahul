"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="border rounded-lg overflow-hidden group bg-card shadow-md"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-background/80 text-foreground px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies?.length > 3 && (
                <span className="text-xs bg-background/80 text-foreground px-2 py-1 rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 pt-2">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="default" size="sm" className="w-full group">
              <span className="flex items-center gap-1">
                Demo
                <ExternalLink className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="group">
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
