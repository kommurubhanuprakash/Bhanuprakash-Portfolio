import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div className="space-y-8" initial="hidden" animate={isLoaded ? "show" : "hidden"} variants={container}>
          <motion.div className="space-y-3" variants={item}>
            <span className="text-orange-500 font-medium bg-orange-500/10 py-1 px-4 rounded-full text-sm inline-block mb-2">
              Computer Science Student
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello<span className="text-orange-500">.</span> I'm <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">Bhanuprakash</span>
            </h1>
            <h3 className="text-xl text-gray-400 font-light max-w-md leading-relaxed">Aspiring Full Stack Developer with a strong foundation in Computer Science.

          </h3>
          </motion.div>
          
          <motion.p variants={item} className="text-lg text-gray-300 leading-relaxed max-w-lg">
            Passionate about full-stack development and cloud technologies, bridging the gap between 
            engineering disciplines with practical experience in Java, Python, and AWS.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 h-auto">
              Get in touch <ArrowRight className="h-5 w-5" />
            </Button>
            <Button onClick={() => document.querySelector('#portfolio')?.scrollIntoView({
            behavior: 'smooth'
          })} variant="outline" className="border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-orange-500 px-8 py-6 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm h-auto">
              View Projects <ExternalLink className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div className="flex justify-center" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={isLoaded ? {
        opacity: 1,
        scale: 1
      } : {
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-30 blur-xl" />
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1 relative z-10">
              <div className="w-full h-full rounded-full bg-slate-800/90 flex items-center justify-center overflow-hidden">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://i.postimg.cc/xjzL15Lt/BHANU4.jpg" alt="Bhanuprakash Profile" className="object-cover" />
                  <AvatarFallback className="text-7xl font-bold">KB</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-orange-500 rounded-lg" initial={{
            rotate: 12,
            opacity: 0
          }} animate={isLoaded ? {
            rotate: 12,
            opacity: 1
          } : {
            rotate: 12,
            opacity: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} />
            <motion.div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-orange-500 rounded-lg" initial={{
            rotate: -12,
            opacity: 0
          }} animate={isLoaded ? {
            rotate: -12,
            opacity: 1
          } : {
            rotate: -12,
            opacity: 0
          }} transition={{
            duration: 0.5,
            delay: 0.8
          }} />
            
            <motion.div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full" initial={{
            scale: 0
          }} animate={isLoaded ? {
            scale: [0, 1.5, 1]
          } : {
            scale: 0
          }} transition={{
            duration: 0.6,
            delay: 1,
            times: [0, 0.7, 1]
          }} />
            <motion.div className="absolute top-1/3 -right-8 transform -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full" initial={{
            scale: 0
          }} animate={isLoaded ? {
            scale: [0, 1.5, 1]
          } : {
            scale: 0
          }} transition={{
            duration: 0.6,
            delay: 1.2,
            times: [0, 0.7, 1]
          }} />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block" initial={{
      opacity: 0,
      y: 20
    }} animate={isLoaded ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.6,
      delay: 1.4
    }}>
        <div className="bg-slate-800/50 backdrop-blur-sm px-8 py-3 rounded-2xl border border-gray-700">
          <div className="flex space-x-8 text-gray-400">
            <span className="hover:text-orange-500 transition-colors cursor-default">Java</span>
            <span className="hover:text-orange-500 transition-colors cursor-default">Python</span>
            <span className="hover:text-orange-500 transition-colors cursor-default">ReactJS</span>
            <span className="hover:text-orange-500 transition-colors cursor-default">Spring Boot</span>
            <span className="hover:text-orange-500 transition-colors cursor-default">MySQL</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-orange-500 transition-colors" initial={{
      opacity: 0,
      y: -10
    }} animate={isLoaded ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: -10
    }} transition={{
      duration: 0.5,
      delay: 1.6
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Scroll Down</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </motion.button>
    </section>;
};
export default Hero;
