import React from 'react';

// --- Step Card Sub-Component (Kept as is) ---
const StepCard = ({ number, title, description, isFirst, isLast }:any) => {
    return (
        <div className="flex flex-col items-center">
            
            {/* Step Number and Line Component */}
            <div className="flex w-full items-center mb-6">
                
                {/* Connector Line (Left) */}
                <div 
                    className={`flex-1 h-px bg-gray-300 transition-all duration-500 ${isFirst ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                
                {/* Step Number */}
                <div 
                    className={`px-4 py-2 text-3xl font-bold transition-colors duration-500 ${isFirst ? 'text-red-500' : 'text-gray-900'}`}
                >
                    {number}
                </div>
                
                {/* Connector Line (Right) */}
                <div 
                    className={`flex-1 h-px bg-gray-300 transition-all duration-500 ${isLast ? 'opacity-0' : 'opacity-100'}`}
                ></div>
            </div>

            {/* Content Box */}
            <div className="w-full bg-gray-100 p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg h-full flex flex-col justify-center">
                <h3 className="text-center text-2xl font-bold text-gray-900 mb-2">
                    {title}
                </h3>
                <p className="text-center text-base font-semibold text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

// --- Main Component (FIXED with explicit true/false values) ---
export default function InstallSection() {
    return (
        <div className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        How To Install Our App!
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-gray-600 max-w-2xl mx-auto">
                        Getting Started is quick and easy! Follow these steps to install and start using Mybindle today.
                    </p>
                </div>
                
                {/* Steps Container: Grid for 3 columns on medium/large screens */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:gap-16">
                    
                    {/* Step 1: isFirst is TRUE, isLast is FALSE */}
                    <StepCard 
                        number="01" 
                        title="Download" 
                        description="Open Play Store And App Store" 
                        isFirst={true} 
                        isLast={false} 
                    />
                    
                    {/* Step 2: Both are FALSE */}
                    <StepCard 
                        number="02" 
                        title="Install App" 
                        description="The App will install Automatically" 
                        isFirst={false} 
                        isLast={false} 
                    />
                    
                    {/* Step 3: isFirst is FALSE, isLast is TRUE */}
                    <StepCard 
                        number="03" 
                        title="Ready To Use" 
                        description="Sign Up or Login to exploring!" 
                        isFirst={false} 
                        isLast={true} 
                    />
                    
                </div>
            </div>
        </div>
    );
}