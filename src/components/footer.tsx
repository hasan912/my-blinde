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
            <div className="absolute -left-13 top-[385px] bg-white border-t-3 border-r-3 border-l-3 rounded-t-[70px] p-4 shadow-2xl w-80 h-[180px] z-10 transform ">
              {/* Phone frame */}
              <div className="p-3 flex items-center justify-between text-xs text-gray-800 border-b">
                <span className="font-semibold">9:41</span>
                <div className="w-15 h-1 ml-5 -mt-15 bg-black rounded-full flex items-center justify-center">
                  </div>
                <div className="flex items-center space-x-2">
                  
                  <span className="text-sm">💬</span>
                  <img className="w-6 h-6 rounded-full object-cover border-2 border-red-500" src="/image3.png" alt="Jason" />
                </div>
              </div>
              <div className="flex justify-start space-x-3 p-3">
                {storyData.map((user, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      className={`w-14 h-14 rounded-xl object-cover ${user.active ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                      src={user.src}
                      alt={user.name}
                    />
                    {/* The name is now correctly accessed via user.name */}
                    <span className="text-[10px] text-gray-600 mt-1">{user.name.split(' ')[0]}</span>
                  </div>
                ))}
                {/* Optional: Add the plus icon/Add Story separately */}
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="w-14 h-14 rounded-xl border border-gray-300 bg-gray-100 flex items-center justify-center text-xl text-gray-400">+</span>
                </div>
              </div>
            </div>

            {/* Right Phone - Thank You Screen (positioned in front and to the right) */}
            <div className="absolute -right-7 top-41 bg-white rounded-t-[70px] border-t-3 border-r-3 border-l-3 p-4 shadow-2xl w-85 h-[400px] z-20 transform">
              {/* Phone frame */}
              <div className="p-3 flex items-center justify-between text-xs text-gray-800 border-b">
                <span className="font-semibold">9:41</span>
                <div className="w-15 h-1 ml-5 -mt-15 bg-black rounded-full flex items-center justify-center">
                  </div>
                <div className="flex items-center space-x-2">
                  
                  <span className="text-sm">💬</span>
                  <img className="w-6 h-6 rounded-full object-cover border-2 border-red-500" src="/image3.png" alt="Jason" />
                </div>
              </div>
              <div className="flex justify-start space-x-3 p-3">
                {storyData.map((user, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      className={`w-14 h-14 rounded-xl object-cover ${user.active ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                      src={user.src}
                      alt={user.name}
                    />
                    {/* The name is now correctly accessed via user.name */}
                    <span className="text-[10px] text-gray-600 mt-1">{user.name.split(' ')[0]}</span>
                  </div>
                ))}
                {/* Optional: Add the plus icon/Add Story separately */}
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="w-14 h-14 rounded-xl border border-gray-300 bg-gray-100 flex items-center justify-center text-xl text-gray-400">+</span>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
