import React, { useEffect } from 'react';
import { X, Play, Pause, Volume2 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
     
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      
      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">ThinkFlow Demo</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        
        <div className="relative bg-gray-900 rounded-2xl aspect-video mb-6 overflow-hidden">
        
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay={isPlaying}
            poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&dpr=2"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h4 className="text-white font-bold text-lg mb-2">ThinkFlow Complete Walkthrough</h4>
            <p className="text-gray-300 text-sm">Learn how to maximize your productivity with AI-powered workflows</p>
          </div>
        </div>

        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Video Chapters</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { time: "0:00", title: "Getting Started", desc: "Account setup and onboarding" },
              { time: "1:30", title: "AI Brainstorming", desc: "Generate ideas with AI prompts" },
              { time: "3:15", title: "Task Management", desc: "Organize and prioritize work" },
              { time: "4:45", title: "Content Creation", desc: "Write with AI assistance" }
            ].map((chapter, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <span className="text-cyan-400 font-mono text-sm mr-3">{chapter.time}</span>
                  <div>
                    <h5 className="text-white font-medium text-sm">{chapter.title}</h5>
                    <p className="text-gray-400 text-xs">{chapter.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-4">
          <h4 className="text-white font-semibold mb-2">More Resources</h4>
          <div className="flex flex-wrap gap-2">
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg text-sm transition-colors">
              📚 Documentation
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg text-sm transition-colors">
              🎯 Tutorials
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg text-sm transition-colors">
              💬 Community
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg text-sm transition-colors">
              🚀 Get Started
            </button>
            </div>
          </div>

      
          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              
              <div className="flex-1 bg-white/20 rounded-full h-1">
                <div className="bg-cyan-400 h-1 rounded-full w-1/3"></div>
              </div>
              
              <Volume2 className="w-5 h-5 text-white" />
              <span className="text-white text-sm">2:34 / 7:42</span>
            </div>
          </div>
        </div>
      </div>
  );
}