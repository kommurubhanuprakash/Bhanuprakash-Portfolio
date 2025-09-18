import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send('service_5map9zc',
      // Service ID
      'template_1xvn8ch',
      // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Bhanuprakash'
      }, 'WhMObjEQE1JKkj1XJ' // Public Key
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeIn}>
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-2 gap-12" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={staggerContainer}>
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={fadeIn}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div className="flex items-center space-x-4" whileHover={{
              x: 5
            }}>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">kommurubhanuprakash6@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4" whileHover={{
              x: 5
            }}>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+91 6305450432</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4" whileHover={{
              x: 5
            }}>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Kethanakonda, India</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a href="https://www.linkedin.com/in/kommurubhanuprakash/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300" whileHover={{
                y: -5,
                backgroundColor: "#f97316"
              }}>
                  <Linkedin className="text-white" size={20} />
                </motion.a>
                <motion.a href="https://github.com/kommurubhanuprakash" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300" whileHover={{
                y: -5,
                backgroundColor: "#f97316"
              }}>
                  <Github className="text-white" size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-slate-900/70 p-8 rounded-xl border border-gray-700 backdrop-blur-sm" variants={fadeIn} whileHover={{
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
        }}>
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-slate-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-slate-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="your.email@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full bg-slate-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Project Discussion" />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full bg-slate-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <motion.button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2" whileHover={{
              scale: isLoading ? 1 : 1.02
            }} whileTap={{
              scale: isLoading ? 1 : 0.98
            }}>
                {isLoading ? <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </> : <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div className="mt-20 pt-8 border-t border-gray-700 text-center" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={fadeIn}>
          <p className="text-gray-400">
            © 2024 Kommuru Bhanuprakash. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default Contact;