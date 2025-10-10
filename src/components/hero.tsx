import { Bell, Calendar, Grid, Heart, Home, Menu, MessageCircle, MoreHorizontal, Plus, Search, Share2, User } from 'lucide-react';
import React from 'react';

const storyData = [
  { name: 'Jason', src: '/image3.png', active: true },
  { name: 'Eric', src: '/image2.png', active: false },
  { name: 'Model', src: '/image1.png', active: false },
];
// Reusable Icon for the Mybindle logo
const MybindleLogo = ({ colorClass = "text-red-600" }) => (
  <div className="flex items-center space-x-2  font-bold">
    {/* Placeholder for a diamond or bundle-like icon */}
    <svg className={`w-8 h-8 ${colorClass} text-white text-2xl`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4M17 3v4M15 5h4M18 17v4M17 19h4M3 19h4M12 11V3m0 18v-8M8 17h8M4 11h16M7 7l10 10M7 17l10-10" />
    </svg>
    <span className="text-white text-3xl font-sans">Mybindle</span>
  </div>
);

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Header: White Background with Logo */}
      <header className="py-6 px-8  bg-red-500 absolute top-0 left-0 w-full z-30 ">
        <div className="max-w-7xl mx-auto flex justify-center">
          <MybindleLogo />
        </div>
      </header>

      {/* Content Section: Red Background */}
      <div className="flex-1 bg-red-500 pt-32 pb-16 relative flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 sm:px-8 lg:px-16 xl:px-32">

        {/* Left Side: Text and CTA */}
        {/* Adjusted padding and max-width for better left alignment on large screens */}

        <div className="text-white pt-12 lg:pt-0 z-20 mb-12 lg:mb-0 max-w-lg lg:max-w-4xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6rem] font-extrabold leading-tight tracking-tighter mb-8">
            Stay Connected <br />
            Stay Social <br />
            Stay You!
          </h1>
          <p className="text-md mb-10 max-w-2xl opacity-90">
            A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you - **MyBindle is your home on the internet.**
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02]">
            Get Started
          </button>
        </div>

        {/* Right Side: Mockup Phone (Pushed to the right) */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-auto h-full z-10 lg:py-12">

          {/* Mockup Phone Structure (Fixed size for visual impact) */}
          <div className="w-full h-full bg-white border-8 border-r-20 rounded-r-[35px] rounded-3xl overflow-hidden relative">
            <div className="flex justify-center items-center h-5 mt-4 w-full bg-gray-100">
              {/* Parent div jo space define karega (h-20 sirf misaal ke liye hai) */}

              {/* Black Circle (Child Element) */}
              <div className="bg-black rounded-full h-5 w-5">
                {/* text-center ya align-middle ki zaroorat nahi hai jab child mein sirf color ho */}
              </div>

            </div>
            {/* Top Section */}
            <div className="bg-[#FAFAFA] px-5 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 shadow p-5">
                  <span className="text-[22px]">🔥</span>
                  <span className="font-bold text-[16px] text-gray-900">Seamless Connections</span>
                </div>
                <div className="w-[44px] h-[44px] rounded-[13px] overflow-hidden shadow-md border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Story Input */}
              <div className="bg-white rounded-[15px] px-4 py-3.5 mb-4 shadow-sm">
                <p className="text-gray-400 text-[13px]">Hey Jason, What's thinkin'?</p>
              </div>

              {/* Stories Row */}
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {/* Story 1 */}
                <div className="flex-shrink-0 w-[66px] h-[66px] rounded-[17px] overflow-hidden shadow-md border-[3px] border-purple-400 p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Story"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                {/* Story 2 */}
                <div className="flex-shrink-0 w-[66px] h-[66px] rounded-[17px] overflow-hidden shadow-md border-[3px] border-gray-700 p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                    alt="Story"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                {/* Story 3 */}
                <div className="flex-shrink-0 w-[66px] h-[66px] rounded-[17px] overflow-hidden shadow-md border-[3px] border-orange-400 p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Story"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                {/* Story 4 */}
                <div className="flex-shrink-0 w-[66px] h-[66px] rounded-[17px] overflow-hidden shadow-md border-[3px] border-red-400 p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
                    alt="Story"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                {/* Add Button */}
                <button className="flex-shrink-0 w-[66px] h-[66px] bg-white rounded-[17px] flex items-center justify-center shadow-md border-2 border-gray-200 hover:border-[#FF5C5C] transition-all">
                  <Plus className="w-8 h-8 text-[#FF5C5C]" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Post Section */}
            <div className="px-5 pt-4 pb-24 bg-white">
              {/* Post Header */}
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-[44px] h-[44px] bg-gray-900 rounded-[13px] overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
                      alt="Eric"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[15px] text-gray-900">Eric W.</span>
                      <svg className="w-[15px] h-[15px] text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <span className="text-[11px] text-gray-500 font-semibold tracking-wide">MODEL</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-[#FF5C5C] text-[13px] font-bold hover:text-[#FF4040] transition-colors">Following</button>
                  <MoreHorizontal className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
                </div>
              </div>

              {/* Post Caption */}
              <p className="text-[13px] text-gray-700 mb-3 leading-relaxed">Strutting into the spotlight 🔥</p>

              {/* Post Image */}
              <div className="relative rounded-[26px] overflow-hidden mb-4 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop"
                  alt="Fashion Post"
                  className="w-full h-[340px] object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

                {/* Engagement Icons */}
                <div className="absolute right-4 top-[38%] flex flex-col gap-5">
                  <button className="flex flex-col items-center gap-1 transform hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" strokeWidth={2.5} />
                    <span className="text-white text-[13px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">1k</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 transform hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" strokeWidth={2.5} />
                    <span className="text-white text-[13px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">47</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 transform hover:scale-110 transition-transform">
                    <Share2 className="w-7 h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" strokeWidth={2.5} />
                    <span className="text-white text-[13px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">12</span>
                  </button>
                </div>


              </div>

              {/* Bottom User */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-[38px] h-[38px] bg-gray-400 rounded-[12px] overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                      alt="Franklin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] font-bold text-gray-900">Franklin S.</span>
                    <svg className="w-[14px] h-[14px] text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 rounded-b-[46px]">
              <div className="flex items-center justify-between">
                <div className="relative w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                  <Home className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                </div>
                <div className="relative">
                  <div className="w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                    <Search className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-[#FF5C5C] rounded-full text-white text-[11px] flex items-center justify-center font-bold shadow-md">3</div>
                </div>
                <div className="relative">
                  <div className="w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                    <Calendar className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-[#FF5C5C] rounded-full text-white text-[11px] flex items-center justify-center font-bold shadow-md">2</div>
                </div>
                <div className="relative">
                  <div className="w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                    <User className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-[#FF5C5C] rounded-full text-white text-[11px] flex items-center justify-center font-bold shadow-md">3</div>
                </div>
                <div className="w-11 h-11 bg-[#FF5C5C] rounded-[13px] flex items-center justify-center shadow-lg hover:bg-[#FF4040] transition-colors cursor-pointer transform hover:scale-110">
                  <Plus className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                <div className="relative">
                  <div className="w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                    <Bell className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-[#FF5C5C] rounded-full text-white text-[11px] flex items-center justify-center font-bold shadow-md">7</div>
                </div>
                <div className="relative">
                  <div className="w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                    <Grid className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-[#FF5C5C] rounded-full text-white text-[11px] flex items-center justify-center font-bold shadow-md">3</div>
                </div>
                <div className="w-11 h-11 bg-red-50 rounded-[13px] flex items-center justify-center hover:bg-red-100 transition-colors cursor-pointer">
                  <Menu className="w-5 h-5 text-[#FF5C5C]" strokeWidth={2.5} />
                </div>
              </div>
              {/* Discover Badge */}
              <div className="absolute bottom-5 -right-[18px] -translate-y-1/2 bg-white rounded-full pl-4 pr-6 py-3 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <div className="w-[13px] h-[13px] bg-white rounded-full"></div>
                </div>
                <span className="font-bold text-[15px] text-gray-900">Discover & Explore</span>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle bottom curve (Using pseudo-element or a simpler approach is better than a complex clip-path for pure Tailwind) 
            For now, we'll rely on the surrounding gray-50 to provide the visual break.
        */}
      </div>

    </div>
  );
};

export default Hero;