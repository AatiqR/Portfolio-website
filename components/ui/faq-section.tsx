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
      <span className="text-lg">What type of video editing services do you provide?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      I edit YouTube thumbnail, cash cow content, reels/shorts, ads, and talking head thumbnail.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How do I send you my raw footage and assets?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      You can share files through Google Drive, Dropbox, or WeTransfer.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">What is your usual turnaround time?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Short thumbnail take 24–48 hours, while longer thumbnail need 3–5 days.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Do you provide revisions?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Yes, I offer free revisions (within fair use) to match your requirements.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">How much do you charge for video editing?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Prices vary depending on length and complexity. I’ll share a custom quote once I know your project details.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-6" className="border-0">
    <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
      <span className="text-lg">Can you handle long-term projects or bulk orders?</span>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 text-white">
      Absolutely! I work with many clients on a monthly retainer or package basis for YouTube channels and social media content.
    </AccordionContent>
  </AccordionItem>
</Accordion>




      </div>
    </div>
  )
}

