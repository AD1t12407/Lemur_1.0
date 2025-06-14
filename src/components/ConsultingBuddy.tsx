import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

const ConsultingBuddy: React.FC = () => {
  return (
    <section className="relative py-40 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/2 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        

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