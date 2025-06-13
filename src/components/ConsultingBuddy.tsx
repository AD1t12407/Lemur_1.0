import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

const ConsultingBuddy: React.FC = () => {
  return (
    <section className="relative py-40 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/2 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Content - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          {/* Subtle intro line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-500 dark:text-gray-400 text-lg font-medium tracking-wide mb-8"
          >
            Human Intelligence + AI Precision
          </motion.div>

          {/* Main headline - Apple style */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-12"
          >
            Your consulting buddy.
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              But smarter.
            </motion.span>
          </motion.h2>

          {/* Simplified subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-20"
          >
            We're not replacing consultants—we're making them superhuman. 
            <span className="inline-flex items-center space-x-1 mx-1">
              <img
                src="/logo_lemur.png"
                alt="Lemur"
                className="w-5 h-5 object-contain"
              />
              <span>Lemur</span>
            </span> 
            amplifies your expertise with perfect memory and instant insights.
          </motion.p>
        </motion.div>

        {/* Single Feature Showcase - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-16 text-center shadow-lg">
            
            {/* Central message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Like having a senior consultant who 
                <span className="text-blue-500"> never sleeps</span>, 
                <span className="text-purple-500"> never forgets</span>, and 
                <span className="text-green-500"> gets smarter every day</span>.
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400">Always Available</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-500 mb-2">∞</div>
                  <div className="text-gray-600 dark:text-gray-400">Perfect Memory</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-500 mb-2">10x</div>
                  <div className="text-gray-600 dark:text-gray-400">Faster Insights</div>
                </motion.div>
              </div>

              {/* Testimonial */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic"
              >
                "<span className="inline-flex items-center space-x-1 mx-1">
                  <img
                    src="/logo_lemur.png"
                    alt="Lemur"
                    className="w-5 h-5 object-contain"
                  />
                  <span>Lemur</span>
                </span> doesn't replace our thinking—it amplifies it."
              </motion.blockquote>
              
              <div className="flex items-center justify-center space-x-3 text-gray-500 dark:text-gray-400">
                <Users className="h-5 w-5" />
                <span className="font-medium">Sarah Chen, Partner at McKinsey & Company</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA - Clean Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="inline-flex items-center space-x-3 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium flex items-center space-x-1">
              <span>See how</span>
              <img
                src="/logo_lemur.png"
                alt="Lemur"
                className="w-5 h-5 object-contain mx-1"
              />
              <span>Lemur transforms consulting</span>
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ConsultingBuddy; 