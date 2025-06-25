import { motion } from "framer-motion";
import { ShoppingCart, Star, Zap, Award, TrendingUp } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeaturedProducts({ products, onAddToCart, isLoading }) {
  const clickSound = new Audio('/sounds/add-sound2.wav');
  clickSound.preload = 'auto'; 

  const playPickProductSound = () => {
    clickSound.play().catch((e) => {
      console.error("Audio play error", e);
    })
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-800/50 rounded-2xl p-6">
              <Skeleton className="aspect-square mb-4 rounded-xl" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Zap className="w-6 h-6 text-yellow-400" />
          <span className="text-yellow-400 font-semibold">El Technique Collection</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Yoni's Signature Products
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Handpicked training gear and exclusive content to master El Technique
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>Yoni's Pick</span>
              </div>
            </div>

            <div className="aspect-square bg-slate-700/50 rounded-xl mb-6 overflow-hidden">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <Award className="w-16 h-16 mx-auto mb-3" />
                    <span className="text-sm">El Technique Product</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">Bestseller</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">
                    ${product.price}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-slate-400 text-sm ml-1">(4.9)</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    onAddToCart(product)
                    playPickProductSound()
                  }
                }
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-500 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}