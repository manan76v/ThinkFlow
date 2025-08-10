import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import DemoModal from './DemoModal';

export default function Demo() {
  const [showDemo, setShowDemo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = document.getElementById('demo-video');
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See ThinkFlow in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how our AI transforms your workflow in real-time
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
              <div className="bg-gray-900 rounded-2xl aspect-video relative overflow-hidden group">
                {/* Real Demo Video */}
                <video
                  id="demo-video"
                  className="w-full h-full object-cover"
                  poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&dpr=2"
                  preload="metadata"
                  onClick={handleVideoClick}
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay Controls */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={handleVideoClick}
                    className="group/btn relative z-10 bg-white/20 backdrop-blur-sm border border-white/30 w-20 h-20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold mb-1">ThinkFlow AI Demo</h3>
                  <p className="text-gray-300 text-sm">See how AI transforms your productivity workflow</p>
                </div>

                {/* Alternative: Click to open modal */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setShowDemo(true)}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-xl text-white text-sm hover:bg-white/30 transition-colors"
                  >
                    Full Screen
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                
                {/* Mock interface elements */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </>
  );
}