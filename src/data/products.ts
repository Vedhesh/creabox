import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'CreaBox - Classics #6',
    price: 11,
    originalPrice: 25,
    image: 'https://images.pexels.com/photos/7809122/pexels-photo-7809122.jpeg',
    category: 'Imagined',
    rating: 4.7,
    reviewCount: 12847,
    description: 'NO SPOILERS!',
    features: [
      '6th ever comic made!',
      'Doomsday is coming...',
    ],
    inStock: true,
    prime: false
  },
  {
    id: '2',
    title: 'Creabox - Chapri Iron Bhaiyya!',
    price: 4,
    originalPrice: 12,
    image: 'https://images.pexels.com/photos/7768663/pexels-photo-7768663.jpeg',
    category: 'Mythical',
    rating: 4.6,
    reviewCount: 8924,
    description: 'A comedic Desi Parody of Iron-Man - a Marvel Bestseller!',
    features: [
      'Hilarious',
      'Purely Indian!',
    ],
    inStock: true,
    prime: false
  },
  {
    id: '3',
    title: 'Creabox - Thor: The God of Blunder',
    price: 12,
    originalPrice: 22,
    image: 'https://images.pexels.com/photos/3221533/pexels-photo-3221533.jpeg',
    category: 'Other',
    rating: 4.5,
    reviewCount: 15632,
    description: 'Available as audio book as well!',
    features: [
      'Improved audio with deeper soundspace.',
    ],
    inStock: true,
    prime: false
  },
  {
    id: '4',
    title: 'Creabox - Chapri Iron Bhaiyya! - 2',
    price: 34.00,
    image: 'https://images.pexels.com/photos/7768661/pexels-photo-7768661.jpeg',
    category: 'Mythical',
    rating: 4.8,
    reviewCount: 5672,
    description: 'An amazing sequel to Chapri Iron Bhaiyya! - 1',
    features: [
      'Hard cover for durability',
    ],
    inStock: false,
    prime: true
  },
];

export const categories = [
  'Interesting',
  'Mythical',
  'Imagined',
  'Other'
];