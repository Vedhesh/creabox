import React from 'react';
import { Truck, Shield, RotateCcw, CreditCard } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Everything you need, delivered fast
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Millions of products, unbeatable prices, and lightning-fast delivery
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="flex flex-col items-center p-4">
              <Truck size={32} className="mb-2" />
              <span className="text-sm font-medium">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Shield size={32} className="mb-2" />
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <RotateCcw size={32} className="mb-2" />
              <span className="text-sm font-medium">Easy Returns</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <CreditCard size={32} className="mb-2" />
              <span className="text-sm font-medium">Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}