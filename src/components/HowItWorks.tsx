import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Brain, Zap, FileText, Mail, Users, Clock, Database, Bot } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-40 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/3 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-500 dark:text-gray-400 text-lg font-medium tracking-wide mb-8"
          >
            How It Works
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8"
          >
            From meeting to
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              proposal magic.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Watch how Lemur transforms every client interaction into actionable intelligence.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20 hidden lg:block"></div>
          
          {/* Step 1: Meeting Integration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-32 relative"
          >
            {/* Step Number - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-20 hidden lg:block">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-white dark:border-gray-950">
                1
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1 lg:pr-16">
                <div className="flex items-center mb-6 lg:hidden">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Lemur Joins Your Meetings
                  </h3>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 hidden lg:block">
                  Lemur Joins Your Meetings
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Our AI assistant seamlessly integrates with your calendar and joins every client meeting. 
                  It captures transcripts, tracks action items, and syncs with all your communication platforms.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">Auto-syncs with Google Calendar & Outlook</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">Captures meeting transcripts & insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">Tracks follow-ups & commitments</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-2 lg:pl-16">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Calendar Integration & Sync</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google Calendar</span>
                      <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Connected</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Outlook Sync</span>
                      <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Connected</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Auto-Sync</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Active</span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Synced 2 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Centralized Brain */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-32 relative"
          >
            {/* Step Number - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-20 hidden lg:block">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-white dark:border-gray-950">
                2
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 lg:pl-16">
                <div className="flex items-center mb-6 lg:hidden">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Centralized Brain - We Learn About You
                  </h3>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 hidden lg:block">
                  Centralized Brain - We Learn About You
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Our AI builds contextual intelligence from every client interaction, past proposals, and project outcomes. 
                  It learns your consulting style, client preferences, and successful project patterns to become your 
                  personalized consulting assistant.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">Previous Proposals & SOWs</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm ml-8 -mt-2">
                    Learns from your successful proposals to replicate winning patterns for new clients.
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">Client Relationship History</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm ml-8 -mt-2">
                    Remembers client preferences, communication styles, and project requirements.
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">Project Outcomes & Insights</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm ml-8 -mt-2">
                    Tracks what worked, what didn't, and applies lessons to future engagements.
                  </div>
                </div>
              </div>
              <div className="lg:order-1 lg:pr-16">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <Brain className="h-6 w-6 text-purple-500 mr-3" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Consulting Intelligence</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-1">47</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Active Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-1">312</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Proposals Analyzed</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Intelligence Updates</h5>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Client communication patterns identified</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Successful proposal templates updated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Industry expertise mapping enhanced</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Intelligence Score</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="w-12 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-sm font-semibold text-purple-500">87%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: AI Agent Outputs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 relative"
          >
            {/* Step Number - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 z-20 hidden lg:block">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-white dark:border-gray-950">
                3
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1 lg:pr-16">
                <div className="flex items-center mb-6 lg:hidden">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    AI Agents Generate Everything
                  </h3>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 hidden lg:block">
                  AI Agents Generate Everything
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Using all the contextual intelligence, our AI agents automatically generate SOWs, 
                  follow-up emails, and comprehensive proposals tailored to each client's specific needs and history.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Intelligent SOW generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Personalized email drafts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Context-aware proposals</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-2 lg:pl-16">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Bot className="h-6 w-6 text-green-500 mr-3" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">AI Agent Outputs</h4>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">SOW Generated</span>
                        <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Ready</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">TechCorp Q1 Digital Transformation</span>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Draft</span>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Generated</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Follow-up on meeting discussion points</span>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Proposal</span>
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">In Progress</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Using previous project insights & client prefs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
         
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;