import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [{
  name: 'Home',
  path: '/'
}, {
  name: 'About',
  path: '/about'
}, {
  name: 'Impact',
  path: '/impact'
}, {
  name: 'Partnerships',
  path: '/partnerships'
}, {
  name: 'Countries',
  path: '/countries'
}, {
  name: 'Donate',
  path: '/donate'
}, {
  name: 'Apply',
  path: '/apply'
}, {
  name: 'Blog',
  path: '/blog'
}, {
  name: 'Proposals',
  path: '/proposals'
}, {
  name: 'Contact',
  path: '/contact'
}];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#2B463C]">
            <span className="text-[#FFD700]">Afro</span>ScholarHub
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => <NavLink key={link.path} to={link.path} active={pathname === link.path}>
              {link.name}
            </NavLink>)}
          <Link to="/login" className="px-4 py-2 rounded-md bg-[#2B463C] text-white hover:bg-opacity-90 transition-all">
            Dashboard
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#2B463C]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.div className="md:hidden bg-white" initial={{
      height: 0,
      opacity: 0
    }} animate={{
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0
    }} transition={{
      duration: 0.3
    }} style={{
      overflow: 'hidden'
    }}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`block py-2 ${pathname === link.path ? 'text-[#FFD700] font-bold' : 'text-[#2B463C]'}`}>
              {link.name}
            </Link>)}
          <Link to="/login" className="px-4 py-2 rounded-md bg-[#2B463C] text-white text-center">
            Dashboard
          </Link>
        </div>
      </motion.div>
    </nav>;
};
const NavLink = ({
  to,
  active,
  children
}) => {
  return <Link to={to} className="relative group">
      <span className={`${active ? 'text-[#FFD700] font-bold' : 'text-[#2B463C]'} transition-colors`}>
        {children}
      </span>
      <motion.span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700] origin-left" initial={{
      scaleX: active ? 1 : 0
    }} animate={{
      scaleX: active ? 1 : 0
    }} whileHover={{
      scaleX: 1
    }} transition={{
      duration: 0.3
    }} />
    </Link>;
};
export default Navbar;