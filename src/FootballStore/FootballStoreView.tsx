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
import CartSidebar from "../components/shop/ShoppingCart";


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





const scrollToShop = () => {
  if (shopRef.current) {
    shopRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

const calculateCartTotal = (): number => {
  return Object.values(cart).reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
};
const totalPrice = calculateCartTotal()

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


  return (
    // dir="rtl"
    <div className="font-sans" >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavBar cartItems={cart} setIsCartOpen={setShowCheckout} />

      <HeroSection scrollToShop={scrollToShop} />

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
      {showCheckout && <CartSidebar 
      onClose={() => {setShowCheckout(false)}}
      items={cart}
      onUpdateQuantity={onUpdateQuantity}
      onRemoveItem={onRemoveItem}
      total={totalPrice}
      />}

      {/* {showCheckout && <CheckoutModal
      setShowCheckout={setShowCheckout} 
      cart={cart} 
      removeFromCart={removeFromCart} 
      handleOrderSubmit={handleOrderSubmit}  
      />} */}

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