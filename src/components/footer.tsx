export default function footer() {
  return (
    <section className="relative bg-gradient-to-r from-red-500 to-red-400 py-16 px-6 lg:px-8">
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
              <button className="bg-white text-red-500 text-xl font-bold px-8 py-3 rounded-4xl hover:bg-gray-50 transition-colors">
                Play Store
              </button>
              <button className="bg-white ml-10 text-red-500  text-xl font-bold px-8 py-3 rounded-4xl hover:bg-gray-50 transition-colors">
                App Store
              </button>
            </div>
          </div>

          {/* Right side - Mobile mockups */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            {/* Left Phone - Payment Methods (positioned behind and to the left) */}
            <div className="absolute -left-10 top-45 bg-white border-t-3 border-r-3 border-l-3 rounded-t-[70px] p-4 shadow-2xl w-80 h-[384px] z-10 transform ">
              {/* Phone frame */}
              <div className="bg-gray-100 rounded-2xl h-full p-4 relative">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="w-15 h-6 bg-black rounded-full flex items-center justify-center">
                    
                  </div>
                  <div className="w-8 h-6 bg-blue-500 rounded"></div>
                </div>

                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 border-l-2 border-b-2 border-gray-600 transform rotate-45 mr-3"></div>
                  <h2 className="text-lg font-semibold text-gray-800">Settings</h2>
                </div>

                {/* Payment Methods Section */}
                <div className="space-y-4">
                  <h3 className="text-base font-medium text-gray-700 mb-4">Payment Methods</h3>

                  {/* PayPal */}
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <span className="text-sm font-medium">PayPal</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">$</span>
                  </div>

                  {/* American Express */}
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AE</span>
                      </div>
                      <span className="text-sm font-medium">American Express</span>
                    </div>
                    <span className="text-green-600 text-sm">Bank Transfer</span>
                  </div>

                  {/* Mastercard */}
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <span className="text-sm font-medium">Mastercard</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs">🍎</span>
                      </div>
                      <span className="text-xs">Apple Pay</span>
                    </div>
                  </div>

                  {/* Visa Card */}
                  
                </div>
              </div>
            </div>

            {/* Right Phone - Thank You Screen (positioned in front and to the right) */}
            <div className="absolute -right-4 top-16 bg-white rounded-t-[70px] border-t-3 border-r-3 border-l-3 p-4 shadow-2xl w-85 h-[500px] z-20 transform">
              {/* Phone frame */}
              <div className="bg-gray-100 rounded-2xl h-full p-4 relative flex flex-col">
                {/* Status bar */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="w-15 h-6 bg-black rounded-full flex items-center justify-center">
                   
                  </div>
                  <div className="w-8 h-6 bg-blue-500 rounded"></div>
                </div>

                {/* Heart with gems */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                  <div className="relative">
                    {/* Heart shape made of colorful gems */}
                    <div className="grid grid-cols-7 gap-1 transform rotate-45">
                      {/* Top row */}
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div className="w-3 h-3"></div>

                      {/* Second row */}
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>

                      {/* Third row */}
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>

                      {/* Fourth row */}
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <div className="w-3 h-3"></div>

                      {/* Fifth row */}
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3"></div>

                      {/* Sixth row */}
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3"></div>
                      <div className="w-3 h-3"></div>
                    </div>
                  </div>

                  {/* Thank you text */}
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-red-500">Thank You!</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      John You Are Very
                      <br />
                      Humble Person!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
