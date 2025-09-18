
import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
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

  const education = [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "KLEF University",
      period: "2021 - 2025 (Expected)",
      description: "Focused on software development, algorithms, and data structures. Specialized in full-stack web development."
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "RK College of Engineering",
      period: "2019 - 2021",
      description: "Completed 2 years before transitioning to Computer Science to follow my passion for technology."
    }
  ];

  const experience = [
    {
      title: "AWS Analytics Virtual Intern",
      company: "Amazon Web Services",
      period: "2024",
      description: "Gained hands-on experience with cloud analytics solutions, data processing, and AWS services including S3, Lambda, and CloudWatch."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-orange-500">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and professional experience journey
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Education Section */}
          <motion.div variants={fadeIn}>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-orange-500/10 rounded-lg mr-4">
                <GraduationCap className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <div className="flex items-center text-orange-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-orange-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={fadeIn}>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-orange-500/10 rounded-lg mr-4">
                <Briefcase className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <div className="flex items-center text-orange-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-orange-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
