import Image from "next/image"; // Correct import statement
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcommerceLandingPage() {
  return (
  <div className="min-h-screen w-full rounded-full bg-gray-50">
       {/* 1st */}
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Left side with phone mockups */}
          <div className="relative top-12 h-[200px] md:h-[400px] rounded-4xl overflow-hidden bg-transparent">
            <Image
              src="/Assets/project/g2.gif"
              width={600}
              height={400}
              alt="Gym Website Preview"
              className="w-full h-full object-contain rounded-4xl transition-transform duration-300 hover:scale-105"
              priority // Loads image faster for hero section
            />
          </div>

          {/* Right side with text content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
              Discover <span className="text-[#00eeff]">Gigafit</span>
              <br />
              Gym Website
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Elevate your fitness journey with a sleek, modern gym website. Seamlessly manage memberships, book expert trainers, access tailored workout plans, and enjoy live or on-demand classes—all from one dynamic platform!
            </p>

            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Fully Responsive Design</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Integrated Contact Form</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Easy Pre-Registration</span>
              </div>

              <div className="flex items-center gap-4">
                <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
                <span className="text-lg text-gray-800 font-bold">Multi-Section Layout</span>
              </div>
            </div>

            <div className="pt-8">
              <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                Book a Free Consultation
              </Button>
            </div>

          </div>
        </div>
      </div>
       {/* 2nd */}
       <div className="container mx-auto px-6 py-2 md:py-28">
  <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
    {/* Left side with phone mockups */}
    <div className="relative h-[300px] md:h-[500px] overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/portfoliowebsite.gif"
        width={600}
        height={400}
        alt="Freelancer Portfolio Preview"
        className="w-full h-full object-contain rounded-3xl transition-transform duration-300 hover:scale-105"
        priority // Loads image faster for hero section
      />
    </div>

    {/* Right side with text content */}
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
        Check out <span className="text-[#f700ff]">Freelancer</span>
        <br />
        Portfolio Website
      </h1>

      <p className="text-xl text-gray-700 leading-relaxed">
        Create a strong online presence with a sleek and modern freelancer portfolio website. 
        This platform allows professionals to showcase their skills, experience, and projects 
        in an engaging and professional way, making it easier to attract potential clients.
      </p>

      <div className="space-y-5 pt-2">
        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Fully Responsive Design</span>
        </div>

        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Integrated Contact Form</span>
        </div>

        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Showcase Projects & Services</span>
        </div>

        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Multi-Section Layout</span>
        </div>
      </div>

      <div className="pt-8">
        <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
          View Portfolio
        </Button>
      </div>
    </div>
  </div>
</div>

      {/* 3rd */}
      <div className="container mx-auto px-6 py-28 md:py-28">
  <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
    {/* Left side with project preview */}
    <div className="relative bottom-25 h-[300px] md:h-[500px] overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/dessert.gif"
        width={600}
        height={400}
        alt="Home Renovation Preview"
        className="w-full h-full object-contain rounded-3xl"
        priority
      />
    </div>
    
    {/* Right side with text content */}
    <div className="space-y-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
        Home renovation Website <span className="text-[#ffaa00]"> Dessert contracting </span>
      </h1>

      <p className="text-xl text-gray-700 leading-relaxed">
      Designed and developed a sleek, responsive website for Desert Contracting, 
      a leading home renovation company in Dubai. The site features a modern UI/UX, 
      interactive project galleries, integrated contact forms, and a dynamic layout to enhance user engagement.
       Optimized for performance, accessibility, and seamless navigation, 
      ensuring a premium browsing experience for potential clients.
      </p>

      <div className="space-y-5 pt-2">
        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Modern & Functional Designs</span>
        </div>

        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Project Gallery Showcase</span>
        </div>

        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Responsive & attractive</span>
        </div>

        <div className="flex items-center gap-4">
          <Check className="h-7 w-7 text-[#25D366] flex-shrink-0" />
          <span className="text-lg text-gray-800 font-bold">Integrated Contact Form</span>
        </div>
      </div>

      <div className="pt-8">
        <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
          View Portfolio
        </Button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}