import { Grid, Zap, PuzzleIcon as PuzzlePiece, CreditCard, Users, Infinity } from "lucide-react"
import { Geist } from "next/font/google"

// Initialize the Geist font
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function FeaturesSection() {
  return (
    <div className={`bg-black text-white py-20 px-4 md:px-8 lg:px-16 ${geist.className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]">Benefits</span>
          </h2>
          <p className="text-3xl md:text-2xl font-bold text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]">But, why would you want to work with us?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Grid
                className="w-10 h-10 text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Stress-Free Editing, Always On Time</h3>
            <p className="text-base text-gray-300 leading-relaxed">
              No missed deadlines. I handle the edits while you focus on growing your brand expect reliable delivery without compromise on quality.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Zap className="w-10 h-10 text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]" strokeWidth={1.25} />
            </div>
            <h3 className="text-2xl font-bold mb-3">thumbnail That Win Attention</h3>
            <p className="text-base text-gray-300 leading-relaxed">
            Not just visually stunning every edit is crafted to keep viewers hooked, increase watch time, and drive real results.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <PuzzlePiece
                className="w-10 h-10 text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Cinematic Quality, Every Project</h3>
            <p className="text-base text-gray-300 leading-relaxed">
          With top-tier tools (Premiere Pro, After Effects, DaVinci, Final Cut), your thumbnail stand out with sharp cuts, rich colors, and professional effects.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <CreditCard
                className="w-10 h-10 text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Tailored for Every Platform</h3>
            <p className="text-base text-gray-300 leading-relaxed">From viral TikToks to polished YouTube content to ad-ready thumbnail, I optimize each edit for maximum impact where it matters most.</p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Users
                className="w-10 h-10 text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Collaboration Made Simple</h3>
            <p className="text-base text-gray-300 leading-relaxed">
Your ideas + my expertise = content that truly reflects your vision. Smooth communication and zero confusion at every step.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-start">
            <div className="mb-5">
              <Infinity
                className="w-10 h-10 text-[#ff6a00] drop-shadow-[0_0_8px_rgba(56,216,111,0.6)]"
                strokeWidth={1.25}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Creative Ideas, Not Just Editing</h3>
            <p className="text-base text-gray-300 leading-relaxed">
             I don’t just follow instructions. I bring new concepts, transitions, and storytelling techniques to make your content unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

