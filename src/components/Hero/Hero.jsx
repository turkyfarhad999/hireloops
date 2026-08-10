import React from 'react';
import { 
  Magnifier, 
  Briefcase, 
  Persons, 
  StarFill, 
  ChartColumn, 
  Pin 
} from '@gravity-ui/icons';

// Trending positions data
const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer"
];

// Stats data with Gravity UI Icons
const stats = [
  { icon: <Briefcase className="text-gray-400" size={20} />, value: "50K", label: "Active Jobs" },
  { icon: <ChartColumn className="text-gray-400" size={20} />, value: "12K", label: "Companies" },
  { icon: <Persons className="text-gray-400" size={20} />, value: "2M", label: "Job Seekers" },
  { icon: <StarFill className="text-gray-400" size={20} />, value: "97%", label: "Satisfaction Rate" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#07090e] text-white pt-36 pb-28 px-4 overflow-hidden font-sans">
      
      {/* Background Earth Image with Blue Glow */}
      <div className="absolute inset-x-0 bottom-[-150px] md:bottom-[-280px] z-0 flex justify-center pointer-events-none">
        <div className="relative w-full max-w-[1200px] flex justify-center">
          
          {/* Earth Image */}
          <img 
            src="http://googleusercontent.com/image_collection/image_retrieval/16659922320059830521_0" 
            alt="Planet Earth"
            className="w-[950px] md:w-[1100px] h-auto object-cover opacity-85 rounded-full scale-y-[0.65]"
          />

          {/* Deep Blue/Violet Glow behind Earth */}
          <div className="absolute inset-0 bg-blue-600/40 blur-[130px] rounded-full z-[-1] transform scale-95"></div>

          {/* Top Edge Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07090e] via-[#07090e]/60 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 px-4 py-1.5 text-xs tracking-wider mb-8 backdrop-blur-md shadow-lg">
          <span className="p-1 bg-amber-500/20 rounded-md text-amber-500 flex items-center justify-center">
            <Briefcase size={14} />
          </span>
          <span className="font-bold text-white tracking-widest">50,000+</span>
          <span className="text-gray-400 font-medium">NEW JOBS THIS MONTH</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5 leading-tight">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm md:text-base text-gray-400 mb-10 leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-6">
          <div className="flex flex-col md:flex-row items-center bg-neutral-900/90 border border-neutral-800/80 rounded-2xl md:rounded-full p-2 shadow-2xl backdrop-blur-md gap-2 md:gap-0">
            
            {/* Input 1 */}
            <div className="flex items-center gap-3 px-4 py-2 w-full md:w-1/2">
              <Magnifier size={16} className="text-gray-400 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Job title, skill or company" 
                className="w-full bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-6 bg-neutral-800"></div>

            {/* Input 2 */}
            <div className="flex items-center gap-3 px-4 py-2 w-full md:w-1/2">
              <Pin size={16} className="text-gray-400 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Location or Remote" 
                className="w-full bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 md:p-3.5 rounded-xl md:rounded-full transition-all w-full md:w-auto flex justify-center items-center flex-shrink-0 shadow-lg shadow-indigo-600/30">
              <Magnifier size={16} />
            </button>
          </div>
        </div>

        {/* Trending Tags */}
        <div className="flex items-center gap-2 flex-wrap justify-center mb-44 text-xs">
          <span className="text-gray-500 font-medium">Trending Position</span>
          {trendingPositions.map((pos, index) => (
            <button 
              key={index} 
              className="bg-neutral-900/80 hover:bg-neutral-800 text-gray-300 border border-neutral-800/80 rounded-full px-3.5 py-1.5 transition-colors"
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Text over Earth */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 max-w-xl mx-auto leading-normal">
            Assisting over <span className="text-white font-semibold">15,000 job seekers</span> find their dream positions.
          </h2>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#0b0d13]/90 border border-neutral-800/80 rounded-2xl p-6 text-left shadow-xl backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="mb-6">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;