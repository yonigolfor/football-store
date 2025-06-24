import { motion } from "framer-motion";
import { Users, Eye, Heart, Share2, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1K+",
    label: "TikTok Followers",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Eye,
    value: "100K+",
    label: "Total Views",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Heart,
    value: "50K+",
    label: "Likes Received",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Share2,
    value: "5K+",
    label: "Video Shares",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: TrendingUp,
    value: "200%",
    label: "Monthly Growth",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/10"
  },
  {
    icon: Award,
    value: "#1",
    label: "El Technique",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Yoni's TikTok Success
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join the growing El Technique community and see why thousands trust Yoni's training methods
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative ${stat.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300`}
            >
              <div className="text-center space-y-3">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}