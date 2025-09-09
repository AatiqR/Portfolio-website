"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div id="faq" className="bg-black min-h-screen w-full py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-xl mb-2">Questions?</h2>
        <h1 className="text-[#ff6a00] text-5xl md:text-6xl font-bold mb-16">We got answers.</h1>

<Accordion type="single" collapsible className="space-y-4">
  <AccordionItem value="item-1" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">What type of thumbnails do you design?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      I create custom YouTube thumbnails, faceless channel thumbnails, reels/shorts covers, and ad creatives optimized for high CTR.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How do I provide you with content for the thumbnail?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      You can send me your images, screenshots, branding assets, or video links via Google Drive, Dropbox, or WeTransfer.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">What is your usual turnaround time?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Most thumbnails are delivered within 12–24 hours. For bulk orders, delivery may take 2–3 days depending on quantity.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Do you provide revisions?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes, I offer free revisions (within fair use) to make sure your thumbnail matches your vision and performs well.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How much do you charge for thumbnails?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Pricing depends on style, complexity, and order size. I also offer bulk packages for YouTube channels and agencies.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Can you design thumbnails for long-term or bulk projects?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Absolutely! I work with many creators and brands on a monthly retainer or bulk package to maintain consistent, high-performing thumbnails.
    </AccordionContent>
  </AccordionItem>
</Accordion>





      </div>
    </div>
  )
}

