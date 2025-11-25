export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Bracelets' | 'Rings' | 'Anklets' | 'Packs';
  image: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface VibeResponse {
  vibeReading: string;
  suggestedColors: string[];
  stylingTip: string;
}
