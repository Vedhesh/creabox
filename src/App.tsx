import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Auth } from './components/Auth';
import { Footer } from './components/Footer';
import { products, categories } from './data/products';
import { Product } from './types';

type View = 'home' | 'product';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        categories={categories}
      />

      {currentView === 'home' && (
        <>
          <Hero />
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {searchQuery ? `Results for "${searchQuery}"` : 
                 selectedCategory === 'All' ? 'Featured Products' : selectedCategory}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
            </div>
            <ProductGrid 
              products={filteredProducts}
              onProductClick={handleProductClick}
            />
          </main>
        </>
      )}

      {currentView === 'product' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBackToHome}
        />
      )}

      <Footer />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <Auth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}

export default App;