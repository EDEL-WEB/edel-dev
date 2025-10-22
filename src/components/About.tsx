import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '4' },
  ]

  return (
    <section id="about" className="py-20 bg-dark-200/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating
            innovative solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.img
              src="/your-photo.jpg" // replace with actual path in /public
              alt="Your photo"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a recent software development graduate with a strong drive to turn ideas into reliable, scalable, and human-centered digital experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey into tech began with a deep curiosity — I wanted to understand how everyday apps work under the hood, from elegant interfaces to efficient backends. That curiosity quickly grew into a passion for building complete systems, leading me to specialize in full-stack development using technologies like React, Flask, and Git.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Leadership', 'Agile Development', 'UI/UX Design'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          {stats.map(({ icon: Icon, label, value }, index) => (
            <div key={label} className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4"
              >
                <Icon size={32} className="text-primary-500" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
              <div className="text-gray-600 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About