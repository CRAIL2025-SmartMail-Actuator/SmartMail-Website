
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Clock, 
  Shield, 
  Globe, 
  BarChart3, 
  Users,
  Zap,
  Mail,
  Settings,
  Target,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const EmailFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "GPT-4 powered responses that understand context and provide accurate, helpful replies tailored to your business.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Lightning Fast Responses",
      description: "Reduce response times from hours to minutes with automated replies that maintain your brand voice.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, GDPR compliance, and secure credential management protect your data.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate with customers worldwide with built-in translation and localization capabilities.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights into email performance, response rates, and customer satisfaction metrics.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Settings,
      title: "Smart Configuration",
      description: "Intuitive setup with category management, custom rules, and confidence scoring for optimal automation.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-purple-100 rounded-full opacity-10"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Automate Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI Email Auto-Responder combines cutting-edge technology with intuitive design 
            to deliver enterprise-grade email automation that scales with your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 relative z-10`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Border on Hover */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20`}
                    style={{ 
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'xor'
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-12 h-12" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Email Management?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using AI to revolutionize their customer communication.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(import.meta.env.VITE_PORTAL_URL || "#", "_blank")}
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailFeatures;
