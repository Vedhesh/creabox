import React, { useState } from 'react';
import { ArrowLeft, Star, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../utils/cart';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
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
          size={20}
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
    <div className="max-w-7xl mx-auto px-4 py-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to results</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
                <span className="ml-2 text-blue-600 hover:underline cursor-pointer">
                  {product.reviewCount.toLocaleString()} reviews
                </span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold text-red-600">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.prime && (
              <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <Truck size={20} />
                <span className="font-medium">FREE One-Day Delivery</span>
              </div>
            )}

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield size={16} />
                <span>Editor's Choice</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <RotateCcw size={16} />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>

          {/* Product Features */}
          <div className="border-t pt-6">
            <h3 className="font-bold text-lg mb-3">About this comic</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}