// pages/index.tsx

import Hero from "./_components/hero"
import ProjectsGrid from "./_components/project"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsGrid />
    </div>
  )
}
