import { CardHoverEffectDemo } from "@/components/feature"
import Hero from "@/components/hero"
import HeroSection from "@/components/spark"
import install from "@/components/install"
import donate from "@/components/donate"
import {testinomial} from "@/components/testinomial"
import footer from "@/components/footer"

const page = () => {
  return (
  <>
  <Hero/>
{CardHoverEffectDemo()}
<HeroSection/>
{install()}
{donate()}
{testinomial()}
{footer()}
  </>
  )
}

export default page