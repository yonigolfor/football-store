import { Product } from './Models/ProductsModel';
import { ShoppingCart, Zap} from 'lucide-react';
// import logo from '../assets/images/tiktok-profile.png'

type Props = {
    products: Product[];
    addToCart: (product: Product) => void;
};

const ProductsSectionView = ({ products, addToCart }: Props) => {
  const clickSound = new Audio('/sounds/add-sound2.wav');
  clickSound.preload = 'auto'; 
  
  function stringIsImage(value: string): boolean {
    return value.endsWith('.png')
  }

  const playPickProductSound = () => {
    clickSound.play().catch((e) => {
      console.error("Audio play error", e);
    })
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-600 to-black py-20">
      <div className="container mx-auto px-4">
      
        <h2 className="text-5xl font-black text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            מוצרים באיכות הטובה ביותר
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-6 hover:scale-105 transform transition-all duration-500 shadow-2xl border border-gray-700 hover:border-green-400"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
              <div className="mb-4 text-center">

              {stringIsImage(product.image) ? (
                <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-32 w-auto object-contain"
              />
              ) : (
                <div className="text-6xl">{product.image}</div>
              )}
              </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                
                <div className="mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-green-400 text-xs mb-1">
                      <Zap className="w-3 h-3 mr-1" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">₪{product.price}</span>
                  <button
                    onClick={() => {
                      addToCart(product)
                      if (navigator.vibrate) { // generate light haptic feedback
                      navigator.vibrate(90)
                    }
                    playPickProductSound()
                    }}
                    // className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold hover:scale-110 transform transition-all duration-300 flex items-center gap-2"
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200 flex items-center space-x-2"

                  >
                    <ShoppingCart className="w-4 h-4" />
                    - הוסף
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  export default ProductsSectionView