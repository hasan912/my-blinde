// components/DownloadButtons.tsx (Example Component)

import React from 'react';
import Image from 'next/image';

const AppDownloadButtons: React.FC = () => {
  return (
    // Main container with the red background, matching your image (image_c39c3d.png)
    <div className=" flex justify-center"> 
      
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
        
        {/* 1. App Store Button */}
        <a 
          href="YOUR_APP_STORE_LINK" // Replace with your actual App Store link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white rounded-full py-2 px-6 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] w-55" 
        >
          <Image
            src="/apple-logo.png" 
            alt="Download on the App Store"
            width={30}
            height={36}
            className="w-8 h-8 mr-3"
          />
          
          <div className="text-left">
            <span className="text-xs text-gray-700 font-medium block leading-none tracking-tight">DOWNLOAD ON THE</span>
            <span className="text-2xl font-bold text-gray-900 block leading-tight">App Store</span>
          </div>
        </a>

        {/* 2. Google Play Button */}
        <a 
          href="YOUR_GOOGLE_PLAY_LINK" // Replace with your actual Google Play link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white rounded-full py-2 px-6 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] w-60"
        >
          {/* Google Play Logo (Ensure /google-play-logo.svg is in your public folder) */}
          <Image
            src="/google-play-logo.png" 
            alt="Get it on Google Play"
            width={30}
            height={36}
            className="w-8 h-8 mr-3"
          />
          
          <div className="text-left">
            <span className="text-xs text-gray-700 font-medium block leading-none tracking-tight">GET IT ON</span>
            <span className="text-2xl font-bold text-gray-900 block leading-tight">Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AppDownloadButtons;