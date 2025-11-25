import React, { useState } from 'react';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';
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
    <section className="py-16 bg-gradient-to-br from-vida-teal/5 to-vida-blue/5">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <div className="flex flex-col items-center mb-10">
          <div className="bg-vida-teal/10 p-3 rounded-full mb-4">
             <Sparkles className="text-vida-teal w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Vibe</h2>
          <p className="text-gray-600 max-w-xl">
            Not sure what to stack? Let our AI stylist read your energy and suggest the perfect palette.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto border border-white/50 backdrop-blur-sm">
          {!result ? (
            <>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">How are you feeling today?</p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {VIBE_PROMPTS.map((vibe) => (
                  <button
                    key={vibe}
                    onClick={() => { setSelectedVibe(vibe); handleMatch(vibe); }}
                    disabled={isLoading}
                    className="px-6 py-2 rounded-full border border-gray-200 hover:border-vida-teal hover:bg-vida-teal/5 hover:text-vida-teal-dark transition-all text-gray-600 text-sm font-medium"
                  >
                    {vibe}
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or type your own</span>
                </div>
              </div>

              <div className="mt-6 flex max-w-md mx-auto">
                <input
                  type="text"
                  value={customVibe}
                  onChange={(e) => setCustomVibe(e.target.value)}
                  placeholder="e.g. Hiking at sunrise..."
                  className="flex-1 rounded-l-lg border-gray-300 border p-3 focus:ring-2 focus:ring-vida-teal focus:border-transparent outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && customVibe && handleMatch(customVibe)}
                />
                <button 
                  onClick={() => customVibe && handleMatch(customVibe)}
                  disabled={isLoading || !customVibe}
                  className="bg-gray-900 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-vida-teal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Analyze'}
                </button>
              </div>
            </>
          ) : (
            <div className="animate-fade-in text-left">
               <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-xl font-bold text-gray-800">Your Vibe Reading</h3>
                    <p className="text-sm text-gray-500 mt-1">Based on "{selectedVibe || customVibe}"</p>
                 </div>
                 <button onClick={() => setResult(null)} className="text-gray-400 hover:text-gray-600">
                    <RefreshCw size={20} />
                 </button>
               </div>
               
               <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-6">
                 <p className="text-indigo-900 italic text-lg leading-relaxed font-medium">
                   "{result.vibeReading}"
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Color Palette</h4>
                   <div className="flex gap-3">
                     {result.suggestedColors.map((color, idx) => (
                       <div key={idx} className="flex flex-col items-center">
                         <div 
                            className="w-12 h-12 rounded-full shadow-md border-2 border-white"
                            style={{ backgroundColor: color.toLowerCase().includes('gold') ? '#FFD700' : color.toLowerCase().includes('teal') ? '#4FD1C5' : color }} // Fallback simplistic color logic for demo
                         >
                            {/* Visual fallback if CSS color name matches, otherwise random color for demo if unknown */}
                            {!['red','blue','green','yellow','purple','orange','black','white','gold','teal','pink','gray'].some(c => color.toLowerCase().includes(c)) && (
                              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400" />
                            )}
                         </div>
                         <span className="text-xs mt-2 font-medium text-gray-600">{color}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Styling Tip</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
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
