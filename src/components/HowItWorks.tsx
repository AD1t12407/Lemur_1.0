import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Connect",
      description: "One-click integration with your existing tools. Gmail, Slack, Zoom—everything syncs seamlessly.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      title: "Learn",
      description: "AI processes and organizes every conversation, meeting, and document into intelligent knowledge.",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      title: "Transform",
      description: "Your team accesses instant insights, context, and suggestions exactly when they need them.",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-40 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 overflow-hidden scroll-mt-20">
      {/* Minimal background element */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/3 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            How It Works
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8"
          >
            Simple by design.
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Powerful by nature.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            From data ingestion to intelligent insights—see how Lemur transforms 
            your company's communication into actionable intelligence.
          </motion.p>
        </motion.div>

        {/* Steps - Clean 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Step number and icon */}
              <motion.div
                className="flex flex-col items-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <step.icon className="h-10 w-10 text-gray-700 dark:text-gray-300" />
                </div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 tracking-wider">
                  STEP {step.number}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
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
        >
          <div className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-16 text-center shadow-lg">
            
            {/* Central value proposition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Built for every team.
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  Designed for everyone.
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                From sales to support, every department benefits from centralized intelligence 
                that understands your unique workflows and communication patterns.
              </p>

              {/* Key benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">10x</div>
                  <div className="text-gray-600 dark:text-gray-400">Faster Research</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400">Always Learning</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                  <div className="text-gray-600 dark:text-gray-400">Context Aware</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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
            className="inline-flex items-center space-x-3 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium">See it in action</span>
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

export default HowItWorks;