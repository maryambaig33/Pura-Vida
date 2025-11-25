import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Badge */}
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-vida-teal text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          NEW
        </span>
      )}
      {product.isBestSeller && (
        <span className="absolute top-3 left-3 bg-vida-coral text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          BEST SELLER
        </span>
      )}

      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        {/* Quick Add Overlay */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-vida-teal hover:text-white"
          aria-label="Add to cart"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-vida-teal transition-colors truncate">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-semibold">${product.price}</p>
          <div className="flex gap-1">
             {[1,2,3,4,5].map(i => (
               <div key={i} className={`w-2 h-2 rounded-full ${i < 5 ? 'bg-vida-gold' : 'bg-gray-200'}`}></div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
