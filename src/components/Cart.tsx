import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { getCart, updateQuantity, removeFromCart, getCartTotal } from '../utils/cart';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    const updateCartItems = () => {
      setCartItems(getCart());
    };

    updateCartItems();
    window.addEventListener('cartUpdated' as any, updateCartItems);
    window.addEventListener('storage', updateCartItems);

    return () => {
      window.removeEventListener('cartUpdated' as any, updateCartItems);
      window.removeEventListener('storage', updateCartItems);
    };
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
    setCartItems(getCart());
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    setCartItems(getCart());
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = getCartTotal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add some items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-lg font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 border rounded">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="ml-4 text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-bold text-orange-600">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}