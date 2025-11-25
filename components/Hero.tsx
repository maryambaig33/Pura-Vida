import React from 'react';
import { HERO_IMAGE } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 lg:pb-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-block transform -rotate-2 mb-6">
              <span className="px-4 py-1 bg-pv-sunny text-gray-900 font-hand text-xl font-bold rounded-sm shadow-sticker">
                Handcrafted with Good Vibes
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-hand font-bold text-pv-slate leading-[0.85] mb-6">
              Live Free <br/>
              <span className="text-pv-teal">Pure Life.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Every bracelet is 100% waterproof and unique. 
              Find your stack and support artisans around the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-pv-teal text-white font-bold text-lg rounded-full shadow-sticker hover:shadow-sticker-hover hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                Shop Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-100 font-bold text-lg rounded-full hover:border-pv-teal hover:text-pv-teal transition-all duration-300">
                Join the Club
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <div className="relative z-10 transform rotate-2 hover:rotate-0 transition-all duration-700">
              <div className="absolute inset-0 bg-pv-coral rounded-[3rem] transform translate-x-3 translate-y-3"></div>
              <img 
                src={HERO_IMAGE} 
                alt="Lifestyle" 
                className="relative rounded-[3rem] w-full h-[500px] object-cover border-8 border-white shadow-xl"
              />
              
              {/* Floating Element */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-sticker animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="bg-pv-mint p-2 rounded-full">
                    <Sparkles className="text-pv-teal-dark w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-hand text-2xl font-bold leading-none text-gray-800">Best Seller</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sunset Pack</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pv-sunny/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;