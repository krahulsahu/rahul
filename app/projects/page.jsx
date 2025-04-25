import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import FeaturedProject from "@/components/featured-project"
import { projects } from "@/data/projects"

export default function Projects() {
  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="block">Imagination</span>
            <span className="block">Trumps</span>
            <span className="block">Knowledge!</span>
          </h1>
          <h2 className="text-2xl font-bold">Featured Project</h2>
        </div>

        <FeaturedProject project={featuredProject} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
