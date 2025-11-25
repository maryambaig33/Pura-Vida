import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw, Wand2, Stars } from 'lucide-react';
import { VIBE_PROMPTS } from '../constants';
import { generateVibeReading } from '../services/geminiService';
import { VibeResponse } from '../types';

const VibeMatcher: React.FC = () => {
  const [customVibe, setCustomVibe] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VibeResponse | null>(null);

  const handleMatch = async (vibe: string) => {
    setIsLoading(true);
    setResult(null);
    try {
      const data = await generateVibeReading(vibe);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-pv-mint/30 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-80 h-80 bg-pv-sunny/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-pv-teal/10 text-pv-teal-dark text-xs font-bold tracking-widest uppercase mb-4">
            AI Powered Styling
          </span>
          <h2 className="text-6xl md:text-7xl font-hand font-bold text-gray-800 mb-6">
            Find Your Vibe
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
            Not sure what to stack? Let the universe (and our AI) decide.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
          {/* Card Decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pv-teal via-pv-sunny to-pv-coral"></div>

          {!result ? (
            <div className="animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
                {VIBE_PROMPTS.map((vibe) => (
                  <button
                    key={vibe}
                    onClick={() => handleMatch(vibe)}
                    disabled={isLoading}
                    className="group relative p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-pv-teal hover:bg-pv-teal/5 transition-all text-center flex flex-col items-center justify-center gap-2 h-32"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {vibe.includes('Romantic') ? '🌸' : 
                       vibe.includes('Adventurous') ? '🏔️' :
                       vibe.includes('Beachy') ? '🌊' :
                       vibe.includes('Earthy') ? '🌿' : '⚡'}
                    </span>
                    <span className="font-hand font-bold text-xl text-gray-600 group-hover:text-pv-teal leading-none">
                      {vibe}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center gap-6">
                <p className="font-hand text-2xl text-gray-400">or type your mood...</p>
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    value={customVibe}
                    onChange={(e) => setCustomVibe(e.target.value)}
                    placeholder="e.g. Dreaming of a road trip..."
                    className="w-full text-center text-lg py-4 px-6 rounded-full border-2 border-gray-200 focus:border-pv-teal focus:ring-0 outline-none transition-all placeholder:text-gray-300 font-medium"
                    onKeyDown={(e) => e.key === 'Enter' && customVibe && handleMatch(customVibe)}
                  />
                  <button 
                    onClick={() => customVibe && handleMatch(customVibe)}
                    disabled={isLoading || !customVibe}
                    className="absolute right-2 top-2 bottom-2 aspect-square bg-pv-slate text-white rounded-full flex items-center justify-center hover:bg-pv-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <Wand2 size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
               <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                 <h3 className="font-hand text-4xl font-bold text-pv-teal-dark flex items-center gap-2">
                   <Stars size={24} /> The Cards Say...
                 </h3>
                 <button onClick={() => setResult(null)} className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors font-bold uppercase tracking-wider">
                    <RefreshCw size={14} /> Try Again
                 </button>
               </div>
               
               <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="flex-1 bg-pv-sand p-8 rounded-2xl relative w-full text-center md:text-left">
                   <p className="font-hand text-3xl text-gray-800 leading-snug mb-4">
                     "{result.vibeReading}"
                   </p>
                   <div className="inline-block px-3 py-1 bg-white rounded-md shadow-sm text-xs font-bold text-pv-coral uppercase tracking-widest">
                     Styling Tip: {result.stylingTip}
                   </div>
                 </div>

                 <div className="flex flex-col items-center gap-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Colors</span>
                    <div className="flex -space-x-4">
                      {result.suggestedColors.map((color, idx) => (
                        <div 
                          key={idx} 
                          className="w-20 h-20 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative group hover:scale-110 hover:z-10 transition-transform duration-300"
                          style={{ backgroundColor: color.toLowerCase().includes('teal') ? '#66CCCC' : color.toLowerCase().includes('sand') ? '#E6D7B9' : color }}
                        >
                          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-6 text-[10px] font-bold bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap transition-opacity">
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VibeMatcher;