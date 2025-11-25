import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group flex flex-col">
      {/* Image Area */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-md transition-all duration-500">
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-pv-sunny text-gray-900 text-xs font-bold px-3 py-1 rounded-sm shadow-sticker font-hand text-lg">
              New!
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-white text-pv-teal-dark text-xs font-bold px-3 py-1 rounded-sm shadow-sticker font-hand text-lg">
              Fave
            </span>
          )}
        </div>

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Quick Add Button */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white text-gray-900 rounded-full shadow-lg flex items-center justify-center hover:bg-pv-teal hover:text-white transition-colors duration-300 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
          title="Quick Add"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Info Area */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1 group-hover:text-pv-teal transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">{product.category}</p>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="font-hand text-2xl font-bold text-gray-900">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;