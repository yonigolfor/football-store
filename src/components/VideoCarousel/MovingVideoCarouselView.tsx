import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type CardData = {
  id: number;
  label: string;
  videoSrc: string
};

const getLoopedIndex = (index: number, length: number) => {
  return (index + length) % length;
};


const Card: React.FC<{ label: string; position: 'left' | 'center' | 'right', centerVideoRef?: React.RefObject<HTMLVideoElement | null>, videoSrc: string, onVideoEnd?: () => void  }> = ({ label, position, centerVideoRef, videoSrc, onVideoEnd }) => {

  const config = {
    left: { scale: 0.7, x: -200, zIndex: 1, rotateY: -30 },
    center: { scale: 1, x: 0, zIndex: 2, rotateY: 0 },
    right: { scale: 0.7, x: 200, zIndex: 1, rotateY: 30 },
  }[position];

 

  useEffect(() => {
    if (centerVideoRef?.current){
      centerVideoRef.current.play()
    }
  },[centerVideoRef])




  return (
    <div className='flex items-center justify-center' style={{ perspective: '1000px' }}>
    <motion.div
      className="absolute rounded-2xl shadow-lg text-white font-bold overflow-hidden bg-red-200"
      style={{
        width: 240,
        height: 320,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity: position !== "center" ? 0.6 : 1,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: config.scale,
        x: config.x,
        zIndex: config.zIndex,
        rotateY: config.rotateY, // הוסף rotateY כאן

      }}
      transition={{ duration: 0.6 }}
    >
      <video
            ref={centerVideoRef}
            src={videoSrc}
            className="w-full h-96 object-cover "
            onEnded={() => {
              if (onVideoEnd !== undefined) {onVideoEnd()}
              if (centerVideoRef && centerVideoRef.current){
                const video = centerVideoRef.current
                video.currentTime = 0
              }
            }
          }
            controls={false}
            // playsInline
            muted={true}
            autoPlay={position === 'center'}
          />
    </motion.div>
    </div>
  );
};

const MovingCarouselView: React.FC = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const video1 = require('../../assets/tiktok-videos/video1.mp4')
  const video2 = require('../../assets/tiktok-videos/video2.mp4')
  const videos = [video1, video2, video2]

  const videosData: CardData[] = videos.map((video, index) => ({
    id: index,
    label: `card ${index + 1}`,
    videoSrc: video,
  }));

  const leftIndex = getLoopedIndex(centerIndex - 1, videos.length);
  const rightIndex = getLoopedIndex(centerIndex + 1, videos.length);
  const centerVideoRef = useRef<HTMLVideoElement>(null)

  

  const handleVideoEnded = () => {
    if (centerIndex < videos.length - 1) {
      setCenterIndex(prev => prev + 1);
    } else {
      setCenterIndex(0); // חזרה לסרטון הראשון
    }
  };

  return (
    <div className='h-screen mx-auto p-6  shadow-2xl overflow-hidden'>
      <div className="flex items-center justify-center h-full">
        <Card
          key={videosData[leftIndex].id}
          label={videosData[leftIndex].label}
          position="left"
          videoSrc={videosData[leftIndex].videoSrc}
        />
        <Card
          key={videosData[centerIndex].id}
          label={videosData[centerIndex].label}
          position="center"
          videoSrc={videosData[centerIndex].videoSrc}
          onVideoEnd = {handleVideoEnded}
          centerVideoRef={centerVideoRef}
        />
        <Card
          key={videosData[rightIndex].id}
          label={videosData[rightIndex].label}
          position="right"
          videoSrc={videosData[rightIndex].videoSrc}
        />
      </div>
    </div>
  );
};

export default MovingCarouselView;
