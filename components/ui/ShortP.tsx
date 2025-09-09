'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import VideoModal from "./VideoModal"

// YouTube Shorts data - replace with your actual video data
const youtubeShorts = [
     {
    id: 'IH58GSS8MJM',
    title: 'Going Viral WITHOUT a Plan Can RUIN Your Life',
    thumbnail: 'https://img.youtube.com/vi/IH58GSS8MJM/maxresdefault.jpg'
  },
  {
    id: 'PXBO_FhgC9k',
    title: 'Design System Magic',
    thumbnail: 'https://img.youtube.com/vi/PXBO_FhgC9k/maxresdefault.jpg'

  },
  {
    id: 'x6Im3IV8nE',
    title: 'Pharma EXPERTS Reveal Medical Breakthroughs',
    thumbnail: 'https://i.ytimg.com/vi/x6Im3IV8nE/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAQPyOpi0gKYnAQvKH-qh4uiBBXGQ'
  },
  {
    id: '5xwFnv4LSn0',
    title: 'Is the iPhone 16 REALLY Worth the Hype?',
    thumbnail: 'https://i.ytimg.com/vi/5xwFnv4LSn0/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCjpHA_R-hEAGr8ZdiJH7X3G3VGhA'
  },
  {
    id: 'pzeqyVdZFAI',
    title: 'Whats the Real Reason Behind Jhon Lee Entrepreneurial Success?',
    thumbnail: 'https://i.ytimg.com/vi/pzeqyVdZFAI/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLC58i3xQXaCK3Q_TEDyAFVXW_cUSg'
  },
  {
    id: '4tv1OQHzXZo',
    title: 'Can You Really Change Your Life in Just 2 Months?',
    thumbnail: 'https://i.ytimg.com/vi/4tv1OQHzXZo/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDv2R7hM17wl4rYoyPT1YGdJTKmEQ'
  },
  {
    id: 'YdRXmM49rWg',
    title: 'BirriaTacos Opening Reel',
    thumbnail: 'https://img.youtube.com/vi/YdRXmM49rWg/maxresdefault.jpg'
  },
  {
    id: 'RGnK5TJNGjo',
    title: 'Top AI Expert Reveals Best Techniques for Junior Robotics',
    thumbnail: 'https://img.youtube.com/vi/RGnK5TJNGjo/maxresdefault.jpg'
  },

//   {
//     id: 'P4ZQ8lBVFU8?si=Pg2FhGQOCJpA_KfI',
//     title: 'React Performance',
//     thumbnail: 'https://i.ytimg.com/vi/P4ZQ8lBVFU8/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLD5W5els_BcCEbUVX1USLvnUGRCSA'
//   },
//   {
//     id: 'PYA_YTbIcBY?si=R2WgV4VKpO_7yL9r',
//     title: 'Full Stack Journey',
//     thumbnail: 'https://i.ytimg.com/vi/PYA_YTbIcBY/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAqI9xzlPqxproaukSWLNGK1PSF9Q'
//   }
 ];

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

const DotButton: React.FC<DotButtonProps> = ({ selected, onClick }) => (
  <button
    className={`w-3 h-3 rounded-full transition-all duration-500 ${
      selected 
        ? 'bg-orange-500 shadow-lg shadow-orange-500/50 scale-125' 
        : 'bg-orange-500/30 hover:bg-orange-500/60 hover:shadow-md hover:shadow-orange-500/30'
    }`}
    type="button"
    onClick={onClick}
  />
);

interface PrevNextButtonProps {
  onClick: () => void;
  disabled: boolean;
  direction: 'prev' | 'next';
}

const PrevNextButton: React.FC<PrevNextButtonProps> = ({ onClick, disabled, direction }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-orange-500/20 hover:border-orange-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 ${
      direction === 'prev' ? 'left-4' : 'right-4'
    }`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {direction === 'prev' ? (
      <ChevronLeft className="w-7 h-7 text-orange-500" />
    ) : (
      <ChevronRight className="w-7 h-7 text-orange-500" />
    )}
  </button>
);

interface VideoCardProps {
  video: typeof youtubeShorts[0];
  index: number;
  onVideoClick: (video: typeof youtubeShorts[0]) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, index, onVideoClick }) => {
  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onVideoClick(video);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-3"
    >
      <div id='Short'
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-black shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-orange-500/20 hover:shadow-2xl border border-orange-500/20 hover:border-orange-500/50"
        onClick={handleVideoClick}
      >
        {/* Shorts aspect ratio container */}
        <div className="relative aspect-[9/16] overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Orange glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-black/40 opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
          
          {/* Animated orange border glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 animate-pulse" />
          </div>
        </div>
        
        {/* Play Button Overlay with Orange Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-20 h-20 bg-black/80 backdrop-blur-sm border-2 border-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 transition-all duration-500 group-hover:bg-orange-500/90 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/60"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-8 h-8 text-orange-500 group-hover:text-black ml-1 transition-colors duration-300" fill="currentColor" />
          </motion.div>
        </div>
        
        {/* Shorts indicator */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-orange-500/50 rounded-full px-3 py-1">
          <span className="text-orange-500 text-xs font-bold">SHORTS</span>
        </div>
        
        {/* Video Title with Orange Glow */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <p className="text-white text-sm font-semibold line-clamp-2 group-hover:text-orange-300 transition-colors duration-300">
            {video.title}
          </p>
        </div>
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const PortfolioSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Video modal state
  const [selectedVideo, setSelectedVideo] = useState<typeof youtubeShorts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  // Video modal handlers
  const handleVideoClick = useCallback((video: typeof youtubeShorts[0]) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    setIsPlaying(false); // Pause autoplay when modal opens
    stopAutoplay();
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    // Resume autoplay after modal closes
    setTimeout(() => {
      setIsPlaying(true);
      startAutoplay();
    }, 500);
  }, []);

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (!emblaApi || isModalOpen) return;
    
    autoplayRef.current = setInterval(() => {
      if (isPlaying && !isModalOpen) {
        emblaApi.scrollNext();
      }
    }, 4000);
  }, [emblaApi, isPlaying, isModalOpen]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    if (isInView && !isModalOpen) {
      startAutoplay();
    }
    
    return () => stopAutoplay();
  }, [isInView, startAutoplay, stopAutoplay, isModalOpen]);

  const handleMouseEnter = () => {
    if (!isModalOpen) {
      setIsPlaying(false);
      stopAutoplay();
    }
  };

  const handleMouseLeave = () => {
    if (!isModalOpen) {
      setIsPlaying(true);
      startAutoplay();
    }
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-24 px-4 bg-black overflow-hidden min-h-screen flex items-center"
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          {/* Main orange glow orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-600/25 rounded-full blur-3xl" 
          />
          
          {/* Additional floating particles */}
          <motion.div 
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/3 w-32 h-32 bg-orange-400/15 rounded-full blur-2xl" 
          />
          <motion.div 
            animate={{ 
              y: [20, -20, 20],
              x: [10, -10, 10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-500/20 rounded-full blur-xl" 
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Section Header with Premium Orange Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative"
              animate={isInView ? {
                textShadow: [
                  "0 0 20px rgba(249, 115, 22, 0.5)",
                  "0 0 40px rgba(249, 115, 22, 0.8)",
                  "0 0 20px rgba(249, 115, 22, 0.5)"
                ]
              } : {}}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Portfolio{' '}
              <motion.span 
                className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent relative"
                animate={isInView ? {
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Shorts
                {/* Glowing underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Discover my creative journey through these{' '}
              <motion.span 
                className="text-orange-400 font-semibold"
                animate={isInView ? {
                  color: ["#fb923c", "#f97316", "#ea580c", "#f97316", "#fb923c"]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                premium short-form thumbnail
              </motion.span>
              {' '}showcasing cutting-edge design, development techniques, and creative processes
            </motion.p>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-3xl border border-orange-500/20 bg-black/20 backdrop-blur-sm p-6" ref={emblaRef}>
              <div className="flex">
                {youtubeShorts.map((video, index) => (
                  <VideoCard 
                    key={video.id} 
                    video={video} 
                    index={index} 
                    onVideoClick={handleVideoClick}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <PrevNextButton onClick={scrollPrev} disabled={prevBtnDisabled} direction="prev" />
            <PrevNextButton onClick={scrollNext} disabled={nextBtnDisabled} direction="next" />
          </motion.div>

          {/* Mobile Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center space-x-4 mt-10 md:hidden"
          >
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </motion.div>

          {/* Desktop Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:flex justify-center items-center space-x-4 mt-10"
          >
            {scrollSnaps.slice(0, Math.ceil(youtubeShorts.length / 4)).map((_, index) => (
              <DotButton
                key={index}
                selected={Math.floor(selectedIndex / 4) === index}
                onClick={() => scrollTo(index * 4)}
              />
            ))}
          </motion.div>

          {/* Autoplay indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center mt-8"
          >
            <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-full px-4 py-2">
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isPlaying && !isModalOpen ? 'bg-orange-500 animate-pulse' : 'bg-gray-500'}`} />
              <span className="text-orange-400 text-sm font-medium">
                {isPlaying && !isModalOpen ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo.id}
          title={selectedVideo.title}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default PortfolioSlider;