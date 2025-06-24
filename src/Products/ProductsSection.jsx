import { motion } from "framer-motion";
import { Award, ShoppingCart } from "lucide-react";

 export default function ProductsSection({ products, addToCart }) {
    return <section className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Complete Collection</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Everything you need to master El Technique
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                    <div className="aspect-square bg-slate-700/50 rounded-xl mb-4 flex items-center justify-center">
                    {product.image ? (
                        <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <div className="text-slate-400 text-center">
                      <Award className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-sm">Product Image</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <span className="text-sm px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-sm line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">${product.price}</span>
                    <button
                      onClick={() => {
                        addToCart(product)
                        // console.log(product.image)
                    
                    }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg hover:from-blue-600 hover:to-green-500 transition-all duration-200 flex items-center space-x-2"
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
      </section>
 }