import React from 'react';
import { Star, Plus, Truck } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../utils/cart';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i < fullStars
              ? 'text-yellow-400 fill-current'
              : i === fullStars && hasHalfStar
              ? 'text-yellow-400 fill-current opacity-50'
              : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden border hover:border-orange-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            SAVE ${(product.originalPrice - product.price).toFixed(2)}
          </div>
        )}
        {product.prime && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center">
            <Truck size={12} className="mr-1" />
            Prime
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              product.inStock
                ? 'bg-orange-400 hover:bg-orange-500 text-white transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </div>
        
        {product.prime && (
          <div className="mt-2 text-xs text-blue-600 flex items-center">
            <Truck size={12} className="mr-1" />
            FREE One-Day Delivery
          </div>
        )}
        
        {!product.inStock && (
          <div className="mt-2 text-sm text-red-600 font-medium">
            Currently unavailable
          </div>
        )}
      </div>
    </div>
  );
}