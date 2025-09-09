import Hero from "../components/ui/HMhero"
import Yotubeclient  from "../components/ui/youtuberclient"
import Client  from "../components/ui/clientlogo"
import Thumbnail  from "../components/ui/Ytthumbnail"
import Short  from "../components/ui/ShortP"
import Ytportfolio from "../components/ui/PortfolioYT"
import Reviews from "../components/ui/testimonial-section"
import Booking from "../components/ui/Booking"
import Faqs from "../components/ui/faq-section"
import About from "../components/ui/Aboutus"
import Benefit from "../components/ui/features-section"
import Footer from "../components/ui/footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <Yotubeclient/>
      <Client/>
      <Thumbnail/>
      <Short/>
      <Ytportfolio/>
      <Reviews/>
      <Benefit/>
      <About/>
      <Faqs />
      <Booking/>
      <Footer/>
    </div>
  )
}
