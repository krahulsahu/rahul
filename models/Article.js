import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    excerpt: String,
    readTime: String,
    link: String,
  },
  { timestamps: true }
);

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
