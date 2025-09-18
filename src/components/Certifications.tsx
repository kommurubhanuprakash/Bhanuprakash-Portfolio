import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Automation Anywhere Certified Essentials RPA Professional",
      issuer: "Automation Anywhere",
      date: "2023",
      description: "Professional certification in Robotic Process Automation (RPA) fundamentals, bot development, and automation best practices.",
      skills: ["RPA", "Bot Development", "Process Automation", "Workflow Design"],
      url: "https://drive.google.com/file/d/1TrC12vjd8Tzc6AjstZbp8fEudlOqgRpw/view?usp=sharing"
    },
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "2024",
      description: "Comprehensive certification covering Google Cloud Platform services, deployment, monitoring, and maintenance of cloud solutions.",
      skills: ["Google Cloud Platform", "Cloud Architecture", "DevOps", "Infrastructure Management"],
      url: "https://drive.google.com/file/d/1dx-PLHprFKqDZ5lWUGoO8K7Ftqd1cs8_/view?usp=sharing"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2024",
      description: "Certification demonstrating proficiency in AI concepts, implementation, and best practices within the Salesforce ecosystem.",
      skills: ["Salesforce AI", "Machine Learning", "Einstein AI", "CRM Analytics"],
      url: "https://drive.google.com/file/d/1BdAgL7d03q9JAQTqlrmBRPzgQXk5AkL1/view?usp=sharing"
    },
    {
      title: "Wipro TalentNext Java Full-Stack Certification",
      issuer: "Wipro TalentNext",
      date: "2024",
      description: "Comprehensive full-stack Java development certification covering frontend and backend technologies, databases, and web development frameworks.",
      skills: ["Java", "Spring Boot", "React", "MySQL", "Full-Stack Development"],
      url: "https://drive.google.com/file/d/16vwAjI0x-hw2UvCrUDapRFkmYzDiNshu/view?usp=sharing"
    },
    {
      title: "Oracle MySQL 8.0 Database Administrator (1Z0-908)",
      issuer: "Oracle Corporation",
      date: "2025",
      description: "Earned certification validating expertise in deploying, configuring, maintaining, and troubleshooting MySQL 8.0 database environments. The credential demonstrates a deep understanding of MySQL architecture and advanced administration capabilities.",
      skills: ["MySQL Architecture", "Performance Tuning", "Backup & Recovery", "Replication", "User Management", "Query Optimization"],
      url: "https://drive.google.com/file/d/1puuv5KMdNw8g9zLbWSpdWdF6Q2RDnbSq/view?usp=sharing"
    },
    {
      title: "AWS Academy Machine Learning Foundations [121821]",
      issuer: "AWS Academy (Amazon Web Services)",
      date: "2021",
      description: "Completed a foundational course on machine learning principles and cloud-based implementation using AWS. Covered key ML workflows, algorithms, and the use of services like Amazon SageMaker for model development and deployment.",
      skills: ["Machine Learning Lifecycle", "Supervised & Unsupervised Learning", "Model Training & Evaluation", "Amazon SageMaker", "Cloud-based ML Deployment"],
      url: "https://drive.google.com/file/d/1K4LHDDT0QJNXwodp_CbMjWzZ3wR9mn6d/view?usp=sharing"
    }
  ];

  const handleCertificationClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that showcase my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-slate-900/70 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 group cursor-pointer"
              variants={fadeIn}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.2)" 
              }}
              onClick={() => handleCertificationClick(cert.url)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                  <ExternalLink size={16} className="text-orange-500 group-hover:text-orange-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-orange-400 font-medium mb-3">{cert.issuer}</p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-orange-300 text-xs rounded-full border border-orange-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always expanding my skillset and pursuing new certifications to stay current with 
              the latest technologies and industry best practices.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Certifications</span>
              <ExternalLink size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
