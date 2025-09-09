"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star } from 'lucide-react';
// import Image from "next/image"


const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Sample avatar URLs from Pexels
  const avatars = [
    './Assets/Youtuberclient/1.jpg',
    '/Assets/Youtuberclient/2.jpg',
    '/Assets/Youtuberclient/11.jpg',
    '/Assets/Youtuberclient/5.jpg',
    '/Assets/Youtuberclient/12.jpg',

  ];

  const navLinks = [
    { href: '#Short', label: 'Short-form' },
    { href: '#service', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQs' }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden cursor-none"
 
    >
  

      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 px-6 lg:px-8 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 border-2 border-white transform rotate-45"></div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
      <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 146, 60, 0.4)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg"
>
  Book a call
</motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white/5 backdrop-blur-lg rounded-2xl mt-4 border border-white/10"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold mt-4 shadow-lg"
                  onClick={() => {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
                
                >
                  Book a call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-12 lg:pt-20 pb-20 text-center">
        {/* Trusted Avatars Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex -space-x-2 mb-4">
            {avatars.map((avatar, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="w-12 h-12 rounded-full border-3 border-white overflow-hidden bg-gray-200"
              >
                <img
                  src={avatar} 
                  alt={`Trusted user ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
              >
                <Star size={16} fill="currentColor" />
              </motion.div>
            ))}
            <span className="text-gray-400 text-sm font-medium ml-2">
              Trusted by 50+ brands & creators
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          #1 Design Engine Behind the{' '}
          <span className=" text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 bg-clip-text text-transparent font-extrabold font-serif text-3xl">
  Internet Top Creators and Brands
</span>

        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          From scroll-stopping thumbnails to stunning visuals, I handle everything — concept, design, and delivery — so your content looks sharper, attracts clicks, and never gets ignored.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(251, 146, 60, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-auto shadow-lg"
            onClick={() => {
    const section = document.getElementById("booking");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
          >
            Book a call
          </motion.button>
          
             <motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 40px rgba(251, 146, 60, 0.6)"
  }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 w-full sm:w-auto shadow-lg"
  onClick={() => {
    window.open("https://wa.me/+923432357017?text=Hi%20I%20am%20interested%20in%20your%20services", "_blank");
  }}
>
  WhatsApp Us
</motion.button>


        </motion.div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HeroSection;