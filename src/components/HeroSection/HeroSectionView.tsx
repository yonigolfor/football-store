import logo from '../../assets/images/tiktok-profile.png'

type HeroSectionProps = {
    onShowCheckout: () => void;
};

const HeroSectionView = ({onShowCheckout}: HeroSectionProps) => (
    <div className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-emerald-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo placeholder - שחקן בלי חולצה עם מכנס אדום */}
        <img
          src={logo}
          alt="לוגו"
          className="w-48 h-48 mb-8 rounded-full shadow-2xl animate-bounce object-cover"
        />
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            העתיד
          </span>
          <br />
          של הכדורגל
        </h1>
        
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl">
          הצטרף למהפכה! ציוד כדורגל מהעתיד שיעזור לך להגיע לרמה הבאה
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button 
            onClick={onShowCheckout}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full text-lg hover:scale-105 transform transition-all duration-300 shadow-xl"
          >
            🛒 קנה עכשיו
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
            ▶️ צפה בסרטונים
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400">1M+</div>
            <div className="text-white">צפיות</div>
          </div>
          <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400">50K+</div>
            <div className="text-white">עוקבים</div>
          </div>
          <div className="bg-black bg-opacity-30 p-4 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-400">1000+</div>
            <div className="text-white">לקוחות מרוצים</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </div>
  );

  export default HeroSectionView