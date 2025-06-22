import SEO from '../components/SEO'

export default function Projects() {
  const projects = [
    {
      name: "AI Classroom Assistant",
      description: "An AI-powered tool to help teachers create personalized learning experiences",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/suraj/ai-classroom"
    },
    {
      name: "OCR Text Extractor",
      description: "Extract and process text from images using advanced OCR technology",
      tech: ["Python", "Tesseract", "FastAPI"],
      github: "https://github.com/suraj/ocr-extractor"
    }
  ]

  return (
    <>
      <SEO title="Projects" description="My latest projects and tools" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.name} className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}