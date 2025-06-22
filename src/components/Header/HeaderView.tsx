// import React, { useState, useEffect } from 'react';
import { Product } from '../../Products/Models/ProductsModel';
import { Menu, ShoppingCart, X } from 'lucide-react';
import logo from '../../assets/images/tiktok-profile.png'

type Props = {
    onShowCheckout: () => void;
    cart: Product[];
    toggleMenuOpen: () => void;
    isMenuOpen: boolean;
};

const HeaderView = ({onShowCheckout, cart, toggleMenuOpen, isMenuOpen}: Props) => {
    return (
        <div className="font-sans" dir="rtl">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md">
            
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                    src={logo}
                    alt="לוגו"
                    className="w-20 rounded-full shadow-2xl object-cover ml-4"
                    />
                <div className="text-2xl font-bold text-white">Yoni Golfor - El Technique</div>
                </div>
                {/* <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-white hover:text-green-400 transition">בית</a>
                    <a href="#" className="text-white hover:text-green-400 transition">מוצרים</a>
                    <a href="#" className="text-white hover:text-green-400 transition">אודות</a>
                    <a href="#" className="text-white hover:text-green-400 transition">צור קשר</a>
                </nav> */}
                <div className="flex items-center gap-4">
                    <button 
                    onClick={onShowCheckout}
                    className="relative"
                    >
                    <ShoppingCart className="w-6 h-6 text-white hover:text-green-400 transition" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                        {cart.length}
                        </span>
                    )}
                    </button>
                    <button 
                    className="md:hidden text-white"
                    // onClick={() => setIsMenuOpen(!isMenuOpen)}
                    onClick={toggleMenuOpen}
                    >
                    {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </header>
        </div>
      )
    }

    export default HeaderView;