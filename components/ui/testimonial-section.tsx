"use client"

import Image from "next/image"

interface Testimonial {
  name: string
  position: string
  quote: string
  initial: string
  image?: string // Optional image URL
}

export default function TestimonialSection() {
  // CSS animations defined inline
  const animationStyles = `
    @keyframes marquee-vertical {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-100% - var(--gap)));
      }
    }

    @keyframes marquee-vertical-reverse {
      0% {
        transform: translateY(calc(100% + var(--gap)));
      }
      100% {
        transform: translateY(0);
      }
    }

    .animate-marquee-vertical {
      animation: marquee-vertical var(--duration) linear infinite;
    }

    .animate-marquee-vertical-reverse {
      animation: marquee-vertical-reverse var(--duration) linear infinite;
    }
  `

const firstColumnTestimonials: Testimonial[] = [
  {
    name: "James Walker",
    position: "Founder, Tech Solutions",
    quote:
      "Rafey’s video editing gave our brand story the cinematic touch it was missing. Every frame feels intentional and powerful!",
    initial: "J",
    image: "/Assets/Reviews/user1.jpeg",
  },
  {
    name: "Sophia Martinez",
    position: "CEO, Digital Wave",
    quote:
      "The promotional video Rafey edited for us went viral! His sense of pacing, sound design, and visuals is unmatched.",
    initial: "S",
    image: "/Assets/Reviews/user2.png",
  },
  {
    name: "Liam Anderson",
    position: "Content Creator",
    quote:
      "Rafey turned hours of raw footage into a masterpiece. The transitions, effects, and storytelling were spot on!",
    initial: "L",
    image: "/Assets/Reviews/user3.jpeg",
  },
  {
    name: "Emma Johansson",
    position: "Founder, Creative Minds",
    quote:
      "Working with Rafey was seamless. He understood my vision for the ad campaign and delivered a polished, engaging video.",
    initial: "E",
    image: "/Assets/Reviews/user4.jpeg",
  },
  {
    name: "Noah Williams",
    position: "Marketing Head, Visionary Media",
    quote:
      "Rafey’s editing skills elevated our brand thumbnail to the next level. His color grading and motion graphics are next level professional.",
    initial: "N",
    image: "/Assets/Reviews/user5.jpeg",
  },
  {
    name: "Olivia Brown",
    position: "Owner, Art Boutique",
    quote:
      "The product showcase video Rafey edited captured our brand perfectly. Sales spiked after launching it online!",
    initial: "O",
    image: "/Assets/Reviews/user6.jpeg",
  },
  {
    name: "Ethan Carter",
    position: "Founder, CodeNest",
    quote:
      "From sound effects to cinematic cuts, Rafey nailed every detail of my YouTube series intro. Highly recommended!",
    initial: "E",
    image: "/Assets/Reviews/user1.jpeg",
  },
  {
    name: "Mia Schmidt",
    position: "Blogger & Influencer",
    quote:
      "Rafey edited my travel vlog beautifully! The flow, music sync, and color tones made the video so enjoyable to watch.",
    initial: "M",
    image: "/Assets/Reviews/user10.jpeg",
  },
  {
    name: "Benjamin Hughes",
    position: "CEO, InnovateTech",
    quote:
      "We needed a sharp corporate video, and Rafey delivered it flawlessly. His professionalism and creativity exceeded expectations.",
    initial: "B",
    image: "/Assets/Reviews/user9.png",
  },
  {
    name: "Charlotte Dupont",
    position: "Founder, Style & Trends",
    quote:
      "Our fashion reels edited by Rafey gained massive traction. His ability to match music and vibe is outstanding!",
    initial: "C",
    image: "/Assets/Reviews/user4.jpeg",
  },
];

const secondColumnTestimonials: Testimonial[] = [
  {
    name: "Jia Smith",
    position: "Fitness Coach, StrengthPro",
    quote:
      "Rafey edited my workout thumbnail with such energy and impact. The pacing motivates viewers to actually follow along!",
    initial: "J",
    image: "/Assets/Reviews2/u1.jpeg",
  },
  {
    name: "Michael Russo",
    position: "Gym Owner, Iron Core Fitness",
    quote:
      "Our promo video for the gym looked like a Netflix trailer after Rafey’s edits. The response from clients was incredible.",
    initial: "M",
    image: "/Assets/Reviews2/u2.jpeg",
  },
  {
    name: "Robert Allen",
    position: "YouTuber, Paws Academy",
    quote:
      "I gave Rafey hours of pet footage, and he turned it into an engaging, fun video that my audience absolutely loved!",
    initial: "R",
    image: "/Assets/Reviews2/u3.png",
  },
  {
    name: "Lissa Ben",
    position: "Strength Coach, FitZone",
    quote:
      "Rafey’s editing gave my online course thumbnail a professional, polished look. Now my students enjoy a smooth learning experience.",
    initial: "L",
    image: "/Assets/Reviews2/u4.jpeg",
  },
  {
    name: "Lilly Murphy",
    position: "Personal Trainer, PowerHouse Training",
    quote:
      "From sound balancing to transitions, Rafey perfected my fitness reels. They now look crisp and highly engaging!",
    initial: "L",
    image: "/Assets/Reviews2/u5.jpeg",
  },
  {
    name: "Ryan Parker",
    position: "Business Owner, Elite Fitness",
    quote:
      "The promo Rafey cut for my new gym was dynamic and exciting. It brought in tons of new memberships!",
    initial: "R",
    image: "/Assets/Reviews2/u6.png",
  },
  {
    name: "Tom Williams",
    position: "Dog Behaviorist, SmartPaws",
    quote:
      "Rafey edited my training tutorials into bite sized, engaging thumbnail. My clients now learn faster and stay engaged.",
    initial: "T",
    image: "/Assets/Reviews2/u7.jpeg",
  },
  {
    name: "Ethan Collins",
    position: "CrossFit Coach, Beast Mode Training",
    quote:
      "The energy and intensity Rafey brought to my workout edits are unreal. It feels like watching a sports commercial!",
    initial: "E",
    image: "/Assets/Reviews2/u8.jpeg",
  },
  {
    name: "Matt Roberts",
    position: "Content Creator, Happy Tails",
    quote:
      "Rafey edited my YouTube channel intro, and it instantly gave my thumbnail a professional edge. Subscribers loved it!",
    initial: "M",
    image: "/Assets/Reviews2/u9.jpeg",
  },
  {
    name: "Jason Brown",
    position: "Athletic Trainer, Pro Performance",
    quote:
      "Every video Rafey edited for me had perfect pacing, visuals, and clarity. He knows how to keep viewers hooked.",
    initial: "J",
    image: "/Assets/Reviews2/u10.png",
  },
];

const thirdColumnTestimonials: Testimonial[] = [
  {
    name: "Dr. Emma Carter",
    position: "Dentist, BrightSmile Dental",
    quote:
      "Rafey edited an explainer video for my clinic, making dental care look approachable and engaging for patients.",
    initial: "E",
    image: "/Assets/Reviews3/u1.jpeg",
  },
  {
    name: "Dr. Alex Robinson",
    position: "Physician, HealthFirst Clinic",
    quote:
      "Our medical awareness campaign thumbnail looked professional and clear thanks to Rafey editing expertise.",
    initial: "A",
    image: "/Assets/Reviews3/u2.png",
  },
  {
    name: "David Miller",
    position: "CEO, DriveEasy Car Dealership",
    quote:
      "The car commercial Rafey edited for us was sleek, fast paced, and visually stunning. Customers loved it instantly.",
    initial: "D",
    image: "/Assets/Reviews3/u3.jpeg",
  },
  {
    name: "Sophia Reynolds",
    position: "Real Estate Agent, HomeHorizon Realty",
    quote:
      "The property showcase thumbnail Rafey edited brought a luxury feel to my listings. Clients were impressed right away!",
    initial: "S",
    image: "/Assets/Reviews3/u4.jpeg",
  },
  {
    name: "Luca Fernández",
    position: "Entrepreneur, Global Ventures",
    quote:
      "Our international product launch video edited by Rafey looked like a high budget production. Truly world class work!",
    initial: "L",
    image: "/Assets/Reviews3/u5.jpeg",
  },
];




  return (
    <>
      {/* Include the animation styles */}
      <style jsx global>
        {animationStyles}
      </style>

      <div id="Reviews" className="flex flex-col my-24 bg-[#080808] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mx-auto font-bold text-center mb-10">
          What people are <span className="text-[#ff6a00]">saying </span>about us.
        </h1>
        <div className="relative flex h-[500px] max-w-5xl mx-auto flex-row items-center justify-center overflow-hidden rounded-lg">
          {/* First column - Top to Bottom */}
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Second column - Bottom to Top */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4 hidden md:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Third column - Bottom to Top */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4 hidden lg:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat5-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0a0a0a]"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]"></div>
        </div>
      </div>
    </>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative cursor-pointer overflow-hidden rounded-xl border p-4 mb-4 bg-[#0d0d0d] border-white/10 hover:bg-[#1a1a1a] transition-colors duration-300">
      <div className="flex flex-row items-center gap-2">
        <div className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
          {testimonial.image ? (
            // Method 1: Using fill property (good for unknown dimensions)
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={`${testimonial.name}'s profile picture`}
              fill
              sizes="40px"
              className="object-cover"
              priority={false}
              quality={85}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#262626] text-white">
              {testimonial.initial}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{testimonial.name}</figcaption>
          <p className="text-xs font-medium text-white/60">{testimonial.position}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{testimonial.quote}</blockquote>
    </figure>
  )
}

