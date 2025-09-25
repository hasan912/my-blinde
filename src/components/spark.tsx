import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Mobile mockups */}
          <div className="relative">
            {/* Red circular background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500 rounded-full -z-10"></div>

            {/* Mobile mockups */}
            <div className="relative z-10">
              <Image
                src="/image4.png"
                alt="Mobile app mockups showing social media interface"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-18">
            {/* Main heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Where Every Click <span className="block">Sparks a Connection!</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart
                and change a life!
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-6">
              {/* Short Videos & Reels */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Short Videos & Reels</h3>
                  <p className="text-gray-600 text-sm">
                    Share engaging, bite-sized content that keeps everyone entertained.
                  </p>
                </div>
              </div>

              {/* Smart Notifications */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🔔</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Smart Notifications</h3>
                  <p className="text-gray-600 text-sm">Stay updated on what matters without the noise.</p>
                </div>
              </div>

              {/* Interest-Based Communities */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Interest-Based Communities</h3>
                  <p className="text-gray-600 text-sm">Join groups and discussions that match your passion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
