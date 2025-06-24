  import React, { useState } from 'react';
import { CartItem } from '../Products/Models/ProductsModel';

  type Props = {
      setShowCheckout: (a: boolean) => void;
      cart: Record<number, CartItem>;
      removeFromCart: (id: number) => void;
      handleOrderSubmit: (a: React.FormEvent<HTMLFormElement>) => void;
  };
  export default function CheckoutModal ({ setShowCheckout, cart, removeFromCart, handleOrderSubmit }: Props) {
    const [orderData, setOrderData] = useState({
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      paymentMethod: 'credit'
    });

    function stringIsImage(value: string): boolean {
      return value.endsWith('.png')
    }

    const getTotalPrice = () => {
      return Object.values(cart).reduce(
        (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
        0
      );
    };


    return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">🛒 השלמת הזמנה</h2>
          <button 
            onClick={() => setShowCheckout(false)}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* סל קניות */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">הסל שלך</h3>
            <div className="space-y-4 mb-6">
            {Object.values(cart).map((cartItem, index) => {
              const product = cartItem.product;

              return (
                <div key={index} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                  {stringIsImage(product.image) ? (
                    <img
                    src={product.image}
                    alt="Product"
                    className="mx-auto h-16 w-16 object-contain"
                  />
                  ) : (
                    <div className="text-6xl">{product.image}</div>
                  )}
                    <div>
                      <h4 className="text-white font-bold">{product.name}</h4>
                      <p className="text-gray-400 text-sm">{product.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">₪{product.price}</span>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="text-red-400 hover:text-red-300 text-xl"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              )})}
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4">
              <div className="flex justify-between text-white font-bold text-xl">
                <span>סה"כ:</span>
                <span>₪{getTotalPrice()}</span>
              </div>
              {/* <div className="text-green-100 text-sm mt-2">
                ✅ משלוח חינם | ✅ אחריות 2 שנים
              </div> */}
            </div>
          </div>

          {/* טופס הזמנה */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">פרטי הזמנה</h3>
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">שם מלא *</label>
                <input
                  type="text"
                  value={orderData.name}
                  onChange={(e) => setOrderData({...orderData, name: e.target.value})}
                  className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">טלפון *</label>
                <input
                  type="tel"
                  value={orderData.phone}
                  onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                  className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">אימייל</label>
                <input
                  type="email"
                  value={orderData.email}
                  onChange={(e) => setOrderData({...orderData, email: e.target.value})}
                  className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">כתובת משלוח *</label>
                <input
                  type="text"
                  value={orderData.address}
                  onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                  className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">עיר *</label>
                <input
                  type="text"
                  value={orderData.city}
                  onChange={(e) => setOrderData({...orderData, city: e.target.value})}
                  className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">אמצעי תשלום</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-white">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={orderData.paymentMethod === 'credit'}
                      onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
                      className="text-green-400"
                    />
                    💳 כרטיס אשראי
                  </label>
                  <label className="flex items-center gap-2 text-white">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={orderData.paymentMethod === 'paypal'}
                      onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
                      className="text-green-400"
                    />
                    🌐 PayPal
                  </label>
                  <label className="flex items-center gap-2 text-white">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={orderData.paymentMethod === 'bank'}
                      onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
                      className="text-green-400"
                    />
                    🏛️ העברה בנקאית
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl text-lg hover:scale-105 transform transition-all duration-300 shadow-xl mt-6"
              >
                🚀 השלם הזמנה - ₪{getTotalPrice()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}