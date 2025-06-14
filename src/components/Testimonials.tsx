import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-40 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Minimal background element */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/2 dark:bg-purple-500/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-500 dark:text-gray-400 text-lg font-medium tracking-wide mb-8"
          >
            Built for the Future
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8"
          >
            Imagine the
            <br />
            <motion.span 
              className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              possibilities.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Envision how your team could transform operations 
            with centralized intelligence at your fingertips.
          </motion.p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-16 text-center shadow-lg">
            
            {/* Central vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <blockquote className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-12 leading-tight">
                "Like having a senior consultant who{' '}
                <span className="text-blue-500">never sleeps</span>,{' '}
                <span className="text-purple-500">never forgets</span>, and{' '}
                <span className="text-green-500">gets smarter every day</span>."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3 text-gray-500 dark:text-gray-400 mb-12">
                <Users className="h-5 w-5" />
                <span className="font-medium">The future of consulting intelligence</span>
              </div>

              {/* Potential outcomes grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">40%</div>
                  <div className="text-gray-600 dark:text-gray-400">Potential Time Savings</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-500 mb-2">75%</div>
                  <div className="text-gray-600 dark:text-gray-400">Research Efficiency Target</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-500 mb-2">10x</div>
                  <div className="text-gray-600 dark:text-gray-400">Intelligence Amplification</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Building the future of business intelligence
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Next-Gen AI", "Smart Analytics", "Unified Intelligence", "Adaptive Learning", "Future Ready"].map((concept, index) => (
              <motion.div
                key={concept}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.05
                }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-3 transition-all duration-300 shadow-sm"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">{concept}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;