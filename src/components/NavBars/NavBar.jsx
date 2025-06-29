import { 
  ShoppingCart, 
} from "lucide-react";

export default function NavBar({setIsCartOpen, cartItems, scrollTo}) {

    const getCartItemCount = () => {
      return Object.values(cartItems).reduce((count, item) => count + item.quantity, 0);
    };

      return <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cf58e9c3c_tiktok-profile.png" 
                alt="Yoni Golfor - El Technique"
                className="w-10 h-10 rounded-full border-2 border-gradient-to-r from-blue-500 to-green-400"
              />
              <div>
                <span className="text-lg font-bold text-white">Yoni Golfor</span>
                <div className="text-xs text-green-400 font-medium">El Technique</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
              onClick={()=>{scrollTo("Shop")}}
              className="text-slate-300 hover:text-white transition-colors font-medium">
                Shop
              </button>
              <button 
              onClick={()=>{scrollTo("MyStory")}}
              className="text-slate-300 hover:text-white transition-colors font-medium">
                About
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-300 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
  }