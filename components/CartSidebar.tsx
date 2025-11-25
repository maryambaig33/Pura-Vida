import React from 'react';
import { X, Trash2, ArrowRight, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 50;
  const remainingForFreeShip = freeShippingThreshold - subtotal;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold text-gray-900">Your Cart ({items.reduce((a,b)=>a+b.quantity,0)})</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-5 py-3 bg-pv-sand">
            <p className="text-xs font-semibold text-center mb-2 text-gray-600">
              {remainingForFreeShip > 0 
                ? `Add $${remainingForFreeShip.toFixed(2)} for FREE Shipping` 
                : "You've unlocked FREE Shipping! 🎉"}
            </p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pv-teal transition-all duration-500 rounded-full"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-3xl">🛍️</div>
                <p className="text-gray-500 font-medium">Your cart is empty.</p>
                <button onClick={onClose} className="text-pv-teal font-bold hover:underline">Start Shopping</button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="px-2 py-1 text-gray-500 hover:text-gray-900 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >-</button>
                        <span className="px-2 text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="px-2 py-1 text-gray-500 hover:text-gray-900"
                        >+</button>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-xs text-red-400 hover:text-red-600 mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-white space-y-4">
              <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                <Lock size={12} /> Secure Checkout by VidaVibe
              </p>
              <button className="w-full bg-pv-teal hover:bg-pv-teal-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl">
                Checkout <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;