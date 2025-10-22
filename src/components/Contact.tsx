import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      
      const emailBody = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0ASubject: ${data.subject}%0D%0A%0D%0AMessage:%0D%0A${data.message}`
      
      // Open email client
      window.open(`mailto:markedel025@email.com?subject=${encodeURIComponent(data.subject)}&body=${emailBody}`, '_blank')
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'markedel025@email.com',
      href: 'mailto:markedel025@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 727 907 231',
      href: 'tel:+254727907231'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-primary-500/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <Icon size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                    <div className="text-gray-900 dark:text-white font-medium">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-900 dark:text-white"
                  placeholder="Project Discussion"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Mail size={20} />
                      <span>Send Email</span>
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={() => {
                    const message = `Hi EDEL! I'm ${register('name').name || 'interested in your services'}. ${register('message').name || 'I would like to discuss a project with you.'}`
                    window.open(`https://wa.me/254727907231?text=${encodeURIComponent(message)}`, '_blank')
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-6 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </motion.button>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact