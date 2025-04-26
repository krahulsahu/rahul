"use client"

import Link from "next/link"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

function formatDateToIST(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}


export default function ArticleCard({ article, featured = false }) {
  return (
    <motion.div
      className={`${
        featured
          ? "space-y-3 bg-card p-6 rounded-lg shadow-md border"
          : "space-y-2 border-b pb-4"
      }`}
      whileHover={{ y: featured ? -5 : 0, x: featured ? 0 : 3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start">
        <h3
          className={featured ? "text-2xl font-bold" : "text-xl font-semibold"}
        >
          {article.title}
        </h3>
        {featured && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            {article.readTime} read
          </span>
        )}
      </div>
      <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-muted-foreground">
          {article.createdAt ? formatDateToIST(article.createdAt) : ""}
        </span>
        <Link
          href={article.link || "#"}
          className="text-sm flex items-center gap-1 text-primary group"
        >
          Read More
          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    readTime: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  featured: PropTypes.bool,
}

ArticleCard.defaultProps = {
  featured: false,
}
