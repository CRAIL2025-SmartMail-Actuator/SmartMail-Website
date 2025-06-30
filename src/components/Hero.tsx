
import { ArrowRight, Mail, Zap, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative mt-16 md:mt-0 w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/90 via-purple-600/80 to-blue-700/90 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white text-4xl md:text-6xl font-bold mb-6" variants={itemVariants}>
                Revolutionize Your Email Communication with AI
              </motion.h1>
              <motion.p className="banner-subtitle text-gray-200 mt-4 sm:mt-6 text-xl max-w-3xl mx-auto" variants={itemVariants}>
                SmartMail's AI-powered auto-responder reduces response times by 80% while maintaining quality and consistency.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToDemo}
                >
                  See Live Demo
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-600 mb-2 md:mb-3">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Smart Email Processing</h3>
            <p className="text-gray-600 text-xs md:text-sm">AI analyzes and responds to customer emails with human-like accuracy and tone.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 flex items-center justify-center rounded-lg text-purple-600 mb-2 md:mb-3">
              <Zap className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Lightning Fast</h3>
            <p className="text-gray-600 text-xs md:text-sm">Respond to customer inquiries in under 30 seconds, 24/7 availability.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Brand Consistency</h3>
            <p className="text-gray-600 text-xs md:text-sm">Maintains your brand voice and messaging across all customer interactions.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
