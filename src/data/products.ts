import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Apple iPhone 15 Pro Max',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 12847,
    description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and Pro camera system.',
    features: [
      '6.7-inch Super Retina XDR display',
      'A17 Pro chip with 6-core GPU',
      'Pro camera system with 48MP Main camera',
      'Up to 29 hours video playback',
      'Action Button and USB-C'
    ],
    inStock: true,
    prime: true
  },
  {
    id: '2',
    title: 'Sony WH-1000XM4 Wireless Headphones',
    price: 279.99,
    originalPrice: 349.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 8924,
    description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Touch sensor controls',
      'Speak-to-chat technology',
      'Quick charge (10min = 5hrs)'
    ],
    inStock: true,
    prime: true
  },
  {
    id: '3',
    title: 'Amazon Echo Dot (5th Gen)',
    price: 49.99,
    image: 'https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Smart Home',
    rating: 4.5,
    reviewCount: 15632,
    description: 'Our most popular smart speaker with Alexa. Rich sound, smart home hub, privacy controls.',
    features: [
      'Improved audio with deeper bass',
      'Voice control for smart home',
      'Built-in Eero WiFi extender',
      'Privacy controls',
      'Temperature sensor'
    ],
    inStock: true,
    prime: true
  },
  {
    id: '4',
    title: 'Nike Air Force 1 Low White',
    price: 110.00,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fashion',
    rating: 4.8,
    reviewCount: 5672,
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original.',
    features: [
      'Leather upper for durability',
      'Nike Air cushioning',
      'Rubber outsole with pivot points',
      'Classic basketball design',
      'Multiple colorways available'
    ],
    inStock: true,
    prime: false
  },
  {
    id: '5',
    title: 'MacBook Pro 14-inch M3 Pro',
    price: 1999.99,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 3421,
    description: 'Supercharged by M3 Pro or M3 Max chip. Built for all types of creatives.',
    features: [
      '14.2-inch Liquid Retina XDR display',
      'M3 Pro chip with 12-core CPU',
      'Up to 18 hours battery life',
      'Advanced camera and audio',
      'Multiple ports including Thunderbolt 4'
    ],
    inStock: true,
    prime: true
  },
  {
    id: '6',
    title: 'The Psychology of Money',
    price: 14.99,
    originalPrice: 18.99,
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Books',
    rating: 4.7,
    reviewCount: 9876,
    description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel.',
    features: [
      '19 short stories',
      'Behavioral psychology insights',
      'Investment wisdom',
      'Easy to understand concepts',
      'Bestselling finance book'
    ],
    inStock: true,
    prime: true
  },
  {
    id: '7',
    title: 'Instant Pot Duo 7-in-1 Pressure Cooker',
    price: 79.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/4518576/pexels-photo-4518576.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Home & Kitchen',
    rating: 4.6,
    reviewCount: 45623,
    description: 'America\'s #1 multi-cooker, with 7 appliances in 1.',
    features: [
      '7-in-1 functionality',
      '6-quart capacity',
      '13+ smart programs',
      'Stainless steel inner pot',
      '10+ safety features'
    ],
    inStock: true,
    prime: true
  },
  {
    id: '8',
    title: 'Fitbit Charge 5 Advanced Fitness Tracker',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Health & Sports',
    rating: 4.3,
    reviewCount: 7854,
    description: 'Advanced fitness & health tracker with built-in GPS and stress management.',
    features: [
      'Built-in GPS',
      'ECG app and stress management',
      'Sleep Score & Smart Wake',
      '7+ day battery life',
      'Water resistant to 50m'
    ],
    inStock: true,
    prime: true
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Health & Sports',
  'Smart Home'
];