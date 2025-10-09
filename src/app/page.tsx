// import FeaturesSection, { CardHoverEffectDemo } from "@/components/feature"
import Hero from "@/components/hero"
import HeroSection from "@/components/spark"
import install from "@/components/install"
import donate from "@/components/donate"
import TestimonialsSection from "@/components/testinomial"
import footer from "@/components/footer"
import FeaturesSection from "@/components/feature"

const page = () => {
  return (
  <>
  <Hero/>
<FeaturesSection/>
<HeroSection/>
{install()}
{donate()}
<TestimonialsSection/>
{footer()}
  </>
  )
}

export default page