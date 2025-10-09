// components/FeaturesSection.tsx
import React from 'react';

// Define the type for a single feature card
interface FeatureCardProps {
  icon: string; // Using string for emoji, could be React.ReactNode for an actual icon component
  title: string;
  description: string;
}

// Data for each feature card
const features: FeatureCardProps[] = [
  {
    icon: '🔥', // Replace with <IconFire /> or similar from an icon library
    title: 'Seamless Connections',
    description: 'Stay in touch with friends, family, and like-minded people with just a tap.',
  },
  {
    icon: '🤳', // Replace with <IconShareStory />
    title: 'Share Your Story',
    description: 'Upload photos, videos, and updates to let the world know what\'s happening in your life.',
  },
  {
    icon: '💬', // Replace with <IconChat />
    title: 'Real-Time Chat',
    description: 'Whether it\'s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.',
  },
  {
    icon: '🔒', // Replace with <IconLock />
    title: 'Privacy First',
    description: 'Your data, your control. We prioritize your privacy with world-class security.',
  },
  {
    icon: '🌍', // Replace with <IconGlobe />
    title: 'Discover & Explore',
    description: 'Find trending content, join communities, and follow pages that match your interests.',
  },
  {
    icon: '💼', // Replace with <IconBriefcase />
    title: 'Grow Your Business',
    description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.',
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-10 h-50 rounded-2xl shadow-sm justify-center hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
      <h3 className="text-2xl text-center font-bold text-gray-800 mb-2">{icon} {title}</h3>
      <p className="text-gray-600 text-center font-semibold text-lg">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Features That Keep You Hooked!
        </h2>
        {/* Sub-heading */}
        <p className="text-xl text-gray-600 mb-12 sm:mb-16">
          Meet, Chat, Share - Anytime, Anywhere!
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index} // Using index as key is generally okay for static lists
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;