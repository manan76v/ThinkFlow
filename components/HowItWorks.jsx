import React from 'react';
import { MessageSquare, Cpu, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Describe",
      subtitle: "Your Vision",
      description: "Simply tell ThinkFlow what you want to accomplish in natural language"
    },
    {
      icon: Cpu,
      title: "AI Processes",
      subtitle: "Intelligently",
      description: "Our advanced AI analyzes your request and generates tailored solutions"
    },
    {
      icon: Sparkles,
      title: "Get Results",
      subtitle: "Instantly",
      description: "Receive organized, actionable outputs ready to implement immediately"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-cyan-400 font-semibold text-sm">HOW IT WORKS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Three Steps to
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Genius
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
      
          <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-cyan-400/50 to-purple-400/50 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative group text-center">
              <div className="relative mb-8">
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
            
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-12 h-12 text-cyan-400" />
                </div>
                
                
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-cyan-400 font-semibold mb-4">{step.subtitle}</p>
              <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}