import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO 
        title="About" 
        description="Publixly - Exploring personal growth, productivity, and mindful living through thoughtful writing and insights."
        keywords="Publixly, personal development, productivity, mindfulness, self-improvement, blog"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Welcome to my corner of the internet</p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Vision</h2>
            <p className="text-lg leading-relaxed">
              I believe in the power of intentional living and continuous growth. Through this blog, 
              I explore the delicate balance between ambition and contentment, sharing insights on 
              personal development, productivity, and mindful living.
            </p>
          </div>

          <h2>What You'll Find Here</h2>
          <ul>
            <li><strong>Personal Growth:</strong> Reflections on self-improvement, habits, and mindset shifts</li>
            <li><strong>Productivity:</strong> Practical strategies for meaningful work and life balance</li>
            <li><strong>Mindfulness:</strong> Thoughts on presence, awareness, and intentional living</li>
            <li><strong>Life Lessons:</strong> Stories and insights from everyday experiences</li>
          </ul>

          <h2>My Approach</h2>
          <p>
            I write from experience, not theory. Every post comes from genuine reflection on 
            challenges I&apos;ve faced, lessons I&apos;ve learned, and insights I&apos;ve gained along the way. 
            My goal is to share authentic, actionable wisdom that resonates with your own journey.
          </p>

          <h2>Beyond Writing</h2>
          <p>
            When I&apos;m not writing, I&apos;m exploring new ideas, reading voraciously, and constantly 
            learning. I believe in the compound effect of small, consistent actions and the 
            transformative power of deep reflection.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
            <h3>Let&apos;s Connect</h3>
            <p>
              I&apos;d love to hear your thoughts on any of my posts. Feel free to reach out if 
              something resonates with you or if you have insights to share. Growth happens 
              best in community.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}