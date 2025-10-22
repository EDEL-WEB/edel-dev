import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

type Skill = {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  examples?: { name: string; url: string }[]
}

const skillGroups: Record<string, Skill[]> = {
  Frontend: [
    { name: 'React', level: 'Intermediate', examples: [{ name: 'Bot Battlr Client', url: 'https://github.com/EDEL-WEB/bot-battrl-client' }] },
    { name: 'Vite', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Intermediate' }
  ],
  Backend: [
    { name: 'JSON Server', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Postgres', level: 'Intermediate' },
    { name: 'SQLite', level: 'Intermediate' }
  ],
  Tools: [
    { name: 'Git', level: 'Intermediate' },
    { name: 'Vercel / Netlify', level: 'Intermediate' },
    { name: 'Render', level: 'Intermediate' },
    { name: 'Jest / Testing', level: 'Intermediate' }
  ]
}

const levelColor = (level: Skill['level']) => {
  switch (level) {
    case 'Expert':
      return 'bg-green-500 text-white'
    case 'Advanced':
      return 'bg-emerald-500 text-white'
    case 'Intermediate':
      return 'bg-yellow-500 text-black'
    default:
      return 'bg-gray-300 text-black'
  }
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skillGroups).map(([groupName, skills]) => (
            <div key={groupName} className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">{groupName}</h3>

              <ul className="space-y-3">
                {skills.map((s) => (
                  <li key={s.name} className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="font-medium">{s.name}</span>
                      </div>

                      {s.examples?.length ? (
                        <div className="mt-1 flex flex-wrap gap-2">
                          {s.examples.map((e) => (
                            <a
                              key={e.name}
                              href={e.url}
                              className="text-sm text-primary-400 hover:underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {e.name}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <span className={`px-3 py-1 rounded-full text-sm ${levelColor(s.level)}`}>
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills