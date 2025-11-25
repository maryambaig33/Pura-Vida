import React from 'react';
import { ShoppingBag, Menu, Search, Sun, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Promo Banner */}
      <div className="bg-pv-teal text-white text-center py-2 text-sm font-bold tracking-wider font-hand">
        ✨ Free Shipping on All Orders Over $50! Live the Pure Life ✨
      </div>

      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Mobile Menu / Search */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-pv-teal transition-colors md:hidden">
                <Menu size={24} />
              </button>
              <button className="hidden md:block p-2 text-gray-400 hover:text-pv-teal transition-colors">
                <Search size={22} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center cursor-pointer group">
              <span className="text-4xl md:text-5xl font-hand font-bold text-gray-800 group-hover:text-pv-teal transition-colors relative">
                Vida<span className="text-pv-teal">Vibe</span>
                <Sun className="absolute -top-1 -right-6 text-pv-sunny w-6 h-6 animate-spin-slow" />
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="hidden sm:block p-2 text-gray-400 hover:text-pv-coral transition-colors">
                <Heart size={24} />
              </button>
               <button 
                onClick={onOpenCart}
                className="p-2 text-gray-600 hover:text-pv-teal transition-colors relative group"
              >
                <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-pv-coral text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm transform scale-100 transition-transform">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex justify-center gap-8 pb-2">
            {['New In', 'Best Sellers', 'Bracelets', 'Rings', 'Anklets', 'Charity'].map((link) => (
              <a key={link} href="#" className="font-hand text-xl font-bold text-gray-500 hover:text-pv-teal hover:scale-105 transition-all uppercase tracking-wide">
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;