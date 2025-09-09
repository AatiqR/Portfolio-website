"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, Target } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { icon: Award, number: "200+", label: "Projects Delivered" },
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Sparkles, number: "3+", label: "Years Experience" },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          {
            size: "w-[600px] sm:w-[800px] lg:w-[1000px]",
            position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            gradient:
              "bg-gradient-radial from-orange-500/25 via-orange-600/15 to-transparent",
            duration: 8,
            delay: 0,
          },
          {
            size: "w-[400px] sm:w-[600px] lg:w-[700px]",
            position: "top-1/4 right-1/4",
            gradient:
              "bg-gradient-radial from-amber-500/20 via-orange-500/10 to-transparent",
            duration: 10,
            delay: 2,
          },
          {
            size: "w-[350px] sm:w-[500px] lg:w-[600px]",
            position: "bottom-1/4 left-1/4",
            gradient:
              "bg-gradient-radial from-orange-600/15 via-red-500/8 to-transparent",
            duration: 12,
            delay: 4,
          },
        ].map((orb, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
            className={`absolute ${orb.position} ${orb.size} ${orb.gradient} rounded-full blur-3xl`}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-orange-400 rounded-full blur-sm"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 15}%` }}
          />
        ))}
      </div>

      <div id='about' className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">
             Graphic Designer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              About Us
            </span>
            {/* Shimmer Effect */}
         
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Delivering digital experiences that inspire, engage, and drive results for your brand
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center"
        >
          {/* Left Column */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Mission */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <Target className="w-7 h-7 text-orange-400" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Rafey{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                    Murad
                  </span>
                </h3>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6"
              />
              <p className="text-gray-100 text-lg leading-relaxed">
                I’m Rafey Awan, a passionate Graphic Designer with a Bachelor’s
                 degree in Film, TV & Digital Media and over 3 years of professional
                  experience in the industry. My work is driven by a love for storytelling 
                  and a commitment to producing high-quality, impactful visuals.
              
              </p>
                  <br />
              <p className="text-gray-100 text-lg leading-relaxed">
                
            I specialize in editing with Adobe Premiere Pro, creating 
            animations & motion graphics in After Effects, and performing
             advanced color grading in DaVinci Resolve. Throughout my career,
              I’ve had the privilege of working with renowned brands, coaches,
               founders, CEOs, and creators worldwide. 
               
              </p>
              <br />
              <p>
               I’ve also edited for multiple 
               faceless YouTube channels with millions of subscribers, helping them grow and
                maintain a strong digital presence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
                  }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <stat.icon className="w-8 h-8 text-orange-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-orange-400 font-bold text-2xl mb-1">
                    {stat.number}
                  </h4>
                  <p className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
        
          </div>

          {/* Right Column (Image) */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  className="order-1 lg:order-2 relative group flex items-center justify-center"
>
  {/* Profile Image Container */}
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="relative flex items-center justify-center"
  >
    <img
      src="/Assets/Rafey.jpg"
      alt="Profile Picture"
      className="w-[350px] h-[450px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] object-contain rounded-3xl shadow-2xl"
    />

    {/* Glow Border */}
    <motion.div
      className="absolute rounded-3xl w-[350px] h-[450px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] border-2 border-orange-500/40 group-hover:border-orange-400/70 transition-all duration-500"
      whileHover={{
        boxShadow: "0 0 70px rgba(249, 115, 22, 0.6)",
      }}
    />
  </motion.div>

  {/* Floating Glow Elements */}
  <motion.div
    animate={{ y: [-25, 25, -25], scale: [1, 1.1, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-25 blur-xl"
  />
  <motion.div
    animate={{ y: [25, -25, 25], scale: [1.1, 1, 1.1] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    }}
    className="absolute -bottom-12 -left-12 w-44 h-44 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full opacity-20 blur-2xl"
  />

  {/* Badge */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 1.5 }}
    className="absolute top-6 left-6 bg-gradient-to-r from-orange-500/90 to-amber-500/90 backdrop-blur-sm rounded-full px-6 py-2.5"
  >
    <span className="text-white text-base md:text-lg font-semibold">
  Rafey Awan
    </span>
  </motion.div>
</motion.div>


        </motion.div> 

        {/* Footer Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 flex flex-col items-center space-y-6"
        >
          <motion.div
            animate={{ width: ["120px", "160px", "120px"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
          />
          <p className="text-gray-400 text-base text-center max-w-md">
            Ready to transform your digital presence? Let’s create something
            extraordinary together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
