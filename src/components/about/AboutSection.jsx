// import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  TrendingUp,
  Play,
//   Instagram
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">About Yoni Golfor</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white leading-tight">
                From Street Football to
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {" "}TikTok Stardom
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm Yoni Golfor, creator of "El Technique" - a unique approach to football mastery 
                that combines street skills with professional training. With over 100K views on 
                my viral TikTok content and a growing community of 1000+ dedicated followers, 
                I'm passionate about sharing the techniques that transformed my game.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">El Technique</div>
                    <div className="text-slate-400 text-sm">Signature Style</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Premium Training</div>
                    <div className="text-slate-400 text-sm">Expert Methods</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Community</div>
                    <div className="text-slate-400 text-sm">1000+ Athletes</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Passion</div>
                    <div className="text-slate-400 text-sm">Football Life</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* <a
                href="#"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              > */}
                <Play className="w-5 h-5" />
                <span>@yonigolfor</span>
              {/* </a> */}
              {/* <a
                href="#"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@yoni_eltechnique</span>
              </a> */}
            </div>
          </motion.div>

          {/* Right Content - Profile/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              {/* Profile Image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-gradient-to-r from-blue-500 to-green-400">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cf58e9c3c_tiktok-profile.png" 
                  alt="Yoni Golfor - El Technique"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Yoni Golfor</h3>
                <p className="text-green-400 font-semibold">El Technique Master</p>
                <p className="text-slate-300 text-sm mt-1">TikTok Football Creator</p>
              </div>
              
              {/* Achievement Cards */}
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Viral Videos</div>
                      <div className="text-slate-400 text-sm">Total Views</div>
                    </div>
                  </div>
                  <div className="text-blue-400 font-bold">100K+</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">TikTok Family</div>
                      <div className="text-slate-400 text-sm">Growing Daily</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">1K+</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">El Technique</div>
                      <div className="text-slate-400 text-sm">Students Trained</div>
                    </div>
                  </div>
                  <div className="text-purple-400 font-bold">500+</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}