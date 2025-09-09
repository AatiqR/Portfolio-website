import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X,  Maximize2, Minimize2 } from 'lucide-react';
// Loader, Play, Pause, Volume2, VolumeX,
interface VideoModalProps {
  videoId: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, title, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      // Reset states when opening
      setIsPlaying(false);
      setIsMuted(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const toggleFullscreen = () => {
    if (!modalRef.current) return;
    
    if (!document.fullscreenElement) {
      modalRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className={`relative w-full max-w-6xl mx-4 ${
              isFullscreen ? 'h-screen max-w-none mx-0' : 'max-h-[90vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="absolute -top-16 left-0 right-0 flex justify-between items-center text-white z-10">
              <motion.h3 
                className="text-xl font-semibold text-orange-400 truncate mr-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h3>
              
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleFullscreen}
                  className="p-2 bg-black/50 hover:bg-orange-500/20 rounded-full border border-orange-500/30 hover:border-orange-500 transition-all duration-300"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5 text-orange-400" />
                  ) : (
                    <Maximize2 className="w-5 h-5 text-orange-400" />
                  )}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-black/50 hover:bg-red-500/20 rounded-full border border-red-500/30 hover:border-red-500 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-red-400" />
                </motion.button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 border border-orange-500/20">
              {/* Loading Spinner */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black z-20"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full mx-auto mb-4"
                      />
                      <p className="text-orange-400 text-lg font-medium">Loading video...</p>
                      <div className="mt-2 flex justify-center space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5] 
                            }}
                            transition={{ 
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2 
                            }}
                            className="w-2 h-2 bg-orange-500 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* YouTube Embed */}
              <div className={`relative ${isFullscreen ? 'aspect-video h-screen' : 'aspect-video'}`}>
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                  title={title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={handleIframeLoad}
                  style={{ border: 'none' }}
                />
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(249, 115, 22, 0.3)",
                      "0 0 40px rgba(249, 115, 22, 0.6)",
                      "0 0 20px rgba(249, 115, 22, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl"
                />
              </div>
            </div>

            {/* Video Info */}
            <motion.div 
              className="absolute -bottom-16 left-0 right-0 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-400 text-sm">
                Press <kbd className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-orange-400">ESC</kbd> to close
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;