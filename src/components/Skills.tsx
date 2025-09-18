
import React from 'react';
import { Code, Database, Server, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["ReactJS", "HTML", "CSS"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Server,
      title: "Backend & Databases",
      skills: ["Node.js", "MySQL", "PostgreSQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "Git"],
      color: "from-pink-500 to-purple-500"
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

  const skillVariants = {
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={skillVariants}
              custom={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)" }}
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-slate-800 rounded-lg flex items-center justify-center">
                  <category.icon className="text-white" size={24} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-500 transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div 
          className="mt-16 bg-slate-800/50 p-8 rounded-lg border border-gray-700 backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "Java", level: 85 },
              { skill: "Python", level: 80 },
              { skill: "ReactJS", level: 75 },
              { skill: "Spring Boot", level: 70 },
              { skill: "MySQL", level: 80 },
              { skill: "AWS", level: 65 }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <div className="flex justify-between">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-orange-500">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
