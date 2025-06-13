import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Features', id: 'features' },
    { name: 'How it Works', id: 'how-it-works' }
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl opacity-90 dark:opacity-100 transition-all duration-500"></div>
              <img 
                src="/logo_lemur.png" 
                alt="Lemur AI" 
                className="relative h-12 w-12 object-contain p-1 transition-all duration-500"
              />
            </motion.div>
            
            <motion.span 
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-all duration-500"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lemur
              <motion.span 
                className="text-blue-500 dark:text-blue-400 transition-colors duration-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                AI
              </motion.span>
            </motion.span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleSmoothScroll(item.id)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium text-lg relative group bg-transparent border-none cursor-pointer"
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <ThemeToggle />
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-500 shadow-lg hover:shadow-blue-500/30 border border-blue-500/20"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get Early Access
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
      >
        <motion.div 
          className="px-6 py-8 space-y-6"
          initial={{ y: -20 }}
          animate={{ y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleSmoothScroll(item.id)}
              className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 text-lg font-medium py-2 hover:pl-2 bg-transparent border-none cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              whileHover={{ x: 8 }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              Get Early Access
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;