import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import Order  from "../../entities/Order.json";

export default function ShoppingCart({ onClose, items, onUpdateQuantity, onRemoveItem, total }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip_code: "",
      country: ""
    }
  });

  const handleCheckout = async () => {
    if (Object.values(items).length === 0) return;
    setIsCheckingOut(true);
    try {
      const orderData = {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        products: Object.values(items).map(item => ({
          product_id: item.product.id,
          product_name: item.product.name,
          quantity: item.quantity,
          price: item.product.price
        })),
        total_amount: total,
        shipping_address: customerInfo.address
      };
      console.log(orderData)

      // await Order.create(orderData);
      // Clear cart and show success
      Object.values(items).forEach(item => onRemoveItem(item.product.id));
      alert("Order placed successfully! We'll contact you soon.");
      onClose();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-slate-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {Object.values(items).length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.values(items).map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                    >
                      <div className="flex items-start justify-between mb-3 ">
                        <img 
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-12 w-auto mx-auto" 
                        />

                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{item.product.name}</h3>
                          <p className="text-slate-300 text-sm">${item.product.price}</p>
                        </div>
                        
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-white font-semibold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Checkout Form & Total */}
            {Object.values(items).length > 0 && (

                <form
                onSubmit={(e) => {
                  handleCheckout()
                }}>
              <div className="border-t border-slate-700 p-6 space-y-6">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-green-400">${total.toFixed(2)}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Customer Information</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="text-slate-300">Name</label>
                      <input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-green-400 focus:outline-none transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-slate-300">Phone</label>
                      <input
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Phone number"
                        className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-green-400 focus:outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-slate-300">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-green-400 focus:outline-none transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="text-slate-300">Address</label>
                    <textarea
                      id="address"
                      value={customerInfo.address.street}
                      onChange={(e) => setCustomerInfo(prev => ({ 
                        ...prev, 
                        address: { ...prev.address, street: e.target.value }
                      }))}
                      placeholder="Street address, city, state, zip"
                      className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-green-400 focus:outline-none transition-all duration-200"
                      rows={3}
                      required
                    />
                  </div>
                </div>


                <button
                type="submit"
                  // onClick={handleCheckout}
                  // disabled={isCheckingOut || !customerInfo.name || !customerInfo.email}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold py-3 active:scale-95 rounded-lg"
                >
                  {isCheckingOut ? "Processing..." : "Place Order"}
                </button>
              </div>
              </form>

            )}
          </motion.div>
        </>
    </AnimatePresence>
  );
}