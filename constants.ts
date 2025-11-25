import { Product } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Sunset Shore Stack',
    price: 45,
    category: 'Packs',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    description: 'A vibrant collection inspired by golden hour on the Pacific coast.',
    isBestSeller: true
  },
  {
    id: 'p2',
    name: 'Turquoise Wave Ring',
    price: 24,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
    description: 'Sterling silver ring featuring a genuine turquoise stone.',
    isNew: true
  },
  {
    id: 'p3',
    name: 'Baja Blue Braided',
    price: 14,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1576597734893-b88358249419?q=80&w=800&auto=format&fit=crop',
    description: 'Our classic waterproof braided bracelet in deep ocean blue.'
  },
  {
    id: 'p4',
    name: 'Coral Reef Anklet',
    price: 16,
    category: 'Anklets',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    description: 'Delicate beaded anklet that pops against sun-kissed skin.'
  },
  {
    id: 'p5',
    name: 'Alpine Adventure Pack',
    price: 38,
    category: 'Packs',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop',
    description: 'Earth tones and rugged durability for the mountain explorer.'
  },
  {
    id: 'p6',
    name: 'Moonstone Magic',
    price: 28,
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop',
    description: 'A mystical moonstone set in a delicate rose gold band.',
    isBestSeller: true
  },
  {
    id: 'p7',
    name: 'Golden Hour Cuff',
    price: 32,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437256-2313490f2b3b?q=80&w=800&auto=format&fit=crop',
    description: 'Minimalist gold cuff that stacks perfectly with woven styles.'
  },
  {
    id: 'p8',
    name: 'Seafoam Braided',
    price: 14,
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=800&auto=format&fit=crop',
    description: 'Light and airy seafoam green, perfect for everyday wear.'
  }
];

export const VIBE_PROMPTS = [
  "Dreamy & Romantic",
  "Bold & Adventurous",
  "Chill & Beachy",
  "Earthy & Grounded",
  "Vibrant & Energetic"
];
