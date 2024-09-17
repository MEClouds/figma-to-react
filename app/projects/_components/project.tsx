// components/ProjectsGrid.tsx
import ProjectCard from "./card"

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Shopping-Website",
      description:
        "store-front built with Next.js and Tailwind CSS from figma design.",
      link: "projects/shopping-website",
      image: "/Shopping App.png",
      figma:
        "https://www.figma.com/design/z8CQt6aL9WlYWpNrW0r8SI/Shopping-Website-(Community)?node-id=2-867&node-type=canvas&t=to88J7fD2hmE5fQ2-0",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing web development skills.",
      link: "#",
      image: "",
      figma: "",
    },
    // Add more projects as needed
  ]

  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            image={project.image}
            figma={project.figma}
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}
