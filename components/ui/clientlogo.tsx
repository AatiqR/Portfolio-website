"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const companies = [
    { name: "Google", logo: "/Assets/client/1.png", height: 90, width: 180 },
    { name: "Meta", logo: "/Assets/client/2.png", height: 100, width: 200 },
    { name: "Netflix", logo: "/Assets/client/3.jpg", height: 80, width: 180 },
    { name: "Airbnb", logo: "/Assets/client/4.png", height: 70, width: 140 },
    { name: "Microsoft", logo: "/Assets/client/5.png", height: 70, width: 140 },
    { name: "Apple", logo: "/Assets/client/6.jpg", height: 80, width: 160 },
    { name: "Twitter", logo: "/Assets/client/8.jpg", height: 70, width: 140 },
    { name: "Amazon", logo: "/Assets/client/9.png", height: 70, width: 140 },
    { name: "Adobe", logo: "/Assets/client/10.png", height: 70, width: 140 },
    { name: "Twitter", logo: "/Assets/client/11.png", height: 70, width: 140 },
    { name: "Amazon", logo: "/Assets/client/12.png", height: 80, width: 160 },
    { name: "Adobe", logo: "/Assets/client/13.png", height: 80, width: 160 },
    { name: "Twitter", logo: "/Assets/client/14.jpg", height: 70, width: 140 },
    { name: "Amazon", logo: "/Assets/client/15.png", height: 90, width: 180 },
    { name: "Adobe", logo: "/Assets/client/16.png", height: 70, width: 140 },
    { name: "Twitter", logo: "/Assets/client/17.png", height: 70, width: 140 },
    { name: "Amazon", logo: "/Assets/client/18.jpeg", height: 70, width: 140 },
    { name: "Amazon", logo: "/Assets/client/19.png", height: 100, width: 200 },
  ];

  return (
    <div className="w-full h-[300px] bg-black flex flex-col justify-center px-4 md:px-10 overflow-hidden rounded-3xl">
      <div className="mb-6 text-center">
        <p className="text-sm md:text-base text-gray-300 font-medium">
          Trusted by these companies and many more worldwide
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16 items-center"
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-24 w-40 md:h-28 md:w-48 transition-transform duration-300 hover:scale-105"
            >
              <div className="rounded-xl p-2 flex items-center justify-center w-full h-full  hover:shadow-[0_0_20px_#f97316] transition-all duration-300">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
