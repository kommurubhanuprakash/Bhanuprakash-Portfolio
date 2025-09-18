
import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-500">me</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="space-y-6" variants={fadeIn}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I started my journey in mechanical engineering but discovered my true passion in software development. 
              Growing up in Kethanakonda, I learned the values of hard work and perseverance from my family, 
              which have shaped my approach to both life and technology.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My transition from Mechanical Engineering to Computer Science reflects my adaptability and 
              commitment to following my passion. Through practical experience with Java, Python, and AWS Analytics, 
              I've built a strong foundation in full-stack development.
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={20} className="text-orange-500" />
              <span>Kethanakonda, India</span>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeIn}>
            <motion.div 
              className="bg-slate-900/70 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)" }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded-md">
                  <GraduationCap className="text-orange-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-semibold text-white">B.Tech Computer Science and Engineering</h4>
                  <p className="text-gray-400">KLEF University • 2025 (Expected)</p>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">Diploma in Mechanical Engineering</h4>
                  <p className="text-gray-400">RK College of Engineering • Year 2 Completion</p>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">10th Grade</h4>
                  <p className="text-gray-400">NRI Indian Springs • 2019</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-900/70 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)" }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded-md">
                  <Award className="text-orange-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              
              <div className="border-l-2 border-orange-500 pl-4">
                <h4 className="font-semibold text-white">AWS Analytical Virtual Internship</h4>
                <p className="text-gray-400">Cloud Analytics & Solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
