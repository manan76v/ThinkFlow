import React from 'react';
import { Brain, Zap, PenTool, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Brainstorming",
      description: "Transform scattered thoughts into structured ideas with intelligent prompts and creative suggestions",
      color: "from-purple-500 to-pink-500",
      delay: "0"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automatically organize tasks, set priorities, and create workflows that adapt to your style",
      color: "from-cyan-500 to-blue-500",
      delay: "200"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Generate compelling content, emails, and documents with context-aware AI writing assistance",
      color: "from-orange-500 to-red-500",
      delay: "400"
    }
  ];

  const handleLearnMore = (featureTitle) => {
   
    const demoSection = document.querySelector('[data-section="demo"]');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-600 font-semibold text-sm">FEATURES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Supercharge Your
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Productivity
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful AI tools designed to amplify your creativity and streamline your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                <button 
                  onClick={() => handleLearnMore(feature.title)}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}