import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
const Layout = () => {
  const {
    pathname
  } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate page loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [pathname]);
  return <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <AnimatePresence mode="wait">
        {isLoading ? <motion.div key="loader" className="flex-grow flex items-center justify-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <LoadingAnimation />
          </motion.div> : <motion.main key="content" className="flex-grow" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
            <Outlet />
          </motion.main>}
      </AnimatePresence>
      <Footer />
    </div>;
};
const LoadingAnimation = () => {
  return <div className="flex flex-col items-center">
      <div className="flex space-x-2 mb-4">
        {['A', 'F', 'R', 'O'].map((letter, index) => <motion.span key={index} className="text-4xl font-bold text-[#2B463C]" animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: index * 0.15
      }}>
            {letter}
          </motion.span>)}
      </div>
      <p className="text-[#FFD700] font-semibold">Loading...</p>
    </div>;
};
export default Layout;