import { motion } from "framer-motion";
import { Users, Eye, Star, TrendingUp, Zap } from "lucide-react";

export default function HeroSection({ scrollTo }) {
  return (
    <section className="relative pt-20 pb-16 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20" />
      <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center flex-wrap gap-3"
              >
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30">
                  <span className="text-blue-300 text-sm sm:text-base font-medium">TikTok Football Creator</span>
                </div>
                <div className="flex items-center space-x-1 text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Viral</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Master
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent block">
                  El Technique
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
              >
                From viral TikTok skills to professional training. Join Yoni Golfor and learn the techniques that make champions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => {scrollTo("Shop")}}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-green-500 transition-all duration-300 text-center flex items-center justify-center space-x-2"
              >
                <span>Shop El Technique</span>
                <Zap className="w-5 h-5" />
              </button>
              <button
                onClick={() => {scrollTo("MyStory")}}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 text-center"
              >
                <span>My Story</span>
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">1K+</span>
                <span className="text-slate-300">Followers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">100K+</span>
                <span className="text-slate-300">Views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">4.9</span>
                <span className="text-slate-300">Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cf58e9c3c_tiktok-profile.png" 
                  alt="Yoni Golfor - El Technique"
                  className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-blue-500 to-green-400 shadow-2xl"
                />

                {/* Floating Stats */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">TikTok Creator</span>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">100K+ Views</span>
                  </div>
                </div>

                <div className="hidden sm:flex absolute top-1/2 -right-8 bg-slate-900/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">1K+</div>
                    <div className="text-slate-300 text-sm">Followers</div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
