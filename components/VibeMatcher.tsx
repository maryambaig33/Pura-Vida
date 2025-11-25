import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw, Wand2 } from 'lucide-react';
import { VIBE_PROMPTS } from '../constants';
import { generateVibeReading } from '../services/geminiService';
import { VibeResponse } from '../types';

const VibeMatcher: React.FC = () => {
  const [selectedVibe, setSelectedVibe] = useState<string>('');
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vida-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vida-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        <div className="flex flex-col items-center mb-12">
          <div className="bg-vida-mint p-4 rounded-full mb-6 rotate-[-10deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
             <Wand2 className="text-vida-teal-dark w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-marker text-gray-900 mb-4">What's Your Vibe?</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Let our AI stylist read your energy and curate your perfect stack.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 max-w-3xl mx-auto relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-vida-sand rounded-bl-[100px] -mr-10 -mt-10 opacity-50"></div>

          {!result ? (
            <>
              <p className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-8">Select Your Mood</p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {VIBE_PROMPTS.map((vibe) => (
                  <button
                    key={vibe}
                    onClick={() => { setSelectedVibe(vibe); handleMatch(vibe); }}
                    disabled={isLoading}
                    className="px-6 py-3 rounded-full border-2 border-gray-100 hover:border-vida-teal hover:bg-vida-teal hover:text-white transition-all text-gray-600 font-bold text-sm"
                  >
                    {vibe}
                  </button>
                ))}
              </div>

              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                  <span className="px-4 bg-white text-gray-400">Or Describe It</span>
                </div>
              </div>

              <div className="flex max-w-md mx-auto relative">
                <input
                  type="text"
                  value={customVibe}
                  onChange={(e) => setCustomVibe(e.target.value)}
                  placeholder="e.g. Sipping coconuts in Tulum..."
                  className="w-full rounded-full border-2 border-gray-200 py-3 pl-6 pr-32 focus:border-vida-teal focus:ring-0 outline-none transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && customVibe && handleMatch(customVibe)}
                />
                <button 
                  onClick={() => customVibe && handleMatch(customVibe)}
                  disabled={isLoading || !customVibe}
                  className="absolute right-1 top-1 bottom-1 bg-gray-900 text-white px-6 rounded-full font-bold hover:bg-vida-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Read Me'}
                </button>
              </div>
            </>
          ) : (
            <div className="animate-fade-in text-left">
               <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                 <div>
                    <h3 className="text-2xl font-marker text-vida-teal-dark">Your Aura Reading</h3>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mt-1">
                      Matched to: <span className="text-gray-800">"{selectedVibe || customVibe}"</span>
                    </p>
                 </div>
                 <button onClick={() => setResult(null)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                    <RefreshCw size={20} />
                 </button>
               </div>
               
               <div className="bg-vida-sand/50 p-6 rounded-xl border border-vida-gold/20 mb-8 relative">
                 <Sparkles className="absolute top-4 right-4 text-vida-gold w-5 h-5" />
                 <p className="text-gray-700 italic text-lg leading-relaxed font-medium">
                   "{result.vibeReading}"
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Palette</h4>
                   <div className="flex gap-4">
                     {result.suggestedColors.map((color, idx) => (
                       <div key={idx} className="group flex flex-col items-center">
                         <div 
                            className="w-14 h-14 rounded-full shadow-sm border-4 border-white transform group-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-100"
                            style={{ backgroundColor: color.toLowerCase().includes('gold') ? '#FFD700' : color.toLowerCase().includes('teal') ? '#4FD1C5' : color }} 
                         >
                            {/* Fallback pattern */}
                            {!['red','blue','green','yellow','purple','orange','black','white','gold','teal','pink','gray','cyan','magenta'].some(c => color.toLowerCase().includes(c)) && (
                              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400" />
                            )}
                         </div>
                         <span className="text-[10px] mt-2 font-bold text-gray-500 uppercase tracking-wider">{color}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Stylist's Note</h4>
                    <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-vida-teal pl-4">
                      {result.stylingTip}
                    </p>
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