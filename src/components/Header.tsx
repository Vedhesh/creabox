import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin } from 'lucide-react';
import { getCurrentUser, signOut } from '../utils/auth';
import { getCartItemCount } from '../utils/cart';
import { User as UserType } from '../types';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onCartClick: () => void;
  onAuthClick: () => void;
  searchQuery: string;
  selectedCategory: string;
  categories: string[];
}

export function Header({ 
  onSearchChange, 
  onCategoryChange, 
  onCartClick, 
  onAuthClick, 
  searchQuery,
  selectedCategory,
  categories 
}: HeaderProps) {
  const [user, setUser] = useState<UserType | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setUser(getCurrentUser());
    setCartCount(getCartItemCount());
    
    const handleStorageChange = () => {
      setUser(getCurrentUser());
      setCartCount(getCartItemCount());
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for local updates
    window.addEventListener('cartUpdated' as any, handleStorageChange);
    window.addEventListener('userUpdated' as any, handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated' as any, handleStorageChange);
      window.removeEventListener('userUpdated' as any, handleStorageChange);
    };
  }, []);

  const handleSignOut = () => {
    signOut();
    setUser(null);
    window.dispatchEvent(new Event('userUpdated'));
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Main Header */}
      <div className="px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="text-2xl font-bold">
              <span className="text-white">amazon</span>
              <span className="text-orange-400">.com</span>
            </div>
          </div>

          {/* Delivery Location */}
          <div className="hidden md:flex items-center text-sm">
            <MapPin size={16} className="text-gray-300" />
            <div className="ml-1">
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="font-bold">New York 10001</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex">
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="bg-gray-100 text-gray-800 px-3 py-2 rounded-l border-r border-gray-300 text-sm hidden md:block"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search Amazon"
                  className="w-full px-4 py-2 text-gray-800 rounded md:rounded-none md:rounded-r focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language */}
            <div className="hidden md:flex items-center text-sm">
              <span className="text-gray-300">EN</span>
            </div>

            {/* Account */}
            <div className="text-sm">
              {user ? (
                <div className="relative group">
                  <button className="flex flex-col items-start hover:bg-gray-800 p-2 rounded">
                    <span className="text-xs text-gray-300">Hello, {user.name}</span>
                    <span className="font-bold">Account & Lists</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <button 
                      onClick={handleSignOut}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={onAuthClick}
                  className="flex flex-col items-start hover:bg-gray-800 p-2 rounded"
                >
                  <span className="text-xs text-gray-300">Hello, sign in</span>
                  <span className="font-bold">Account & Lists</span>
                </button>
              )}
            </div>

            {/* Cart */}
            <button 
              onClick={onCartClick}
              className="flex items-center hover:bg-gray-800 p-2 rounded relative"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="ml-2 font-bold hidden md:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="bg-gray-800 px-4 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Menu size={16} />
            <span>All</span>
          </div>
          {categories.slice(1).map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`hover:text-orange-400 transition-colors ${
                selectedCategory === category ? 'text-orange-400' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full bg-gray-100 text-gray-800 px-3 py-2 rounded"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {categories.slice(1).map(category => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 hover:text-orange-400 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}