import React from 'react';
import { HERO_IMAGE } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pb-24 overflow-hidden bg-vida-sand/30">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-vida-teal/20 text-vida-teal-dark font-bold text-xs mb-6 tracking-wider shadow-sm rotate-[-2deg]">
            <Sparkles size={14} /> HANDCRAFTED WITH LOVE
          </div>
          <h1 className="text-6xl md:text-7xl font-marker text-gray-900 leading-none mb-6">
            Good Vibes <br/>
            <span className="text-vida-teal">Only.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
            Join the movement. Every bracelet purchased helps provide full-time jobs for artisans worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 bg-vida-teal text-white font-bold rounded-full hover:bg-vida-teal-dark transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center group border-2 border-black">
              Shop The Collection
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-full border-2 border-black hover:bg-gray-50 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              Join The Club
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10">
            <div className="absolute inset-0 bg-vida-coral rounded-[2rem] rotate-3 transform translate-x-4 translate-y-4"></div>
            <img 
              src={HERO_IMAGE} 
              alt="Lifestyle" 
              className="relative rounded-[2rem] w-full h-[500px] object-cover border-4 border-white shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Sticker Badge */}
            <div className="absolute -top-6 -right-6 bg-vida-gold text-gray-900 w-24 h-24 rounded-full flex items-center justify-center font-marker text-xl rotate-12 shadow-lg border-4 border-white animate-pulse">
              New!
            </div>
          </div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40">
         <div className="absolute top-10 left-10 w-32 h-32 bg-vida-mint rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 right-10 w-64 h-64 bg-vida-coral/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;