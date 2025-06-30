
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Users, TrendingUp } from 'lucide-react';

const EmailStats = () => {
  const [counters, setCounters] = useState({
    emails: 0,
    time: 0,
    customers: 0,
    efficiency: 0
  });

  const finalValues = {
    emails: 1247,
    time: 80,
    customers: 500,
    efficiency: 94
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          emails: Math.floor(finalValues.emails * easeOutQuart),
          time: Math.floor(finalValues.time * easeOutQuart),
          customers: Math.floor(finalValues.customers * easeOutQuart),
          efficiency: Math.floor(finalValues.efficiency * easeOutQuart)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalValues);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Mail,
      value: counters.emails,
      suffix: '+',
      label: 'Emails Processed Daily',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      value: counters.time,
      suffix: '%',
      label: 'Faster Response Times',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      value: counters.customers,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      value: counters.efficiency,
      suffix: '%',
      label: 'Automation Success Rate',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI Email Auto-Responder delivers measurable improvements in efficiency, 
            customer satisfaction, and business growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`${stat.bgColor} rounded-2xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:shadow-lg`}>
                  {/* Animated Background Gradient */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                  />

                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-6 relative z-10`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Counter */}
                  <motion.div 
                    className="relative z-10"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      <motion.span
                        key={stat.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>

                  {/* Animated Progress Ring */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                  >
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.2"
                      />
                      <motion.circle
                        cx="16"
                        cy="16"
                        r="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 12}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 12 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 12 * (1 - 0.75) }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.7, duration: 1.5, ease: "easeOut" }}
                        className={`text-gradient-to-r ${stat.color}`}
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full mr-3"
            />
            <span className="text-gray-700 font-medium">
              Join the growing community of businesses transforming their customer communication
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailStats;
