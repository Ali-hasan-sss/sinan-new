import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'sectors', label: 'Sectors' },
    { id: 'services', label: 'Projects' },
    { id: 'media', label: 'Media' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto pr-6 pl-0">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation — Home ببداية الهيدر، والباقي يتوزع بالتساوي */}
          <nav className="hidden md:flex items-center w-full">
            {/* Home — ببداية الهيدر */}
            <motion.div
              key="home"
              className="flex-shrink-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-normal transition-colors ${
                  activeSection === 'home'
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Home
              </button>
            </motion.div>
            {/* الباقي — توزيع بالتساوي */}
            <div className="flex-1 flex items-center justify-evenly">
              {navItems.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-normal transition-colors ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <motion.button
                className="text-sm font-normal text-white/70 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              >
                English
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden pb-4 flex flex-col gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm transition-colors ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <motion.button
                className="text-sm text-white/60 hover:text-white transition-colors text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                English
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}