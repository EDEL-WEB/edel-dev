import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Github, Linkedin, MessageCircle, Mail } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            &lt;EDEL /&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="hover:text-primary-500 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <motion.a
                href="https://github.com/EDEL-WEB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full hover:bg-primary-500/20"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://wa.me/254727907231"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full hover:bg-primary-500/20"
              >
                <MessageCircle size={18} />
              </motion.a>
              <motion.a
                href="mailto:markedel025@email.com"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full hover:bg-primary-500/20"
              >
                <Mail size={18} />
              </motion.a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-primary-500/20"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-primary-500/20"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-primary-500/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header