import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"
import { articles } from "@/data/articles"

export default function Articles() {
  const featuredArticles = articles.slice(0, 2)
  const otherArticles = articles.slice(2)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="block">Words</span>
            <span className="block">Can</span>
            <span className="block">Change The</span>
            <span className="block">World!</span>
          </h1>
          <h2 className="text-2xl font-bold">All Articles</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>

        <div className="space-y-6">
          {otherArticles.map((article) => (
            <div key={article.id} className="border-b pb-6">
              <p className="text-sm text-muted-foreground">{article.date}</p>
              <h3 className="text-xl font-semibold mt-1">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
