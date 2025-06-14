import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Video, FileText, Calendar, Database, Zap, Globe, ArrowRight, Users, Briefcase } from 'lucide-react';

const Integrations: React.FC = () => {
  const consultingTools = [
    { name: 'Google Workspace', icon: Mail, color: 'text-red-500 dark:text-red-400' },
    { name: 'Microsoft Teams', icon: Video, color: 'text-blue-500 dark:text-blue-400' },
    { name: 'Slack', icon: MessageSquare, color: 'text-purple-500 dark:text-purple-400' },
    { name: 'Zoom', icon: Users, color: 'text-blue-600 dark:text-blue-500' },
    { name: 'Salesforce', icon: Briefcase, color: 'text-orange-500 dark:text-orange-400' }
  ];

  return (
    <section id="integrations" className="py-40 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-500">
      {/* Minimal background element */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/3 dark:bg-green-500/5 rounded-full blur-3xl"></div>
      
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
            No Workflow Disruption
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8"
          >
            Plugs into your
            <br />
            <motion.span 
              className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              existing toolkit.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            You don't need new tools. You need your existing tools to work smarter. 
            Lemur connects everything you already use—seamlessly.
          </motion.p>
        </motion.div>

        {/* Integration Icons - Floating Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-32 max-w-4xl mx-auto justify-items-center">
          {consultingTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              className="group text-center"
            >
              <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                <tool.icon className={`h-10 w-10 ${tool.color}`} />
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-sm text-gray-600 dark:text-gray-400 mt-3 block font-medium"
              >
                {tool.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Three Key Benefits for Consultants */}
       
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
                Works with your existing
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  consulting toolkit.
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Lemur integrates seamlessly with the tools you already use daily. No workflow disruption, 
                no learning curve - just instant intelligence layered on top of your existing processes.
              </p>

              {/* Key integration benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">30sec</div>
                  <div className="text-gray-600 dark:text-gray-400">Setup Time</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-500 mb-2">Zero</div>
                  <div className="text-gray-600 dark:text-gray-400">Training Required</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-500 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400">Platform Integrations</div>
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
            className="inline-flex items-center space-x-3 text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium">Connect your tools in minutes</span>
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

export default Integrations;