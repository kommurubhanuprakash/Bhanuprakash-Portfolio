
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "Employee Leave Management System",
      description: "A comprehensive Java Spring Boot and MySQL web application for managing employee leaves with role-based access control and automated approval workflows.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
      features: ["Role-based Authentication", "Leave Request Workflow", "Real-time Notifications", "Reporting Dashboard"]
    },
    {
      title: "Electricity Billing System",
      description: "An automated billing system to calculate and generate electricity bills with accurate reporting, customer management, and payment tracking.",
      technologies: ["Java", "MySQL", "JavaFX", "PDF Generation"],
      features: ["Bill Calculation", "Customer Management", "Payment Tracking", "Report Generation"]
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
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my development skills
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              custom={index}
              className="bg-slate-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-orange-500 transition-all duration-300 group"
              whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
            >
              {/* Project Image Placeholder */}
              <div className="h-60 bg-gradient-to-r from-orange-500/20 to-red-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                
                {/* Project visual element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      {index === 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                          <path d="m9 16 2 2 4-4"></path>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button 
                    className="w-10 h-10 bg-slate-800/80 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} className="text-white" />
                  </motion.button>
                  <motion.button 
                    className="w-10 h-10 bg-slate-800/80 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-orange-500 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-orange-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
          <p className="text-gray-400 mb-6">More projects coming soon...</p>
          <motion.button 
            className="relative overflow-hidden group border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <span className="absolute inset-0 bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
