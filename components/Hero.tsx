import React from 'react';
import { HERO_IMAGE } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-0 lg:pr-12 text-center lg:text-left z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-vida-teal/10 text-vida-teal-dark font-semibold text-sm mb-6 tracking-wider">
            HANDCRAFTED & PURE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Live Free. <br/>
            <span className="text-vida-teal">Style Pure.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Discover artisan jewelry that celebrates the simple joys of life. 
            Ethically sourced, waterproof, and designed for every adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-vida-teal transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
              Shop New Arrivals
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full border-2 border-gray-200 hover:border-vida-teal hover:text-vida-teal transition-all duration-300">
              Our Mission
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <img 
              src={HERO_IMAGE} 
              alt="Lifestyle" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse hidden md:flex">
             <div className="bg-green-100 p-2 rounded-full text-green-600 font-bold text-xs">
               100%
             </div>
             <div className="text-sm font-semibold text-gray-700">
               Eco-Friendly<br/>Packaging
             </div>
          </div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full -z-10">
         <div className="absolute top-20 right-0 w-96 h-96 bg-vida-blue/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-vida-coral/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
