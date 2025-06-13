import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500">
      {/* Premium background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 dark:from-black/50 dark:via-transparent dark:to-black/50 z-10 transition-colors duration-500" />
      
      {/* Subtle grid pattern - Apple style */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] transition-opacity duration-500" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Content with Apple-style hierarchy */}
          <div className="flex flex-col justify-center space-y-12 lg:pr-12">
            
            {/* Subtle intro line - Apple style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-500 dark:text-gray-400 text-lg font-medium tracking-wide transition-colors duration-500"
            >
              For Consulting Professionals
            </motion.div>

            {/* Main headline - Apple typography hierarchy */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-[0.9] tracking-tight transition-colors duration-500"
              >
                Your business.
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Elevated.
                </motion.span>
              </motion.h1>

              {/* Emotional value proposition */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-2xl transition-colors duration-500"
              >
                Transform every client conversation into business intelligence. 
                <span className="text-gray-900 dark:text-white font-medium transition-colors duration-500"> From meeting to proposal in minutes, not days.</span>
              </motion.p>
            </div>

            {/* Apple-style feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-lg text-gray-600 dark:text-gray-300 font-medium transition-colors duration-500">Centralized business intelligence that learns</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-lg text-gray-600 dark:text-gray-300 font-medium transition-colors duration-500">AI agents that work while you sleep</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-lg text-gray-600 dark:text-gray-300 font-medium transition-colors duration-500">Proposals that close themselves</span>
                </div>
              </div>
            </motion.div>

            {/* Premium CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Email capture with Apple aesthetics */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-white/20 focus:border-blue-500/50 dark:focus:border-white/20 transition-all duration-300 text-lg font-medium"
                  />
                  <motion.button
                    className="group bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 min-w-fit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Early Access</span>
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </motion.button>
                </div>
                
                {/* Secondary action */}
                <motion.button
                  className="group flex items-center space-x-3 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-blue-100 dark:bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-white/20 transition-colors duration-300">
                    <Play className="h-4 w-4 ml-0.5" />
                  </div>
                  <span className="text-lg font-medium">Watch demo</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Trust indicators - Apple minimal style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-12 border-t border-gray-200 dark:border-white/5 transition-colors duration-500"
            >
              <div className="space-y-4">
                <p className="text-gray-400 dark:text-gray-500 text-sm font-medium tracking-wide uppercase transition-colors duration-500">
                  Trusted by Leading Firms
                </p>
                <div className="flex items-center space-x-8 text-gray-500 dark:text-gray-600 transition-colors duration-500">
                  <div className="text-sm font-medium">McKinsey & Company</div>
                  <div className="text-sm font-medium">Deloitte</div>
                  <div className="text-sm font-medium">BCG</div>
                  <div className="text-sm font-medium">Accenture</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Side - 3D Scene with premium treatment */}
          <div className="flex items-center justify-center lg:h-screen relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="w-full h-[600px] lg:h-[800px] relative"
            >
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-3xl blur-3xl transition-colors duration-500"></div>
              
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 border-2 border-gray-300 dark:border-white/20 rounded-full flex items-center justify-center transition-colors duration-500"
                  >
                    <div className="w-8 h-8 border-2 border-gray-900 dark:border-white border-t-transparent rounded-full animate-spin transition-colors duration-500"></div>
                  </motion.div>
                </div>
              }>
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Spline
                    scene="https://prod.spline.design/mhtNAO3CVpiYk4zx/scene.splinecode"
                    style={{ 
                      width: '100%', 
                      height: '100%',
                    }}
                  />
                </div>
              </Suspense>
              
              {/* Floating metrics - Apple style */}
              <motion.div
                className="absolute top-8 left-8 bg-white/80 dark:bg-black/20 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="text-gray-900 dark:text-white font-semibold text-lg transition-colors duration-500">3x</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">Faster Deal Closure</div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 right-8 bg-white/80 dark:bg-black/20 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 transition-colors duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-gray-900 dark:text-white font-semibold text-lg transition-colors duration-500">500+</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">Active Consultants</div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-4 bg-white/80 dark:bg-black/20 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 transition-colors duration-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="text-gray-900 dark:text-white font-semibold text-lg transition-colors duration-500">99.5%</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-500">Accuracy</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - Apple minimal style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Premium ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl transition-colors duration-500"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl transition-colors duration-500"></div>
    </section>
  );
};

export default HeroSection;