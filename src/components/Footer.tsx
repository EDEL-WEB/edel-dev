import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, MessageCircle, Instagram } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/EDEL-WEB', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/edel-omondi-50760734b/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/254727907231', label: 'WhatsApp' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: 'mailto:markedel025@email.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-200 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              &lt;EDEL /&gt;
            </motion.div>
            <p className="text-gray-400 mb-6">
              Recent software development graduate passionate about turning ideas into reliable, scalable digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-2 bg-white/10 rounded-full hover:bg-primary-500/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>markedel025@email.com</p>
              <p>+254 727 907 231</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 EDEL. All rights reserved.
          </p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 text-sm flex items-center space-x-1"
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and React</span>
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer