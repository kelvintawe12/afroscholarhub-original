import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, SearchIcon, MailIcon } from 'lucide-react';
const NotFound = () => {
  return <div className="w-full min-h-screen pt-24 pb-16 bg-[#2B463C] text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Animated Astronaut */}
            <motion.div className="mb-8" animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0]
          }} transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut'
          }}>
              <div className="w-64 h-64 bg-[#FFD700] rounded-full flex items-center justify-center text-[#2B463C]">
                <span className="text-8xl font-bold">404</span>
              </div>
            </motion.div>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl md:text-5xl font-bold mb-4">
              Page Not Found
            </motion.h1>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5
          }} className="text-xl text-gray-300 mb-8 max-w-lg">
              The page you're looking for has drifted away into the educational
              cosmos. Let\'s get you back on track.
            </motion.p>
            {/* Search bar */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="w-full max-w-md mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input type="search" className="block w-full pl-10 pr-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-[#FFD700] focus:ring-[#FFD700] text-white placeholder-gray-400" placeholder="Search for resources..." />
              </div>
            </motion.div>
            {/* Navigation links */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.9
          }} className="flex flex-col sm:flex-row gap-4">
              <NavigationButton to="/" icon={<HomeIcon size={18} />} label="Return Home" primary />
              <NavigationButton to="/blog" icon={<SearchIcon size={18} />} label="Explore Stories" />
              <NavigationButton to="/contact" icon={<MailIcon size={18} />} label="Contact Us" />
            </motion.div>
            {/* Recent resources */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.1
          }} className="mt-12 w-full">
              <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">
                Popular Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Scholarship Application Guide', 'Student Success Stories', 'Country Representatives', 'Donation Impact Report'].map((resource, index) => <motion.div key={index} whileHover={{
                scale: 1.03
              }} className="bg-white bg-opacity-10 p-4 rounded-lg hover:bg-opacity-20 transition-all">
                    <Link to="/" className="block text-[#FFD700] hover:underline">
                      {resource}
                    </Link>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Animated stars */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-[#FFD700] rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.5, 1]
      }} transition={{
        repeat: Infinity,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 2
      }} />)}
      </div>
    </div>;
};
const NavigationButton = ({
  to,
  icon,
  label,
  primary = false
}) => {
  return <Link to={to} className={`px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all ${primary ? 'bg-[#FFD700] text-[#2B463C] hover:bg-opacity-90' : 'bg-white bg-opacity-10 hover:bg-opacity-20'}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </Link>;
};
export default NotFound;