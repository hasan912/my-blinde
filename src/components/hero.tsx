import { Bell, Calendar, Grid, Heart, Home, Menu, MessageCircle, MoreHorizontal, Plus, Search, Share2, User } from 'lucide-react';
import React, { ReactNode } from 'react'; 
// ERROR FIX: Removed 'next/image' import which was causing compilation error
// import Image from 'next/image'; 

// --- Type Definitions ---

interface MybindleLogoProps {
    colorClass?: string;
}

interface FloatingButtonProps {
    children: ReactNode;
    className: string;
    icon: ReactNode;
}

// --- Components ---

// Reusable Icon for the Mybindle logo
const MybindleLogo: React.FC<MybindleLogoProps> = ({ colorClass = "text-red-600" }) => (
  <div className="flex items-center space-x-2 font-bold">
    {/* Placeholder for a diamond or bundle-like icon */}
    <svg className={`w-8 h-8 ${colorClass} text-white text-2xl`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4M17 3v4M15 5h4M18 17v4M17 19h4M3 19h4M12 11V3m0 18v-8M8 17h8M4 11h16M7 7l10 10M7 17l10-10" />
    </svg>
    <span className="text-white text-3xl font-sans">Mybindle</span>
  </div>
);

// Floating Button Component (for reusability and styling)
const FloatingButton: React.FC<FloatingButtonProps> = ({ children, className, icon }) => {
    return (
        <div className={`bg-white text-gray-800 flex items-center p-3 rounded-xl shadow-2xl font-semibold transform transition-all duration-300 hover:scale-[1.03] ${className}`}>
            {icon}
            <span className="ml-2 whitespace-nowrap">{children}</span>
        </div>
    );
};

const Hero: React.FC = () => {
  return (
    // Fixed: min-h-screen for full height and responsive section
    <section className="relative min-h-screen bg-red-500 flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
        <MybindleLogo />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-6 sm:px-10 pt-32 lg:pt-40 pb-16"> 
        {/* Left Text Section */}
        <div className="text-white max-w-xl text-center lg:text-left mb-16 lg:mb-0">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Stay Connected,
            <br /> Stay Social,
            <br /> Stay You!
          </h1>
          <p className="text-lg opacity-90 mb-8">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you’re looking to reconnect
            with old friends or share what matters most — MyBindle is your home
            on the internet.
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Phone Mockup - Fixed container size and used standard <img> tag */}
        <div className="relative w-[320px] h-[450px] lg:w-[400px] lg:h-[600px] mt-10 lg:mt-0"> 
          
          {/* Floating Labels: Adjusted positioning relative to the phone */}
          <FloatingButton className=" hidden lg:absolute lg:top-10 lg:-left-16" icon={<span>🔥</span>}>
             Seamless Connections
          </FloatingButton>
          
          <FloatingButton className="absolute bottom-20 right-3" icon={<span>🌍</span>}>
             Discover & Explore
          </FloatingButton>

          {/* Image Mockup: Replaced Image with <img> and used max-height for better fit */}
          <img
            src="/Group.png"
            alt="MyBindle App Mockup"
            // w-full h-full ensures the image fills the container, object-contain prevents cropping.
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
