import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Server, CheckCircle, ArrowRight } from 'lucide-react';

const Security: React.FC = () => {
  const consultingSecurity = [
    {
      icon: Shield,
      title: "Client-Grade Protection",
      description: "The same security standards your Fortune 500 clients demand",
      color: "text-green-500"
    },
    {
      icon: Lock,
      title: "Simple Access Control", 
      description: "Grant client access without exposing everything else",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      title: "Confidentiality First",
      description: "Every client project stays completely separate and secure",
      color: "text-purple-500"
    }
  ];

  const consultingCompliance = [
    "SOC 2 Type II",
    "GDPR Ready", 
    "Client NDAs",
    "Data Isolation",
    "Audit Trails", 
    "CCPA Compliant"
  ];

  return (
    <section id="security" className="py-40 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Minimal background element */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-green-500/2 dark:bg-green-500/3 rounded-full blur-3xl"></div>
      
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
            Client Trust & Compliance
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8"
          >
            Win bigger clients
            <br />
            with <motion.span 
              className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              enterprise security.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Small firms lose big deals over security questionnaires. 
            With Lemur, you'll pass every client security review—automatically.
          </motion.p>
        </motion.div>

        {/* Three Key Security Features for Consultants */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {consultingSecurity.map((feature, index) => (
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
          className="mb-32"
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
                Security that sells.
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  Compliance that closes deals.
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                When enterprise clients ask about your data security practices, you'll have the same answers 
                as McKinsey and Deloitte—without their IT budgets.
              </p>

              {/* Key benefits for consulting firms */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-green-500 mb-2">Bank-Level</div>
                  <div className="text-gray-600 dark:text-gray-400">Encryption</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">Zero</div>
                  <div className="text-gray-600 dark:text-gray-400">Failed Audits</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-500 mb-2">Complete</div>
                  <div className="text-gray-600 dark:text-gray-400">Client Isolation</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Compliance for Consultants */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Pass Every Security Review
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {consultingCompliance.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clean CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="inline-flex items-center space-x-3 text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 cursor-pointer"
          >
            <span className="text-lg font-medium">Get your security certification</span>
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

export default Security;