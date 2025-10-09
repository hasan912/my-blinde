"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// --- DATA ---
const testimonialsData = [
  {
    rating: 5,
    quote:
      "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    name: "Emily R",
    location: "USA",
    avatar: "/avatar/person3.png",
  },
  {
    rating: 5,
    quote:
      "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
    name: "Amit K",
    location: "India",
    avatar: "/avatar/person4.png",
  },
  {
    rating: 5,
    quote:
      "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    name: "Sophie M",
    location: "UK",
    avatar: "/avatar/person1.png",
  },
  {
    rating: 5,
    quote:
      "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    name: "Javier L",
    location: "Spain",
    avatar: "/avatar/person2.png",
  },
  {
    rating: 5,
    quote:
      "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    name: "Lucas T",
    location: "Brazil",
    avatar: "/avatar/person3.png",
  },
  {
    rating: 5,
    quote:
      "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
    name: "Nora S",
    location: "Canada",
    avatar: "/avatar/person2.png",
  },
  // Partially visible cards at the bottom
  {
    rating: 5,
    quote:
      "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment!",
    name: "Partial 1",
    location: "Spain",
    avatar: "/avatar/person1.png",
    partial: true,
  },
  {
    rating: 5,
    quote:
      "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless.",
    name: "Partial 2",
    location: "Canada",
    avatar: "/avatar/person4.png",
    partial: true,
  },
];

// --- TYPES ---
interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  location: string;
  avatar: string;
  partial?: boolean;
}

// --- CARD COMPONENT ---
const TestimonialCard: React.FC<Testimonial> = ({
  rating,
  quote,
  name,
  location,
  avatar,
  partial = false,
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full transition-all duration-300 ${
        partial
          ? "opacity-30 translate-y-3 cursor-default"
          : "hover:shadow-md hover:-translate-y-1"
      }`}
    >
      <div>
        <div className="flex mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed font-bold text-lg mb-6">{quote}</p>
      </div>

      {/* Only show user info if not partial */}
      {!partial && (
        <div className="flex items-center mt-auto">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
            <Image
              src={avatar}
              alt={name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-gray-900 font-semibold text-lg">{name}</p>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// --- SECTION COMPONENT ---
const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto ">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-transparent text-red-600 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-red-600  hover:text-white transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
