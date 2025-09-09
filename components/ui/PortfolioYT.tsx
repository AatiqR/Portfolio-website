"use client";

import { motion, useInView } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const HelpSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

const youtubethumbnail = [
    {
    id: "0K5ZeNbUGgA",
    thumbnail: "https://img.youtube.com/vi/0K5ZeNbUGgA/hqdefault.jpg",
    overlayText: "Sales Funnel",
  },

  {
    id: "t18LkEWqai0",
    thumbnail: "https://img.youtube.com/vi/t18LkEWqai0/hqdefault.jpg",
    overlayText: " Live A Life Full of HAPPINESS ",
  },
    {
    id: "lyLEBnUTqJI",
    thumbnail: "https://img.youtube.com/vi/lyLEBnUTqJI/hqdefault.jpg",
    overlayText: "21 Life-Changing Books ",
  },
  {
    id: "0BwRauAB6Zc",
    thumbnail: "https://img.youtube.com/vi/0BwRauAB6Zc/hqdefault.jpg",
    overlayText: "How to Start Reading Again",
  },
   {
    id: "ZpP2dgREjSU",
    thumbnail: "https://img.youtube.com/vi/ZpP2dgREjSU/hqdefault.jpg",
    overlayText: "7 Signs You're Financially Well",
  },
  {
    id: "tpR0Hk7fcpQ",
    thumbnail: "https://img.youtube.com/vi/tpR0Hk7fcpQ/hqdefault.jpg",
    overlayText: "3 Weekend Businesses",
  },
  {
    id: "QThz1B8SHmc",
    thumbnail: "https://img.youtube.com/vi/QThz1B8SHmc/hqdefault.jpg",
  
    overlayText: "How To Manage Your Money Like The 1%",
  },
{
  id: "rl9WxD10WLs",
  thumbnail: "https://img.youtube.com/vi/rl9WxD10WLs/hqdefault.jpg",
  overlayText: "5 Books for the Self-Learner ",
},
  
];



  // ✅ Short form video data (only IDs)
  const shortFormthumbnail = [
    {
      id: "MPZ5OHVwU_I",
      thumbnail:
        "https://i.ytimg.com/vi/MPZ5OHVwU_I/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBDedPd5bQVkVW4nfwIk0nJB3mSVQ",
      title: "Wearing SPF",
      overlayText: "Daily routine",
    },
    {
      id: "cEkQXu17__U",
      thumbnail:
        "https://i.ytimg.com/vi/cEkQXu17__U/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAkjYK5sZz1_5RYEI_686XIr99qaw",
      title: "but I can't",
      overlayText: "Honest truth",
    },
    {
      id: "u2B1cuKinNM",
      thumbnail:
        "https://i.ytimg.com/vi/u2B1cuKinNM/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAy2iuvXyr51P501QW6lC9LUTqNuw",
      title: "How to save money fast",
      overlayText: "Money tips",
    },
    {
      id: "PkHjvwdPxtk",
      thumbnail:
        "https://i.ytimg.com/vi/PkHjvwdPxtk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCj65WTpTgvnVOELiR0tC8QtllqxQ",
      title: "Creating social media ads used to feel SO overwhelming.",
      overlayText: "Mind tricks",
    },
    {
      id: "hh40VWJS5vw",
      thumbnail:
        "https://i.ytimg.com/vi/hh40VWJS5vw/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLB6W8DLZ3RBAz2JqfRFn_fURRYbVQ",
      title:
        "How dealerships really make money (hint: it’s not the shiny car on the lot). 💸",
      overlayText: "Money tips",
    },
    {
      id: "e9xaHlNheSI",
      thumbnail:
        "https://i.ytimg.com/vi/e9xaHlNheSI/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDa-K02VieWfb5T0MI42jMSWaRM5g",
      title: "Thinnest Apple Products #apple #smartphone #tech",
      overlayText: "Viral moment",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ Video Card Component
  const VideoCard = ({
    video,
    aspectRatio = "aspect-video",
    isShortForm = false,
  }: {
    video: any;
    aspectRatio?: string;
    isShortForm?: boolean;
  }) => {
    const isPlaying = playingVideo === video.id;

    const handlePlay = () => {
      setPlayingVideo(video.id);
    };

    return (
      <motion.div
        className={`relative ${aspectRatio} rounded-2xl overflow-hidden cursor-pointer group bg-black`}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={handlePlay}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Play Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl group-hover:bg-white transition-all duration-300 group-hover:shadow-orange-500/25">
                <Play className="w-6 h-6 text-black fill-current ml-1" />
              </div>
            </motion.div>

            {/* Video Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              
                {!isShortForm && video.overlayText && (
                <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {video.overlayText}
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    );
  };

  const ExploreButton = () => (
    <motion.button
      className="relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl text-white font-semibold overflow-hidden group shadow-lg shadow-orange-500/25"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center gap-3">
        <span className="text-lg">Explore pricing</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.button>
  );

  return (
    <section id="service" className="min-h-screen bg-black py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            How can we help{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent italic">
              you?
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
          From short-form thumbnail, to long-form thumbnail, to ad creatives, and VSLs, we have got you covered on every front.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {/* YouTube thumbnail Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 via-black to-orange-900/20 rounded-3xl p-10 md:p-16 shadow-2xl border border-orange-500/10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Talking Head thumbnail
                </h2>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  YouTube thumbnail made more engaging than ever for longer watch
                  time and more subscribers.
                </p>
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {youtubethumbnail.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Short Form thumbnail Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 via-black to-orange-900/20 rounded-3xl p-10 md:p-16 shadow-2xl border border-orange-500/10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Reels Video 
                </h2>
                <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                  Nail your Reels, TikToks, LinkedIn and YouTube shorts to
                  optimize engagement and shareability.
                </p>
                <ExploreButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {shortFormthumbnail.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    aspectRatio="aspect-[9/16]"
                    isShortForm={true}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
