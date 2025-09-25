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
          <div className="w-72 sm:w-80 aspect-[9/16] bg-black rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative border-[4px] border-black overflow-hidden transform lg:scale-110 xl:scale-125 ">
            
            {/* Phone Screen Content */}
            <div className="w-full h-full bg-white relative">
             
              {/* Top Bar with Status and Profile Picture */}
              <div className="p-3 flex items-center justify-between text-xs text-gray-800 border-b">
                <span className="font-semibold">9:41</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">💬</span>
                  <img className="w-6 h-6 rounded-full object-cover border-2 border-red-500" src="/image3.png" alt="Jason" />
                </div>
              </div>
              
              {/* "Seamless Connections" Tag (Floating) */}
              <div className="absolute top-10 left-1/3 transform -translate-x-1/2 bg-white rounded-full px-3 py-2  shadow-xl flex items-center space-x-1 text-sm font-semibold text-gray-900">
                <span className="text-orange-500 text-lg">🔥</span>
                <span>Seamless Connections</span>
              </div>

<div className="flex justify-start space-x-3 p-3">
    {storyData.map((user, index) => (
        <div key={index} className="flex flex-col items-center">
            <img
                className={`w-14 h-14 rounded-full object-cover ${user.active ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                src={user.src}
                alt={user.name}
            />
            {/* The name is now correctly accessed via user.name */}
            <span className="text-[10px] text-gray-600 mt-1">{user.name.split(' ')[0]}</span>
        </div>
    ))}
    {/* Optional: Add the plus icon/Add Story separately */}
    <div className="flex flex-col items-center justify-center text-center">
        <span className="w-14 h-14 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center text-xl text-gray-400">+</span>
    </div>
</div>
              {/* Main Feed Post */}
              <div className="overflow-y-auto h-[calc(100%-140px)] pb-20">
                <div className="p-2">
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center space-x-2">
                      <img className="w-8 h-8 rounded-full object-cover" src="/image2.png" alt="Eric W." />
                      <div>
                        <p className="text-sm font-semibold">Eric W.</p>
                        <p className="text-[10px] text-red-500">MODEL</p>
                      </div>
                    </div>
                    <span className="text-red-500 text-xs font-semibold">Following</span>
                  </div>
                  
                  {/* Image with Caption */}
                  <p className="text-xs text-gray-600 px-2 pb-1">Stunning into the spotlight ✨</p>
                  <img 
                    className="w-full h-auto object-cover" 
                    src="/image1.png" 
                    alt="Feed image" 
                  />
                  
                  {/* Action Bar */}
                  <div className="flex justify-between items-center p-2 text-gray-500 text-sm">
                    <div className="flex space-x-4">
                      <span className="flex items-center space-x-1">❤️ <span>1k</span></span>
                      <span className="flex items-center space-x-1">💬 <span>47</span></span>
                      <span className="flex items-center space-x-1">🔗 <span>12</span></span>
                    </div>
                    <span>⭐</span>
                  </div>
                </div>
              </div>

              {/* "Discover & Explore" Button (Floating) */}
              <div className="absolute bottom-20 right-4 z-20">
                <button className="bg-white text-red-600 rounded-full px-4 py-2 text-sm font-semibold shadow-xl border border-gray-200 hover:bg-gray-50 transition duration-300 flex items-center space-x-1">
                  <span className="text-base">🌐</span>
                  <span>Discover & Explore</span>
                </button>
              </div>
              
              {/* Navigation Bar (Bottom of phone screen) */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-white border-t flex justify-around items-center text-gray-500 text-2xl">
                <span className="text-red-600">🏠</span> {/* Home icon is active */}
                <span>🔍</span>
                <span className="bg-red-600 text-white p-[6px] rounded-4xl transform scale-110 shadow-lg font-bold text-lg leading-none flex items-center justify-center">+</span>
                <span>🔔</span> {/* Switched ✉️ to 🔔 based on common app UIs, but keep ✉️ if preferred */}
                <span>👤</span>
              </div>
            </div>
            
            {/* Speaker/Notch (Aesthetics) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-[17px] bg-black rounded-xl z-50"></div>
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