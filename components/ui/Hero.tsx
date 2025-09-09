"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion";

// Star animation component
const FallingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Star properties
    const stars: {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      tail: { x: number; y: number }[]
    }[] = []

    // Create stars
    const createStars = () => {
      const maxStars = Math.floor(window.innerWidth / 35)

      if (stars.length < maxStars && Math.random() < 0.03) {
        const size = Math.random() * 2 + 1
        stars.push({
          x: Math.random() * canvas.width,
          y: 0,
          size,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          tail: [],
        })
      }
    }

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star, index) => {
        // Update position
        star.y += star.speed

        // Store position for tail
        star.tail.push({ x: star.x, y: star.y })
        if (star.tail.length > 5) {
          star.tail.shift()
        }

        // Draw tail
        if (star.tail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(star.tail[0].x, star.tail[0].y)

          for (let i = 1; i < star.tail.length; i++) {
            ctx.lineTo(star.tail[i].x, star.tail[i].y)
          }

          ctx.strokeStyle = `rgba(0, 255, 89, ${star.opacity * 0.5})` // Changed to #ff6a00
          ctx.lineWidth = star.size / 2
          ctx.stroke()
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 89, ${star.opacity})` // Changed to #ff6a00
        ctx.fill()

        // Remove if off screen
        if (star.y > canvas.height) {
          stars.splice(index, 1)
        }
      })
    }

    // Animation loop
    const animate = () => {
      createStars()
      drawStars()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
}

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hasHover, setHasHover] = useState(false)

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (hasHover) {
      window.addEventListener("mousemove", updatePosition)
      return () => window.removeEventListener("mousemove", updatePosition)
    }
  }, [hasHover])

  if (!hasHover) return null

  return (
    <>
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-[#ff6a00] pointer-events-none transition-all duration-100 ease-out z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="fixed w-2 h-2 bg-[#ff6a00] rounded-full pointer-events-none transition-all duration-75 ease-out z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  )
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const words = [
    "SEO-Optimized",
    "Sales-Boosting",
    "High-Converting",
    "Revenue-Generating",
    "Lead-Driving",
    "Profit-Boosting",
    "Conversion-Focused",
    "Business-Growing",
    "Customer-Attracting",
    "Results-Driven",
    "Brand-Enhancing",
    "Market-Dominating",
    "Performance-Optimized"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FallingStars />
      <MouseFollower />
      {/* Navigation */}
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full w-[90%] sm:w-[80%] md:w-[70%] max-w-5xl">
        <div className="flex items-center justify-between">
          <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-8 w-8 sm:h-6 sm:w-6" />
          </button>

          <div className="hidden md:flex flex-1">
            <div className="flex items-center gap-4 lg:gap-20">
              <Link
                href="#Contact"
                className="text-black hover:text-[#ff6a00] text-md font-extrabold transition-colors whitespace-nowrap"
              >
              Contact Us
              </Link>
              <Link
                href="#Service"
                className="text-black hover:text-[#ff6a00] text-md font-extrabold transition-colors whitespace-nowrap"
              >
                Services
              </Link>
            </div>
          </div>

          <Link
            href="#"
            className="flex items-center gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Sparkles className="h-7 w-7 sm:h-6 sm:w-6 text-[#ff6a00]" />
            <span className="text-black font-extrabold text-2xl sm:text-lg">Rafey</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center gap-4 lg:gap-20">
              <Link
                href="#Project"
                className="text-black hover:text-[#ff6a00] text-md font-extrabold transition-colors whitespace-nowrap"
              >
                Projects
              </Link>
              <Link
                href="#Reviews"
                className="text-black hover:text-[#ff6a00] text-md font-extrabold transition-colors whitespace-nowrap"
              >
                Reviews
              </Link>
            </div>
          </div>
          <div className="w-7 md:hidden"></div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black rounded-lg p-6 flex flex-col gap-6">
            <Link href="#Contact" className="text-white hover:text-[#ff6a00] text-xl sm:text-sm font-bold transition-colors">
              Contact Us
            </Link>
            <Link href="#Service" className="text-white hover:text-[#ff6a00] text-xl sm:text-sm font-bold transition-colors">
              Services
            </Link>
            <Link href="#Project" className="text-white hover:text-[#ff6a00] text-xl sm:text-sm font-bold transition-colors">
              Projects
            </Link>
            <Link href="#Reviews" className="text-white hover:text-[#ff6a00] text-xl sm:text-sm font-bold transition-colors">
              Reviews
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-24 sm:pt-20 md:pt-28 px-8 sm:px-4">
        <div className="mx-auto max-w-7xl relative">
          <div className="absolute -left-2 sm:-left-4 top-10 sm:top-20">
            <Sparkles className="h-12 w-12 sm:h-8 sm:w-8 text-[#ff6a00]" />
          </div>
          <div className="absolute -right-2 sm:-right-4 top-20 sm:top-40">
            <Sparkles className="h-12 w-12 sm:h-8 sm:w-8 text-[#ff6a00]" />
          </div>

          <div className="text-center space-y-10 sm:space-y-6 relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-24 sm:w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent transform -rotate-45"></div>

              <Star className="absolute top-1/3 left-1/6 h-6 w-6 sm:h-4 sm:w-4 text-[#ff6a00] animate-pulse" />
              <Star
                className="absolute bottom-1/3 right-1/6 h-5 w-5 sm:h-3 sm:w-3 text-[#ff6a00] animate-pulse"
                fill="#ff6a00"
              />

              <div className="w-5 h-5 sm:w-3 sm:h-3 bg-[#ff6a00] rounded-full absolute animate-float1 top-1/4 left-1/3 opacity-50"></div>
              <div className="w-4 h-4 sm:w-2 sm:h-2 bg-[#ff6a00] rounded-full absolute animate-float2 left-1/4 top-3/4 opacity-50"></div>
              <div className="w-3 h-3 sm:w-1 sm:h-1 bg-[#ff6a00] rounded-full absolute animate-float3 right-1/4 bottom-1/4 opacity-50"></div>

              <div className="absolute top-[350px] sm:top-[270px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-40 sm:w-24 sm:h-24 rounded-full bg-[#ff6a00] opacity-10 animate-pulse"></div>
                <div className="w-32 h-32 sm:w-16 sm:h-16 rounded-full bg-[#ff6a00] opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse animation-delay-200"></div>
              </div>
            </div>

            <h1 className="text-6xl sm:text-4xl md:text-6xl lg:text-7xl font-bold max-w-sm sm:max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto leading-tight relative z-10 text-white">
  I Build{" "}
  <motion.span
    key={words[index]}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="text-yellow-400"
  >
    {words[index]}
  </motion.span>{" "}
  Websites That Drive Business Growth.
</h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-4 mt-10 sm:mt-6">
              <Button
                size="lg"
                className="relative w-full sm:w-auto text-xl sm:text-base py-8 sm:py-2 px-8 text-white bg-[#ff8c00] border-none rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-[#ff7b00] active:translate-y-1 flex items-center gap-3"
                onClick={() => window.location.href = 'mailto:Rafeyr9527@email.com'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm16 2-8 5-8-5v12h16zm-8 4 8-5H4z"
                  />
                </svg>
                <span>Email Now</span>
              </Button>

              {/* <Button
                size="lg"
                variant="outline"
                className="relative w-full sm:w-auto mt-4 sm:mt-0 text-xl sm:text-base py-8 sm:py-2 px-8 text-black bg-[#00e650] border-none rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:translate-y-1 flex items-center gap-3"
                onClick={() => window.open('https://wa.me/+9203432357017', '_blank')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-17 h-17"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 0 0-8.464 15.51L2 22l4.49-1.535A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-6.829-12.2l.383-.6-.57-.822A8.003 8.003 0 1 1 20 12a8.001 8.001 0 0 1-8 8zm-1.07-5.646c1.225.746 2.163 1.16 2.834 1.24.56.067 1.007-.073 1.42-.414.302-.256.74-.805.916-1.108.169-.288.14-.518.01-.704-.104-.151-.24-.204-.394-.285-.154-.081-.985-.485-1.14-.544s-.265-.081-.375.082c-.112.163-.433.545-.53.662-.096.118-.194.133-.35.046-.292-.16-.961-.354-1.835-1.124-.68-.583-1.14-1.304-1.34-1.607-.09-.135-.009-.254.07-.34.073-.08.163-.186.244-.28.08-.094.107-.148.162-.24.056-.09.03-.165-.004-.232-.035-.066-.32-.77-.438-1.058-.114-.282-.228-.237-.316-.237-.086 0-.186-.012-.285-.007s-.267.038-.406.176c-.14.139-.55.536-.55 1.31 0 .773.562 1.52.64 1.63.079.11 1.104 1.71 2.678 2.605z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Get a Free Website Audit Now.</span>
              </Button> */}
              <Button
  size="lg"
  variant="outline"
  className="relative w-full sm:w-auto mt-4 sm:mt-0 text-lg sm:text-base py-6 sm:py-2 px-6 sm:px-8 text-black bg-[#00e650] border-none rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl active:translate-y-1 flex items-center gap-2 sm:gap-3"
  onClick={() => window.open('https://wa.me/+9203432357017', '_blank')}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 sm:w-7 sm:h-7"
  >
    <path
      fillRule="evenodd"
      d="M12 2a10 10 0 0 0-8.464 15.51L2 22l4.49-1.535A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-6.829-12.2l.383-.6-.57-.822A8.003 8.003 0 1 1 20 12a8.001 8.001 0 0 1-8 8zm-1.07-5.646c1.225.746 2.163 1.16 2.834 1.24.56.067 1.007-.073 1.42-.414.302-.256.74-.805.916-1.108.169-.288.14-.518.01-.704-.104-.151-.24-.204-.394-.285-.154-.081-.985-.485-1.14-.544s-.265-.081-.375.082c-.112.163-.433.545-.53.662-.096.118-.194.133-.35.046-.292-.16-.961-.354-1.835-1.124-.68-.583-1.14-1.304-1.34-1.607-.09-.135-.009-.254.07-.34.073-.08.163-.186.244-.28.08-.094.107-.148.162-.24.056-.09.03-.165-.004-.232-.035-.066-.32-.77-.438-1.058-.114-.282-.228-.237-.316-.237-.086 0-.186-.012-.285-.007s-.267.038-.406.176c-.14.139-.55.536-.55 1.31 0 .773.562 1.52.64 1.63.079.11 1.104 1.71 2.678 2.605z"
      clipRule="evenodd"
    />
  </svg>
  <span className="text-base sm:text-lg">Get a Free Website Audit Now.</span>
</Button>
            </div>

            <div className="relative mt-16 sm:mt-18">
              <div className="absolute -right-2 sm:-right-8 -top-8 sm:top-0 flex items-center gap-4 sm:gap-2 bg-white p-4 sm:p-2 rounded-lg shadow-lg">
                <div className="flex gap-2 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-5 w-5 sm:h-3 sm:w-3 text-[#ff6a00]" />
                  ))}
                </div>
                <div className="text-lg sm:text-xs font-medium text-black">50+ Project</div>
              </div>

              <div className="w-[320px] h-[320px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] mx-auto relative right-[-6px] top-[-12px]">
                <Image
                  src="/Assets/my.png"
                  alt="Happy boy"
                  fill
                  className="rounded-full object-cover"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 200px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export { Hero }