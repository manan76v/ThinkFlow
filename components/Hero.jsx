import React, { useState } from 'react';
import { Brain, Play, ArrowRight, X, Sparkles, Users, Zap } from 'lucide-react';
import DemoModal from './DemoModal';
import SignupModal from './SignupModal';

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="flex items-center justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 p-4 rounded-2xl">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <span className="ml-4 text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              ThinkFlow
            </span>
          </div>

          
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="block text-white">Think</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Smarter
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1 max-w-32"></div>
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1 max-w-32"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Your AI-powered second brain that transforms ideas into action.
            <br />
            <span className="text-cyan-400 font-medium">Generate • Organize • Execute</span>
          </p>

          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => setShowSignup(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative flex items-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => setShowDemo(true)}
              className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              <span className="flex items-center">
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </span>
            </button>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                number: "50K+", 
                label: "Creators", 
                icon: <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              },
              { 
                number: "2M+", 
                label: "Ideas Generated", 
                icon: <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              },
              { 
                number: "99.9%", 
                label: "Uptime", 
                icon: <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              }
            ].map((stat, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="mb-4 inline-block">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
}