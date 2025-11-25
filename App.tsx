import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VibeMatcher from './components/VibeMatcher';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { CartItem, Product } from './types';
import { ArrowDown } from 'lucide-react';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Load cart from local storage (optional enhancement simulation)
  useEffect(() => {
    // In a real app, check localStorage here
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const categories = ['All', 'Bracelets', 'Rings', 'Anklets', 'Packs'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar 
        cartCount={cartItems.reduce((a,b) => a + b.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        <Hero />
        
        <VibeMatcher />

        <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Curated For You</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white shadow-lg scale-105' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="text-gray-500 hover:text-pv-teal font-medium flex items-center justify-center mx-auto gap-2 transition-colors">
              Load More Products <ArrowDown size={16} />
            </button>
          </div>
        </section>

        {/* Banner Section */}
        <section className="bg-pv-teal py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="text-4xl font-bold mb-6">Join the Pure Life Club</h2>
            <p className="text-xl mb-8 opacity-90">
              Get 3 exclusive bracelets delivered to your door every month. Support artisans and save up to 50%.
            </p>
            <button className="bg-white text-pv-teal font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Subscription
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
    </div>
  );
};

export default App;