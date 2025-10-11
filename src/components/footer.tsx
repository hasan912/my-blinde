import Image from "next/image";
import AppDownloadButtons from "./appdownloadbutton";

const storyData = [
  { name: 'Jason', src: '/image3.png', active: true },
  { name: 'Eric', src: '/image2.png', active: false },
  { name: 'Model', src: '/image1.png', active: false },
];

export default function footer() {
  return (
    <section className="relative bg-gradient-to-r ml-5 mr-5 rounded-t-[50px] from-red-500 to-red-400 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main heading */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Join the fun - download Myblinde App!
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Your generosity can change lives every donation brings hope, support, and a brighter future. Give today
                and make a difference!
              </p>
            </div>

            {/* Donate button */}
            <div className="flex ">
              <AppDownloadButtons/>
            </div>
          </div>

          {/* Right side - Mobile mockups */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            {/* Left Phone - Payment Methods (positioned behind and to the left) */}
            <div className="absolute -left-13 top-[405px] w-80 h-[120px] z-10 transform ">
              {/* Phone frame */}
              <Image src={'/group2.png'} height={1500} width={700} className="h-[159px] w-[1500px]" alt=""/>
            </div>

            {/* Right Phone - Thank You Screen (positioned in front and to the right) */}
            <div className="absolute -right-7 top-41  w-85 h-[400px] z-20 transform">
              <Image src={'/group3.png'} height={1500} width={700} className="h-full w-[1500px]" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
