import React, { useState, useRef } from 'react';
// import { ShoppingCart, Star, Play, Users, Award, Zap, Target, ArrowRight, Menu, X } from 'lucide-react';
// import { Play } from 'lucide-react';

import ProductsSectionView from '../Products/ProductsSectionView';
// import HeroSectionView from '../components/HeroSection/HeroSectionView';
import { CartItem, Product, products } from '../Products/Models/ProductsModel';
import OrderCompleteModal from '../modals/OrderCompleteModal';
// import VideoCarouselView from '../components/VideoCarousel/VideoCarouselView';
// import HeaderView from '../components/Header/HeaderView';
// import MovingVideoCarousel from '../components/VideoCarousel/MovingVideoCarouselView';
import MovingCarouselView from '../components/VideoCarousel/MovingVideoCarouselView';
import NavBar from '../components/NavBars/NavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedProducts from '../Products/FeaturedProducts';
import StatsSection from '../components/statsSection/StatsSection';
import AboutSection from '../components/about/AboutSection';
import CheckoutModal from '../modals/CheckoutModal';
// import ProductsSection from '../Products/ProductsSection';
// import CartSidebar from "../shop/ShoppingCart";


const FootballStoreView = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [cart, setCart] = useState<Product[]>([]);
  const [cart, setCart] = useState<Record<number, CartItem>>({});
  // const [scrollY, setScrollY] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderComplete, setShowOrderComplete] = useState(false);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const myStory = useRef(null)



  

  // useEffect(() => {
    // const handleScroll = () => setScrollY(window.scrollY);
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  
  const addToCart = (product: Product) => {
  setCart(prevCart => {
    const existingItem = prevCart[product.id];

    return {
      ...prevCart,
      [product.id]: {
        product,
        quantity: existingItem ? existingItem.quantity + 1 : 1,
      },
    };
  });
};

  const removeFromCart = (productId: number) => {
  setCart(prevCart => {
    const item = prevCart[productId];
    if (!item) return prevCart;

    if (item.quantity > 1) {
      return {
        ...prevCart,
        [productId]: {
          ...item,
          quantity: item.quantity - 1,
        },
      };
    } else {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    }
  });
};


const scrollToShop = () => {
  if (shopRef.current) {
    shopRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

//  const updateCartQuantity = (productId: number, quantity: number) => {
//   setCart(prev => {
//     if (quantity <= 0) {
//       const { [productId]: _, ...rest } = prev;
//       return rest;
//     }

//     return {
//       ...prev,
//       [productId]: {
//         ...prev[productId],
//         quantity,
//       },
//     };
//   });
// };


  

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowOrderComplete(true);
    setShowCheckout(false);
    setCart([]);
    // כאן תוכל להוסיף שליחה לשרת
  };

//   const CheckoutModal = () => {
//     const [orderData, setOrderData] = useState({
//       name: '',
//       phone: '',
//       email: '',
//       address: '',
//       city: '',
//       paymentMethod: 'credit'
//     });
//     return (
//     <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
//       <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-white">🛒 השלמת הזמנה</h2>
//           <button 
//             onClick={() => setShowCheckout(false)}
//             className="text-gray-400 hover:text-white text-2xl"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* סל קניות */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4">הסל שלך</h3>
//             <div className="space-y-4 mb-6">
//             {Object.values(cart).map((cartItem, index) => {
//               const product = cartItem.product;

//               return (
//                 <div key={index} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                   {stringIsImage(product.image) ? (
//                     <img
//                     src={product.image}
//                     alt="Product"
//                     className="mx-auto h-16 w-16 object-contain"
//                   />
//                   ) : (
//                     <div className="text-6xl">{product.image}</div>
//                   )}
//                     <div>
//                       <h4 className="text-white font-bold">{product.name}</h4>
//                       <p className="text-gray-400 text-sm">{product.description}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-yellow-400 font-bold">₪{product.price}</span>
//                     <button 
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-400 hover:text-red-300 text-xl"
//                     >
//                       🗑️
//                     </button>
//                   </div>
//                 </div>
//               )})}
//             </div>
            
//             <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4">
//               <div className="flex justify-between text-white font-bold text-xl">
//                 <span>סה"כ:</span>
//                 <span>₪{getTotalPrice()}</span>
//               </div>
//               {/* <div className="text-green-100 text-sm mt-2">
//                 ✅ משלוח חינם | ✅ אחריות 2 שנים
//               </div> */}
//             </div>
//           </div>

//           {/* טופס הזמנה */}
//           <div>
//             <h3 className="text-xl font-bold text-white mb-4">פרטי הזמנה</h3>
//             <form onSubmit={handleOrderSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-gray-300 mb-2">שם מלא *</label>
//                 <input
//                   type="text"
//                   value={orderData.name}
//                   onChange={(e) => setOrderData({...orderData, name: e.target.value})}
//                   className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-gray-300 mb-2">טלפון *</label>
//                 <input
//                   type="tel"
//                   value={orderData.phone}
//                   onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
//                   className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-gray-300 mb-2">אימייל</label>
//                 <input
//                   type="email"
//                   value={orderData.email}
//                   onChange={(e) => setOrderData({...orderData, email: e.target.value})}
//                   className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-gray-300 mb-2">כתובת משלוח *</label>
//                 <input
//                   type="text"
//                   value={orderData.address}
//                   onChange={(e) => setOrderData({...orderData, address: e.target.value})}
//                   className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-gray-300 mb-2">עיר *</label>
//                 <input
//                   type="text"
//                   value={orderData.city}
//                   onChange={(e) => setOrderData({...orderData, city: e.target.value})}
//                   className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:border-green-400 focus:outline-none"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-300 mb-2">אמצעי תשלום</label>
//                 <div className="space-y-2">
//                   <label className="flex items-center gap-2 text-white">
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="credit"
//                       checked={orderData.paymentMethod === 'credit'}
//                       onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
//                       className="text-green-400"
//                     />
//                     💳 כרטיס אשראי
//                   </label>
//                   <label className="flex items-center gap-2 text-white">
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="paypal"
//                       checked={orderData.paymentMethod === 'paypal'}
//                       onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
//                       className="text-green-400"
//                     />
//                     🌐 PayPal
//                   </label>
//                   <label className="flex items-center gap-2 text-white">
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="bank"
//                       checked={orderData.paymentMethod === 'bank'}
//                       onChange={(e) => setOrderData({...orderData, paymentMethod: e.target.value})}
//                       className="text-green-400"
//                     />
//                     🏛️ העברה בנקאית
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl text-lg hover:scale-105 transform transition-all duration-300 shadow-xl mt-6"
//               >
//                 🚀 השלם הזמנה - ₪{getTotalPrice()}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

  // const AboutSection = () => (
  //   <div className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 py-20">
  //     <div className="container mx-auto px-4">
  //       <div className="flex flex-col lg:flex-row items-center gap-12">
  //         <div className="lg:w-1/2">
  //           <h2 className="text-5xl font-black text-white mb-8">
  //             למה אני?
  //           </h2>
  //           <p className="text-xl text-green-100 mb-6 leading-relaxed">
  //             אני שחקן כדורגל מקצועי עם מיליוני צפיות בטיקטוק. אני מלמד ילדים טכניקות מתקדמות ומראה להם איך להגיע לרמה הבאה.
  //           </p>
  //           <p className="text-lg text-green-200 mb-8">
  //             הציוד שאני מוכר כאן זה בדיוק מה שאני משתמש בו באימונים שלי. איכות מעולה, טכנולוgia מתקדמת ותוצאות מוכחות.
  //           </p>
            
  //           <div className="grid grid-cols-2 gap-6">
  //             <div className="text-center">
  //               <div className="text-3xl mb-2">🏆</div>
  //               <div className="text-white font-bold">ניסיון מוכח</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-3xl mb-2">💪</div>
  //               <div className="text-white font-bold">תוצאות מובטחות</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-3xl mb-2">🎯</div>
  //               <div className="text-white font-bold">דיוק מקסימלי</div>
  //             </div>
  //             <div className="text-center">
  //               <div className="text-3xl mb-2">⚡</div>
  //               <div className="text-white font-bold">שיפור מהיר</div>
  //             </div>
  //           </div>
  //         </div>
          
  //         <div className="lg:w-1/2">
  //           <div className="relative">
  //             {/* Video placeholder */}
  //             <div className="aspect-video bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center text-white text-6xl shadow-2xl">
  //               <Play className="w-20 h-20" />
  //             </div>
  //             <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold animate-bounce">
  //               1M+ צפיות!
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const CTASection = () => (
  //   <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-20 relative overflow-hidden">
  //     {/* Animated background */}
  //     <div className="absolute inset-0">
  //       {[...Array(15)].map((_, i) => (
  //         <div
  //           key={i}
  //           className="absolute w-4 h-4 bg-white rounded-full animate-ping opacity-20"
  //           style={{
  //             left: `${Math.random() * 100}%`,
  //             top: `${Math.random() * 100}%`,
  //             animationDelay: `${Math.random() * 2}s`,
  //             animationDuration: `${3 + Math.random() * 2}s`
  //           }}
  //         />
  //       ))}
  //     </div>
      
  //     <div className="container mx-auto px-4 text-center relative z-10">
  //       <h2 className="text-6xl font-black text-white mb-8">
  //         מוכן להתחיל?
  //       </h2>
  //       <p className="text-2xl text-red-100 mb-12 max-w-3xl mx-auto">
  //         הצטרף לאלפי ילדים שכבר משפרים את הכישורים שלהם עם הציוד המתקדם ביותר!
  //       </p>
        
  //       <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  //         <button 
  //           onClick={() => setShowCheckout(true)}
  //           className="px-12 py-6 bg-white text-red-600 font-black rounded-full text-xl hover:scale-110 transform transition-all duration-300 shadow-2xl"
  //         >
  //           🛒 קנה עכשיו - מבצע מיוחד!
  //         </button>
  //         <div className="text-white">
  //           <div className="text-sm">יש לך שאלות?</div>
  //           <div className="font-bold">📞 052-123-4567</div>
  //         </div>
  //       </div>
        
  //       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
  //         <div className="bg-black bg-opacity-30 p-6 rounded-xl backdrop-blur-sm">
  //           <div className="text-3xl mb-2">🚚</div>
  //           <div className="text-white font-bold">משלוח חינם</div>
  //           <div className="text-red-100 text-sm">לכל הארץ</div>
  //         </div>
  //         <div className="bg-black bg-opacity-30 p-6 rounded-xl backdrop-blur-sm">
  //           <div className="text-3xl mb-2">🔒</div>
  //           <div className="text-white font-bold">תשלום מאובטח</div>
  //           <div className="text-red-100 text-sm">100% בטוח</div>
  //         </div>
  //         <div className="bg-black bg-opacity-30 p-6 rounded-xl backdrop-blur-sm">
  //           <div className="text-3xl mb-2">↩️</div>
  //           <div className="text-white font-bold">החזרה חינם</div>
  //           <div className="text-red-100 text-sm">14 ימים</div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    // dir="rtl"
    <div className="font-sans" >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavBar cartItems={cart} setIsCartOpen={setShowCheckout} />
      <HeroSection scrollToShop={scrollToShop} />
      {/* <HeaderView
        onShowCheckout={()=>{setShowCheckout(true)}}
        cart={cart}
        isMenuOpen={isMenuOpen}
        toggleMenuOpen={() => {setIsMenuOpen(prev => !prev)}}
      /> */}
      {/* <VideoCarouselView /> */}
      <FeaturedProducts 
      products={products.filter(p => p.isTop)}
      onAddToCart={addToCart}
      isLoading={false} 
      />
      <StatsSection />

      <AboutSection />
      <div ref={shopRef}>
        <ProductsSectionView products={products} addToCart={addToCart}/>
      </div>
      <MovingCarouselView />

      {/* <ProductsSectionView 
        products={products} 
        addToCart = {addToCart} 
      /> */}
      {/* <AboutSection /> */}
      {/* <CTASection /> */}
      
      {/* Modals */}
         {/* setShowCheckout: (a: boolean) => void;
      cart: Record<number, CartItem>;
      removeFromCart: (id: number) => void;
      handleOrderSubmit: () => void; */}
      {showCheckout && <CheckoutModal
      setShowCheckout={setShowCheckout} 
      cart={cart} 
      removeFromCart={removeFromCart} 
      handleOrderSubmit={handleOrderSubmit}  
      />}
      {showOrderComplete && <OrderCompleteModal
      onCloseCompleteModal={() => {
        setShowOrderComplete(false)
      }} />
      }
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">⚽</div>
          <p className="text-gray-400 mb-4">העתיד של הכדורגל מתחיל כאן</p>
          {/* <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition">TikTok</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition">YouTube</a>
          </div> */}
          <p className="text-gray-500 text-sm">© 2025 FootballPro. כל הזכויות שמורות.</p>
        </div>
      </footer>
      </div>
      {/* Shopping Cart Sidebar */}
      {/* <CartSidebar
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        total={getTotalPrice()}
      /> */}
    </div>
  );
  
};

export default FootballStoreView;