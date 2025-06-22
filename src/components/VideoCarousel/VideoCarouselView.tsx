import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../../assets/images/tiktok-profile.png'

// Snow Effect Component
const SnowEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animation: `snowfall ${5 + Math.random() * 10}s linear infinite`
          }}
        />
      ))}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) translateX(0px);
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 200 - 100}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

interface VideoCarouselProps {
  videos?: string[];
  backgroundMusic?: string;
  autoPlayVideos?: boolean;
}

const VideoCarouselView: React.FC<VideoCarouselProps> = ({
    // vid1 = require('../../assets/tiktok-videos/video1.mp4');
  backgroundMusic = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // placeholder - החלף בשיר Timber
  autoPlayVideos = true
}) => {
const videos = [
    require('../../assets/tiktok-videos/video1.mp4'),
    require('../../assets/tiktok-videos/video2.mp4'),
    // 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    // 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    // 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  ]
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-start everything when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && audioRef.current) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);

        // audioRef.current.play().then(() => {
        //     console.log("Here")
        //   setIsMusicPlaying(true);
        // }).catch(console.error);
      }
    }, 500); // Small delay to ensure elements are loaded

    return () => clearTimeout(timer);
  }, []);

  // Handle video changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (autoPlayVideos && isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(console.error);
        }
      }
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    } else {
      setCurrentVideoIndex(0); // חזרה לסרטון הראשון
    }
    setTimeout(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(console.error);
        }
    }, 100);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsMusicPlaying(true);
        }).catch(console.error);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current && audioRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const goToPrevious = (e: React.MouseEvent) => {
    const wasPlaying = isPlaying;
    e.stopPropagation();
    setCurrentVideoIndex(prev => 
      prev === 0 ? videos.length - 1 : prev - 1
    );
    if (wasPlaying) {
        setTimeout(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(console.error);
        }
        }, 100);
    };
    }

  const goToNext = (e: React.MouseEvent) => {
    const wasPlaying = isPlaying;

    e.stopPropagation();
    setCurrentVideoIndex(prev => 
      prev === videos.length - 1 ? 0 : prev + 1
    );
    if (wasPlaying) {
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(console.error);
            }
        }, 100);
    }
  };

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index);
    const wasPlaying = isPlaying;
    if (wasPlaying) {
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(console.error);
            }
        }, 100);
    }
  };

  return (
    <div className="relative w-full  mx-auto p-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
      {/* Snow Effect Background */}
      <SnowEffect />
      
      <div className="relative z-10 mt-40">
        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
          <video
            ref={videoRef}
            src={videos[currentVideoIndex]}
            className="w-full h-96 object-fit"
            onEnded={handleVideoEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls={false}
            playsInline
            muted={false}
          />
          
          {/* Navigation Arrows */}
          {/* <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-20"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-20"
          >
            <ChevronRight size={24} />
          </button> */}

          {/* Play/Pause Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300">
            <button
              onClick={togglePlayPause}
              className="opacity-0 hover:opacity-100 bg-white bg-opacity-20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-200 hover:scale-110"
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
          </div> */}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={togglePlayPause}
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button
            onClick={toggleMusic}
            className={`${
              isMusicPlaying ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
            } text-white p-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg`}
          >
            <Volume2 size={20} />
          </button>
{/*           
          <button
            onClick={toggleMute}
            className={`${
              isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white p-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg`}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button> */}
        </div>

        {/* Video Indicators */}
        <div className="flex justify-center gap-2 mb-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToVideo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentVideoIndex
                  ? 'bg-purple-500 scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Instructions */}
        {/* <div className="text-center text-gray-300 text-sm">
          <p>השתמש בחצים או בנקודות למעבר בין סרטונים</p>
          <p className="mt-1">הסרטונים יתנגנו אוטומטית אחד אחרי השני</p>
        </div> */}
      </div>

      {/* Hidden Audio Element for Background Music */}
      {/* <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="auto"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
        muted={!isMusicPlaying}
        // muted={false}
      /> */}
    </div>
  );
};

export default VideoCarouselView;