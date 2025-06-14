import React from 'react';
import { motion } from 'framer-motion';
import { Database, ArrowRight, Search, Shield, Brain, Bot, Zap } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section id="features" className="py-40 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-500 scroll-mt-20">
      {/* Minimal background element */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/3 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Subtle intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-500 dark:text-gray-400 text-lg font-medium tracking-wide mb-8"
          >
            Centralized Intelligence
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8"
          >
            Your company's brain.
           
            <br />
            <motion.span 
              className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
               Always learning. Always ready.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Every meeting, proposal, and client touchpoint becomes part of your 
            organization's collective intelligence. Searchable. Actionable. Instant.
          </motion.p>
        </motion.div>

        {/* Three Key Features - Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {[
            {
              icon: Bot,
              title: "Data Ingestion Bot",
              description: "Automatically captures and processes all your client communications, meetings, and documents in real-time.",
              color: "text-blue-500"
            },
            {
              icon: Brain,
              title: "Knowledge Hub",
              description: "Centralized intelligence that learns from every interaction, building your organization's collective consulting expertise.",
              color: "text-purple-500"
            },
            {
              icon: Zap,
              title: "AI Actionable Tools",
              description: "Generate SOWs, proposals, and follow-up emails instantly using contextual intelligence from your knowledge base.",
              color: "text-green-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                className="flex flex-col items-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Single Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >{/* Central value proposition */}
            
        </motion.div>

        {/* Clean CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="inline-flex items-center space-x-3 text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium">Explore the features</span>
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

export default DashboardPreview;