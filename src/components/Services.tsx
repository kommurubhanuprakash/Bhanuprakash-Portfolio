
import React from 'react';
import { Monitor, Server, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Responsive interfaces using ReactJS, Tailwind CSS, Material UI",
      features: ["Responsive Design", "Modern UI/UX", "Cross-browser Compatibility", "Performance Optimization"]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "RESTful APIs and server applications with Java Spring Boot and ExpressJS",
      features: ["RESTful APIs", "Server Architecture", "Authentication", "Data Processing"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Relational databases design and management with MySQL and PostgreSQL",
      features: ["Database Design", "Query Optimization", "Data Migration", "Performance Tuning"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS-based cloud analytics and solutions",
      features: ["Cloud Architecture", "Analytics Solutions", "Scalable Infrastructure", "Cost Optimization"]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={serviceVariants}
              custom={index}
              className="bg-slate-900/70 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <service.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="text-gray-400 mb-6">Ready to start your next project?</p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
