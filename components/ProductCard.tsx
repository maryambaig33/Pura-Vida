import React from 'react';
import { Product } from '../types';
import { Plus, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Badge */}
      {product.isNew && (
        <span className="absolute top-4 left-4 bg-vida-mint text-vida-teal-dark text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider shadow-sm">
          New Drop
        </span>
      )}
      {product.isBestSeller && (
        <span className="absolute top-4 left-4 bg-vida-gold text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wider shadow-sm">
          Best Seller
        </span>
      )}

      {/* Image Container */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 relative mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay Button */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm text-gray-900 py-4 font-bold uppercase text-xs tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-vida-teal hover:text-white"
        >
          <ShoppingBag size={14} /> Add To Stack
        </button>
      </div>

      {/* Info */}
      <div className="px-2 pb-2">
        <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-bold text-gray-800 leading-tight group-hover:text-vida-teal transition-colors">
            {product.name}
            </h3>
            <span className="font-marker text-lg text-gray-900 ml-2">${product.price}</span>
        </div>
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-bold">{product.category}</p>
        
        {/* Color Dots */}
        <div className="flex gap-1.5 mt-2">
            {[1,2,3].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full border border-gray-200 ${i === 1 ? 'bg-vida-teal' : i === 2 ? 'bg-vida-gold' : 'bg-vida-coral'}`}></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;