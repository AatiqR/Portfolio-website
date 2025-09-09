import { Check } from "lucide-react"

export default function ServiceCards() {
  return (
    <div id="Service" className="w-full bg-black text-white py-8">
      <div className="max-w-8xl mx-auto px-4">
        {/* Service Heading with UFO Green Glow */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3 text-[#00ff08] ufo-glow">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional web development solutions tailored to your needs. Choose the service that best fits your
            project requirements.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
  {/* Custom Websites */}
  <div className="border border-gray-800 rounded-xl p-5 flex flex-col">
    <h1 className="text-2xl font-bold mb-1 text-[#00ff08]">Custom Websites</h1>
    <div className="text-sm font-bold text-white mb-4">Stand out with a one-of-a-kind website crafted just for your brand.</div>

    <h3 className="text-lg font-semibold mb-4">What’s Included?</h3>

    <ul className="space-y-2 mb-6 text-sm">
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Custom designs that capture your unique vision</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
        <span>Flawless performance on all devices</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Ready in just <b>3</b> days</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Up to 5 revisions for perfection</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Easy-to-use contact form included</span>
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 mb-4 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Lightning Fast</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Truly Unique</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Ready</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🌟 All Device Responsive</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">💰 100% Money-Back Guarantee</span>
    </div>

    <div className="mt-auto">
      <a
        href="https://wa.me/+9203432357017?text=Hi,%20I%20want%20to%20claim%20my%20spot%20for%20a%20Custom%20Website!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white text-sm py-1.5 text-center block"
      >
        Claim Your Spot Now
      </a>
    </div>
  </div>
  {/* Website Redesign */}
  <div className="border border-gray-800 rounded-xl p-5 flex flex-col">
    <h2 className="text-2xl font-bold mb-1 text-[#00ff08]">Website Redesign</h2>
    <div className="text-sm font-bold text-white mb-4">Revamp your old site into a modern masterpiece that wows visitors.</div>

    <h3 className="text-lg font-semibold mb-4">What’s Included?</h3>

    <ul className="space-y-2 mb-6 text-sm">
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>A stunning new look for your existing site</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Perfect on desktops, tablets, and phones</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Delivered in 21 days</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>2 rounds of tweaks included</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Seamless content transfer</span>
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 mb-4 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Speed Optimized</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Fresh Designs</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO Boost</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🌟 Responsive for All Device</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">💰 100% Money-Back Guarantee</span>
    </div>

    <div className="mt-auto">
      <a
        href="https://wa.me/+9203432357017?text=Hi,%20I%20want%20to%20claim%20my%20spot%20for%20a%20Website%20Redesign!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white text-sm py-1.5 text-center block"
      >
        Claim Your Spot Now
      </a>
    </div>
  </div>

  {/* Portfolio Websites */}
  <div className="border border-gray-800 rounded-xl p-5 flex flex-col">
    <h2 className="text-2xl text-[#00ff08] font-bold mb-1">Portfolio Websites</h2>
    <div className="text-sm font-bold text-white mb-4">Highlight your talent with a jaw-dropping portfolio that gets noticed.</div>

    <h3 className="text-lg font-semibold mb-4">What’s Included?</h3>

    <ul className="space-y-2 mb-6 text-sm">
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Beautiful layouts to showcase your best work</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Works flawlessly on any device</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Ready in <b>3</b> days</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>3 rounds of revisions for your vision</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Interactive gallery with filters</span>
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 mb-4 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Fast Loading</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Eye-Catching</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Optimized</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🌟Responsive for All Device</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">💰 100% Money-Back Guarantee</span>
    </div>

    <div className="mt-auto">
      <a
        href="https://wa.me/+9203432357017?text=Hi,%20I%20want%20to%20claim%20my%20spot%20for%20a%20Portfolio%20Website!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white text-sm py-1.5 text-center block"
      >
        Claim Your Spot Now
      </a>
    </div>
  </div>

  {/* E-commerce Websites */}
  <div className="border border-gray-900 rounded-xl p-5 flex flex-col">
    <h2 className="text-2xl font-bold mb-1 text-[#00ff08]">E-commerce</h2>
    <div className="text-sm font-bold mb-4">Launch a sleek online store that turns visitors into loyal customers.</div>

    <h3 className="text-lg font-semibold mb-4">What’s Included?</h3>

    <ul className="space-y-2 mb-6 text-sm">
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>A store designed to maximize sales</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Mobile-ready for shoppers on the go</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Live in <b>5</b> days</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>3 rounds of refinements</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Secure payment gateways</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Easy product management tools</span>
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 mb-4 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 High Performance</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Conversion-Driven</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Enhanced % Responsive</span>
      {/* <span className="bg-gray-800 px-2 py-1 rounded-full">🌟 Free 1-Month Ad Campaign</span> */}
      <span className="bg-gray-800 px-2 py-1 rounded-full">💰 100% Money-Back Guarantee</span>
    </div>

    <div className="mt-auto">
      <a
        href="https://wa.me/+9203432357017?text=Hi,%20I%20want%20to%20claim%20my%20spot%20for%20an%20E-commerce%20Website!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white text-sm py-1.5 text-center block"
      >
        Claim Your Spot Now
      </a>
    </div>
  </div>

  {/* New Service: Business Website */}
  <div className="border border-gray-800 rounded-xl p-5 flex flex-col">
    <h2 className="text-2xl font-bold mb-1 text-[#00ff08]">Business Website</h2>
    <div className="text-sm font-bold text-white mb-4">Grow your business with a professional site that wins trust and clients.</div>

    <h3 className="text-lg font-semibold mb-4">What’s Included?</h3>

    <ul className="space-y-2 mb-6 text-sm">
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Polished design tailored to your business</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Responsive across all devices</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Ready in just <b>3</b> days</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>4 rounds of revisions</span>
      </li>
      <li className="flex items-start">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
        <span>Lead capture forms included</span>
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 mb-4 text-xs">
      <span className="bg-gray-800 px-2 py-1 rounded-full">🔹 Quick Turnaround</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🎨 Professional Look</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">⚡ SEO-Ready</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">🌟Responsive for All Device</span>
      <span className="bg-gray-800 px-2 py-1 rounded-full">💰 100% Money-Back Guarantee</span>
    </div>

    <div className="mt-auto">
      <a
        href="https://wa.me/+9203432357017?text=Hi,%20I%20want%20to%20claim%20my%20spot%20for%20a%20Business%20Website!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white text-sm py-1.5 text-center block"
      >
        Claim Your Spot Now
      </a>
    </div>
  </div>
</div>


      </div>
    </div>
  )
}

