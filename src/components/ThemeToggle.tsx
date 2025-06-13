import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-18 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-purple-900 rounded-full p-1.5 transition-all duration-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.08, y: -1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Enhanced background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark 
            ? "0 0 25px rgba(59, 130, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.2)" 
            : "0 0 25px rgba(59, 130, 246, 0.3), 0 0 50px rgba(99, 102, 241, 0.15)"
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      
      {/* Toggle circle with enhanced styling */}
      <motion.div
        className="relative w-7 h-7 bg-white dark:bg-gray-900 rounded-full shadow-2xl flex items-center justify-center border-2 border-blue-300 dark:border-blue-400"
        animate={{
          x: isDark ? 28 : 0,
          backgroundColor: isDark ? "#111827" : "#ffffff",
          borderColor: isDark ? "#60a5fa" : "#93c5fd",
          boxShadow: isDark 
            ? "0 8px 25px rgba(59, 130, 246, 0.3)" 
            : "0 8px 25px rgba(99, 102, 241, 0.2)"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.8
        }}
      >
        {/* Icon container with enhanced rotation and scaling */}
        <motion.div
          animate={{
            rotate: isDark ? 360 : 0,
            scale: isDark ? 1 : 1.1,
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            stiffness: 200
          }}
        >
          {isDark ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.3, rotate: 180 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Moon className="h-4 w-4 text-blue-400 fill-current drop-shadow-sm" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.3, rotate: -180 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sun className="h-4 w-4 text-yellow-500 fill-current drop-shadow-sm" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Enhanced background icons with better positioning */}
      <motion.div
        className="absolute left-2.5 top-1/2 transform -translate-y-1/2"
        animate={{ 
          opacity: isDark ? 0.2 : 0.7,
          scale: isDark ? 0.7 : 1,
          rotate: isDark ? -30 : 0
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Sun className="h-3.5 w-3.5 text-yellow-400 drop-shadow-sm" />
      </motion.div>
      
      <motion.div
        className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
        animate={{ 
          opacity: isDark ? 0.7 : 0.2,
          scale: isDark ? 1 : 0.7,
          rotate: isDark ? 0 : 30
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Moon className="h-3.5 w-3.5 text-blue-300 drop-shadow-sm" />
      </motion.div>

      {/* Subtle sparkle effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark 
            ? "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            : "radial-gradient(circle at 30% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)"
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;