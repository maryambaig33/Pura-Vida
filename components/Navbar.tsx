import React from 'react';
import { ShoppingBag, Menu, Search, Sun } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu / Search */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-vida-teal transition-colors md:hidden">
              <Menu size={24} />
            </button>
            <button className="p-2 text-gray-400 hover:text-vida-teal transition-colors hidden md:block">
              <Search size={20} />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center cursor-pointer group">
            <Sun className="h-8 w-8 text-vida-teal mr-2 group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-2xl font-bold tracking-widest text-gray-800 group-hover:text-vida-teal transition-colors">
              VIDA<span className="font-light">VIBE</span>
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2">
             <button 
              onClick={onOpenCart}
              className="p-2 text-gray-600 hover:text-vida-teal transition-colors relative"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 bg-vida-coral text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex justify-center space-x-8 pb-4 text-sm font-medium tracking-wide text-gray-500">
          {['NEW ARRIVALS', 'BRACELETS', 'RINGS', 'ANKLETS', 'CHARITY', 'SUBSCRIPTION'].map((link) => (
            <a key={link} href="#" className="hover:text-vida-teal border-b-2 border-transparent hover:border-vida-teal transition-all pb-1">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
