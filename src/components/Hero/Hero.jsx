'use client'
import React, { useState } from 'react';
import { 
  Magnifier, 
  Briefcase, 
  Persons, 
  StarFill, 
  ChartColumn, 
  Pin 
} from '@gravity-ui/icons';

// Files inside the `public/` folder are NOT imported as modules in Next.js.
// They are served statically from the root, so we just reference the path directly.
const earthImageUrl = '/earth.jpg';

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer"
];

const stats = [
  { icon: <Briefcase className="text-gray-400" size={24} />, value: "50K", label: "Active Jobs" },
  { icon: <ChartColumn className="text-gray-400" size={24} />, value: "12K", label: "Companies" },
  { icon: <Persons className="text-gray-400" size={24} />, value: "2M", label: "Job Seekers" },
  { icon: <StarFill className="text-gray-400" size={24} />, value: "97%", label: "Satisfaction Rate" },
];



const Hero = () => {
  const [jobInput, setJobInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  return (
    <div className="relative h-screen bg-[#07090e] text-white flex flex-col items-center pt-24 md:pt-28 pb-6 overflow-hidden font-sans">
      
      {/* Earth Background - full width, contained within viewport */}
      <div className="absolute inset-x-0 bottom-0 w-full h-[45%] md:h-[50%] z-0 pointer-events-none">
        <div className="relative w-full h-full overflow-hidden">

          {/* Earth Background Image Div */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
            style={{ backgroundImage: `url('${earthImageUrl}')` }}
          />
          
          {/* Top Fade Overlay */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#07090e] to-transparent z-20" />
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-6 flex-1 flex flex-col items-center justify-between text-center min-h-0">

        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/60 border border-neutral-700/60 px-4 py-1.5 text-[11px] font-medium mb-4 backdrop-blur-md hover:border-neutral-600/60 transition">
            <span className="text-orange-500 flex items-center">
              <Briefcase size={14} />
            </span>
            <span className="text-white font-bold tracking-wide">50,000+</span>
            <span className="text-gray-500 tracking-wider">NEW JOBS THIS MONTH</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 leading-tight">
            Find Your Dream Job Today
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
            HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
          </p>

          {/* SEARCH BAR */}
          <div className="w-full max-w-4xl mb-4 group">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 bg-neutral-900/70 border border-neutral-700/70 rounded-3xl md:rounded-full p-2 backdrop-blur-md group-hover:border-neutral-600/70 transition">
              
              {/* Job Input */}
              <div className="flex items-center gap-3 px-4 py-2 w-full md:w-1/2">
                <Magnifier size={18} className="text-gray-500 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Job title, skill or company" 
                  value={jobInput}
                  onChange={(e) => setJobInput(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-600 outline-none text-sm font-medium"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-8 bg-neutral-700/50" />

              {/* Location Input */}
              <div className="flex items-center gap-3 px-4 py-2 w-full md:w-1/2">
                <Pin size={18} className="text-gray-500 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Location or Remote" 
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-600 outline-none text-sm font-medium"
                />
              </div>

              {/* Search Button */}
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-2xl md:rounded-full transition-all flex-shrink-0 flex justify-center items-center shadow-lg hover:shadow-indigo-500/50">
                <Magnifier size={18} />
              </button>
            </div>
          </div>

          {/* TRENDING TAGS */}
          <div className="flex items-center gap-2 flex-wrap justify-center text-xs">
            <span className="text-gray-500 font-medium">Trending Position</span>
            {trendingPositions.map((pos, index) => (
              <button 
                key={index}
                className="bg-neutral-800/70 hover:bg-neutral-700 text-gray-300 border border-neutral-700/60 hover:border-neutral-600 rounded-full px-3 py-1.5 font-medium transition"
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {/* TEXT OVER EARTH */}
        <div>
          <h2 className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
            Assisting over <span className="text-white font-semibold">15,000 job seekers</span>
            <br className="hidden md:block" />
            find their dream positions.
          </h2>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-4xl">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/80 border border-neutral-800/80 rounded-2xl p-3 md:p-4 text-left backdrop-blur-md hover:border-neutral-700/80 transition shadow-2xl flex flex-col justify-between group"
            >
              <div className="mb-1 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;