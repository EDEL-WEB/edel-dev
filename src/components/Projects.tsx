import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Bot Battlr Client",
      description: "An interactive single-page React app where users can view, enlist, release, and discharge battle bots. Includes sorting, filtering, and class-based restrictions for army enlistment.",
      tech: ["React", "JSON Server", "CSS", "JavaScript"],
      github: "https://github.com/EDEL-WEB/bot-battrl-client",
      live: "https://bot-battrl-client.vercel.app",
      featured: true
    },
    {
      title: "Whack-a-Mole Frontend",
      description: "A fun, responsive game built with React and Vite. Players compete to whack moles within a time limit. Designed with clean UI, game logic, and score tracking.",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/EDEL-WEB/whack-a-mole-Frontend",
      live: "https://whack-a-mole-frontend.vercel.app",
      featured: true
    },
    {
      title: "Job Tracker App",
      description: "A full-featured job tracking application where users can create, edit, and manage job applications. Includes dashboard analytics, search, filters, and persistence with JSON Server.",
      tech: ["React", "JSON Server", "Tailwind CSS", "Recharts"],
      github: "https://github.com/EDEL-WEB/jobTrackerApp",
      live: "https://jobtrackerapp.vercel.app",
      featured: true
    },
    {
      title: "Social Media Profile Generator",
      description: "A single-page app that dynamically generates random social media profiles using the Random User API. Users can fetch and view random profile details with a responsive design for both mobile and desktop.",
      tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
      github: "https://github.com/EDEL-WEB/social-profile-generator",
      live: "https://edel-web.github.io/social-profile-generator/",
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-dark-200/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all"
          >
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects