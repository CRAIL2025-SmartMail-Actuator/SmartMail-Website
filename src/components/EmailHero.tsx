
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmailHero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Email Automation
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Revolutionize Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Customer Communication
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Transform your email management with AI that reduces response times by 80% 
              while maintaining the quality and consistency your customers expect.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={scrollToDemo}
              >
                See Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3"
              >
                Watch Video
              </Button> */}
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">80%</div>
                <div className="text-sm text-gray-600">Faster Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Email Interface */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Main Email Interface Mockup */}
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Email Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-3" />
                      <span className="font-semibold">AI Email Dashboard</span>
                    </div>
                    <motion.div 
                      className="flex items-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">Active</span>
                    </motion.div>
                  </div>
                </div>

                {/* Email List */}
                <div className="p-6 space-y-4">
                  {/* Email Item 1 */}
                  <motion.div 
                    className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Customer Inquiry</span>
                        <motion.span 
                          className="text-xs bg-green-500 text-white px-2 py-1 rounded-full"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Auto-Replied
                        </motion.span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Pricing inquiry - Response sent in 23 seconds</p>
                    </div>
                  </motion.div>

                  {/* Email Item 2 */}
                  <motion.div 
                    className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Support Request</span>
                        <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">
                          Processing
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Technical question - AI analyzing context...</p>
                    </div>
                  </motion.div>

                  {/* Email Item 3 */}
                  <motion.div 
                    className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">New Message</span>
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                          Incoming
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Product demo request received</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating AI Assistant */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Zap className="w-8 h-8" />
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl transform scale-110"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailHero;
