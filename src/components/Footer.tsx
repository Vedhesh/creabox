import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About CreaBox</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press Releases</a></li>
              <li><a href="#" className="hover:text-white">CreaBox Cares</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Sell on CreaBox</a></li>
              <li><a href="#" className="hover:text-white">CreaBox Associates</a></li>
              <li><a href="#" className="hover:text-white">Advertise Your Products</a></li>
              <li><a href="#" className="hover:text-white">CreaBox Pay</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">CreaBox Payment Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">CreaBox Business Card</a></li>
              <li><a href="#" className="hover:text-white">Shop with Points</a></li>
              <li><a href="#" className="hover:text-white">Reload Your Balance</a></li>
              <li><a href="#" className="hover:text-white">CreaBox Currency Converter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Your Account</a></li>
              <li><a href="#" className="hover:text-white">Your Orders</a></li>
              <li><a href="#" className="hover:text-white">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:text-white">Returns & Replacements</a></li>
              <li><a href="#" className="hover:text-white">Help</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">CreaBox</span>
            <span className="text-orange-400">.com</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 CreaBox Clone. This is a demo application built for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}