import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn more about Suraj Kumar" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p>
            Hi, I'm Suraj Kumar. I'm passionate about AI, education technology, 
            and building tools that make learning more accessible.
          </p>
          <p>
            I write about the intersection of technology and education, 
            particularly how AI can transform learning experiences in India and beyond.
          </p>
          <p>
            When I'm not coding or writing, you can find me exploring new technologies 
            and thinking about how to make education more engaging and effective.
          </p>
        </div>
      </div>
    </>
  )
}