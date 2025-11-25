import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-vida-teal">VIDA<span className="text-white font-light">VIBE</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Handcrafted bracelets that provide full-time jobs for artisans worldwide. Every purchase gives back.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-vida-teal transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-vida-teal cursor-pointer">New Arrivals</li>
              <li className="hover:text-vida-teal cursor-pointer">Best Sellers</li>
              <li className="hover:text-vida-teal cursor-pointer">Charity Collection</li>
              <li className="hover:text-vida-teal cursor-pointer">Subscription Club</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-vida-teal cursor-pointer">Help Center</li>
              <li className="hover:text-vida-teal cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-vida-teal cursor-pointer">Shipping Info</li>
              <li className="hover:text-vida-teal cursor-pointer">Track Order</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Join the Vibe</h4>
            <p className="text-gray-400 text-sm mb-4">Get early access to sales and new drops.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg outline-none focus:ring-1 focus:ring-vida-teal w-full"
              />
              <button className="bg-vida-teal px-4 py-2 rounded-r-lg font-bold hover:bg-white hover:text-vida-teal transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Vida Vibe Collective. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={14} className="text-vida-coral fill-current" /> in React & Gemini
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
