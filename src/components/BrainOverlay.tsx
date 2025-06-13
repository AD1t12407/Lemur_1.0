import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Bot, X, ArrowRight, Search, Zap, Brain, FileText, FolderOpen, MessageSquare, Users, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export default function BrainOverlay() {
  const [activeSection, setActiveSection] = useState<'knowledge' | 'agents' | null>(null);
  const [flowState, setFlowState] = useState<'input' | 'processing' | 'output'>('input');
  const [dataPoints, setDataPoints] = useState<Array<{id: number, x: number, y: number, type: 'knowledge' | 'insight'}>>([]);

  const handleSectionClick = (section: 'knowledge' | 'agents') => {
    setActiveSection(section);
  };

  const closeModal = () => {
    setActiveSection(null);
  };

  // Continuous flow animation cycle
  useEffect(() => {
    const cycle = setInterval(() => {
      setFlowState(prev => {
        if (prev === 'input') return 'processing';
        if (prev === 'processing') return 'output';
        return 'input';
      });
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  // Generate flowing data points
  useEffect(() => {
    const generateDataPoints = () => {
      const points = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 400 + 150,
        y: Math.random() * 100 + 100,
        type: Math.random() > 0.5 ? 'knowledge' : 'insight' as 'knowledge' | 'insight'
      }));
      setDataPoints(points);
    };

    generateDataPoints();
    const interval = setInterval(generateDataPoints, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30 relative overflow-hidden transition-all duration-700">
      {/* Background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 3 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-8"
          >
            Knowledge becomes
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              intelligence.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Your consulting knowledge transforms into intelligent insights that clients pay premium for.
          </motion.p>
        </motion.div>

        {/* Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto mb-20"
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-16 shadow-2xl">
            
            {/* Flow Container */}
            <div className="flex items-center justify-center space-x-16">
              
              {/* Input */}
              <motion.div
                className="flex flex-col items-center text-center"
                animate={{
                  scale: flowState === 'input' ? 1.05 : 1,
                  opacity: flowState === 'input' ? 1 : 0.8
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-3xl flex items-center justify-center cursor-pointer shadow-xl mb-6"
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => handleSectionClick('knowledge')}
                  animate={{
                    boxShadow: flowState === 'input' 
                      ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                      : "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                >
                  <Database className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                  Store
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
                  Documents & expertise
                </p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="h-12 w-12 text-blue-500" />
              </motion.div>

              {/* Processing */}
              <motion.div
                className="flex flex-col items-center text-center"
                animate={{
                  scale: flowState === 'processing' ? 1.1 : 1,
                  opacity: flowState === 'processing' ? 1 : 0.8
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/50 dark:to-emerald-800/50 rounded-full flex items-center justify-center shadow-xl mb-6"
                  animate={{
                    rotate: flowState === 'processing' ? 360 : 0,
                    boxShadow: flowState === 'processing' 
                      ? "0 25px 50px rgba(34, 197, 94, 0.4)" 
                      : "0 15px 35px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Brain className="h-20 w-20 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
                  Process
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
                  AI analyzes & connects
                </p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <ArrowRight className="h-12 w-12 text-purple-500" />
              </motion.div>

              {/* Output */}
              <motion.div
                className="flex flex-col items-center text-center"
                animate={{
                  scale: flowState === 'output' ? 1.05 : 1,
                  opacity: flowState === 'output' ? 1 : 0.8
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-3xl flex items-center justify-center cursor-pointer shadow-xl mb-6"
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => handleSectionClick('agents')}
                  animate={{
                    boxShadow: flowState === 'output' 
                      ? "0 20px 40px rgba(147, 51, 234, 0.3)" 
                      : "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                >
                  <Lightbulb className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                  Deliver
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
                  Insights & proposals
                </p>
              </motion.div>
            </div>

            {/* Flowing particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <AnimatePresence>
                {dataPoints.map((point) => (
                  <motion.div
                    key={point.id}
                    className={`absolute w-3 h-3 rounded-full ${
                      point.type === 'knowledge' 
                        ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                        : 'bg-purple-500 shadow-lg shadow-purple-500/50'
                    }`}
                    initial={{ 
                      x: point.type === 'knowledge' ? 100 : 450,
                      y: point.y,
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{ 
                      x: point.type === 'knowledge' ? 450 : 100,
                      y: point.y + (Math.sin(point.id * 0.5) * 30),
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1, 1, 0]
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: 3,
                      ease: "easeInOut",
                      delay: point.id * 0.3
                    }}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Status */}
            <motion.div
              className="mt-12 text-center"
              key={flowState}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {flowState === 'input' && (
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Capturing Knowledge</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Client documents, meeting notes, team expertise
                  </p>
                </div>
              )}
              {flowState === 'processing' && (
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-green-700 dark:text-green-300">AI Processing</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Finding patterns, connecting insights
                  </p>
                </div>
              )}
              {flowState === 'output' && (
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Generating Intelligence</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Answers, insights, professional deliverables
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => handleSectionClick('knowledge')}
            className="cursor-pointer group"
          >
            <div className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-blue-200 dark:border-blue-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-400 dark:group-hover:border-blue-500 relative overflow-hidden">
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent"
                animate={{
                  x: [-100, 400]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
                  <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-3">
                  Knowledge Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  Store and instantly search your firm's knowledge
                </p>
                
                {/* Metrics */}
                <div className="space-y-4">
                  <motion.div
                    className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    animate={{
                      backgroundColor: ["rgba(59, 130, 246, 0.05)", "rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0.05)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Documents</span>
                    <motion.span 
                      className="text-sm font-bold text-blue-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      2,847 files
                    </motion.span>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    animate={{
                      backgroundColor: ["rgba(59, 130, 246, 0.05)", "rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0.05)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Insights</span>
                    <motion.span 
                      className="text-sm font-bold text-blue-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      15,234 items
                    </motion.span>
                  </motion.div>
                </div>
                
                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  <span>Explore Knowledge</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => handleSectionClick('agents')}
            className="cursor-pointer group"
          >
            <div className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-purple-200 dark:border-purple-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-purple-400 dark:group-hover:border-purple-500 relative overflow-hidden">
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-l from-purple-500/5 to-transparent"
                animate={{
                  x: [400, -100]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300">
                  <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">
                  AI Agents
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  Transform knowledge into client deliverables
                </p>
                
                {/* Activity indicators */}
                <div className="space-y-4">
                  <motion.div
                    className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                    animate={{
                      backgroundColor: ["rgba(147, 51, 234, 0.05)", "rgba(147, 51, 234, 0.1)", "rgba(147, 51, 234, 0.05)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active insights</span>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-sm font-bold text-purple-600">12 generating</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                    animate={{
                      backgroundColor: ["rgba(147, 51, 234, 0.05)", "rgba(147, 51, 234, 0.1)", "rgba(147, 51, 234, 0.05)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proposals ready</span>
                    <motion.span 
                      className="text-sm font-bold text-purple-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                    >
                      3 completed
                    </motion.span>
                  </motion.div>
                </div>
                
                <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-medium">
                  <span>Deploy AI</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeSection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-4">
                    {activeSection === 'knowledge' ? (
                      <>
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                          <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Knowledge Hub
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">Your firm's memory</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                          <Bot className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            AI Agents
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium">Your intelligent workforce</p>
                        </div>
                      </>
                    )}
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {activeSection === 'knowledge' ? (
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      Every client conversation, proposal, and project insight—stored, organized, and instantly searchable.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <Search className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3" />
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Search</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          "What did we discuss about their supply chain?" Get answers in seconds.
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3" />
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Organization</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Auto-categorized by client, project, and topic.
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Explore Knowledge Hub
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      AI agents work with your knowledge to generate insights, draft proposals, and answer complex client questions—like having senior consultants available 24/7.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                        <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-3" />
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Analysis</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Analyze patterns across client work to spot opportunities.
                        </p>
                      </div>
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                        <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-3" />
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Intelligent Drafting</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Generate proposals using insights from past projects.
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Deploy AI Agents
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 