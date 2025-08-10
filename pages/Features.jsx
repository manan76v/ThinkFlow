import React, { useState } from 'react';
import { Brain, Zap, PenTool, Calendar, MessageSquare, BarChart3, Puzzle, Shield, Play } from 'lucide-react';
import Footer from '../components/Footer';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI Brainstorming",
      description: "Transform scattered thoughts into structured ideas with intelligent prompts and creative suggestions",
      color: "from-purple-500 to-pink-500",
      details: [
        "Context-aware idea generation",
        "Creative prompt suggestions",
        "Mind mapping automation",
        "Concept clustering"
      ]
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automatically organize tasks, set priorities, and create workflows that adapt to your style",
      color: "from-cyan-500 to-blue-500",
      details: [
        "Intelligent task prioritization",
        "Workflow automation",
        "Smart scheduling",
        "Progress tracking"
      ]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Generate compelling content, emails, and documents with context-aware AI writing assistance",
      color: "from-orange-500 to-red-500",
      details: [
        "AI writing assistant",
        "Template generation",
        "Style adaptation",
        "Multi-format export"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "AI-powered scheduling that learns your preferences and optimizes your time",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "Team Collaboration",
      description: "Real-time collaboration with AI-enhanced communication and project management",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Deep insights into your productivity patterns and AI-generated recommendations",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Puzzle,
      title: "50+ Integrations",
      description: "Connect with your favorite tools and platforms for seamless workflow integration",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC2, GDPR, and enterprise standards",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <>
    <div className="pt-16">
      
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-8">
            Powerful
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of AI-powered tools designed to supercharge your productivity and creativity.
          </p>
        </div>
      </section>

      
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Core
              <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
            <div className="space-y-6">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer p-6 rounded-3xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white shadow-2xl border-2 border-purple-200'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      {activeFeature === index && (
                        <ul className="mt-4 space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900">{mainFeatures[activeFeature].title} Demo</h4>
                      <button className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-xl">
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full w-1/2 animate-pulse animation-delay-1000"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full w-5/6 animate-pulse animation-delay-2000"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    Interactive demo coming soon - experience {mainFeatures[activeFeature].title} in action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Advanced
              <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Tools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for professionals, teams, and enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Feature
              <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Comparison
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-50 to-cyan-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['AI Brainstorming', '10/day', 'Unlimited', 'Unlimited'],
                    ['Task Management', 'Basic', 'Advanced', 'Enterprise'],
                    ['Content Creation', '5/day', 'Unlimited', 'Unlimited'],
                    ['Team Collaboration', '❌', '✅', '✅'],
                    ['Analytics Dashboard', '❌', '✅', '✅'],
                    ['Custom Integrations', '❌', '❌', '✅'],
                    ['Priority Support', '❌', '✅', '✅'],
                    ['SSO & Security', '❌', '❌', '✅']
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row[0]}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row[1]}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row[2]}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}