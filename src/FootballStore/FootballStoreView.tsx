import React, { useState, useRef } from 'react';

import ProductsSectionView from '../Products/ProductsSectionView';
import { CartItem, Product, products } from '../Products/Models/ProductsModel';
import OrderCompleteModal from '../modals/OrderCompleteModal';
import MovingCarouselView from '../components/VideoCarousel/MovingVideoCarouselView';
import NavBar from '../components/NavBars/NavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedProducts from '../Products/FeaturedProducts';
import StatsSection from '../components/statsSection/StatsSection';
import AboutSection from '../components/about/AboutSection';
import CartSidebar from "../components/shop/ShoppingCart";


const FootballStoreView = () => {
  const [cart, setCart] = useState<Record<number, CartItem>>({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderComplete, setShowOrderComplete] = useState(false);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const myStoryRef = useRef<HTMLDivElement | null>(null);

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


const onUpdateQuantity = (productId: number, newQuantity: number) => {
  setCart(prevCart => {
    // אם הכמות החדשה 0 או פחות — נמחק את הפריט מהעגלה
    if (newQuantity <= 0) {
      const { [productId]: _, ...rest } = prevCart;
      return rest;
    }

    // אחרת — נעדכן את הכמות
    const existingItem = prevCart[productId];
    if (!existingItem) return prevCart; // מוצר לא קיים? לא עושים כלום

    return {
      ...prevCart,
      [productId]: {
        ...existingItem,
        quantity: newQuantity,
      },
    };
  });
};

const onRemoveItem = (productId: number) => {
  setCart(prevCart => {
    const { [productId]: _, ...rest } = prevCart;
    return rest;
  });
};





const scrollTo = (section: string) => {
  switch (section) {
    case "Shop":
      if (shopRef.current) {
        shopRef.current.scrollIntoView({ behavior: "smooth" });
      }
      break;
      case "MyStory":
      if (myStoryRef.current) {
        myStoryRef.current.scrollIntoView({ behavior: "smooth" });
      }
      break;

    default:
      break;
  }
};

const calculateCartTotal = (): number => {
  return Object.values(cart).reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
};
const totalPrice = calculateCartTotal()


  return (
    // dir="rtl"
    <div className="font-sans" >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavBar cartItems={cart} setIsCartOpen={setShowCheckout} scrollTo={scrollTo} />

      <HeroSection scrollTo={scrollTo} />

      <FeaturedProducts 
      products={products.filter(p => p.isTop)}
      onAddToCart={addToCart}
      isLoading={false} 
      />

      <StatsSection />

      <div ref={myStoryRef}>
        <AboutSection />
      </div>

      <div ref={shopRef}>
        <ProductsSectionView 
        products={products} 
        addToCart={addToCart}
        />
      </div>

      <MovingCarouselView />

      {/* <AboutSection /> */}
      {/* <CTASection /> */}
      
      {/* Modals */}
      {showCheckout && <CartSidebar 
      onClose={() => {
        setShowCheckout(false)
      }}
      items={cart}
      onUpdateQuantity={onUpdateQuantity}
      onRemoveItem={onRemoveItem}
      total={totalPrice}
      onOrderCompletedSuccesfully = {() => {setShowOrderComplete(true)}}
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
    </div>
  );
  
};

export default FootballStoreView;