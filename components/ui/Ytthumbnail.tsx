"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
}

const videoData: VideoData[] = [
  {
    id: "1",
    title: "",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/444786208096551.66e9431827eac.jpg", // ✅ use static YouTube thumbnail
  },
  {
    id: "2",
    title: "",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fa0fe1208096551.68261e02a06d7.jpg",
  },
  {
    id: "3",
    title: "",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f7d4d1208096551.68188545257d3.jpg",
  },
  {
    id: "4",
    title: "",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/24f9c5208096551.689b2b8253075.jpg",
  },
     {
         id: "5",
    title: "",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/163dc1208096551.6741f35d8f9ba.jpg",
  },
   {
       id: "6",
    title: "",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4f6193208096551.68aaf9247beab.jpg",
  },
];

const VideoCard: React.FC<{ video: VideoData }> = ({ video }) => {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[280px] h-[160px] sm:w-[320px] sm:h-[180px] md:w-[360px] md:h-[200px] lg:w-[400px] lg:h-[220px] mx-2 group"
      whileHover={{
        scale: 1,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all">
        <img
          src={video.thumbnail}
          alt={video.title}
         
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient + title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
          <h3 className="text-orange-400 font-bold text-sm sm:text-base lg:text-lg leading-tight drop-shadow-md group-hover:drop-shadow-lg transition-all">
            {video.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const extendedthumbnail = [...videoData, ...videoData];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            Featured thumbnail
          </span>
        </motion.h1>

        {/* Auto-scroll row */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: [0, `-${100 / 2}%`] }}
            transition={{
              x: { repeat: Infinity, duration: videoData.length * 6, ease: "linear" },
            }}
          >
            {extendedthumbnail.map((video, index) => (
              <VideoCard key={`${video.id}-${index}`} video={video} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
