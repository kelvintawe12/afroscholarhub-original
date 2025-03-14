import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return <div className="w-full min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B463C] mb-6">
            About AfroScholarHub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Placeholder content for the About page. This will contain
            information about AfroScholarHub's mission and vision.
          </p>
        </motion.div>
      </div>
    </div>;
};
export default About;