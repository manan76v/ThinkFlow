import React from 'react';
import { Brain, Users, Target, Award, Zap, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '2M+', label: 'Ideas Generated', icon: Brain },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '150+', label: 'Countries', icon: Globe }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Former AI researcher at Google with 10+ years in machine learning'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Ex-Tesla engineer specializing in AI systems and scalable architecture'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Product leader from Notion with expertise in productivity tools'
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Design director from Figma, passionate about user-centered design'
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
            About
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ThinkFlow
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to amplify human creativity and productivity through intelligent AI assistance.
            Founded in 2023, we believe everyone deserves a second brain that thinks as fast as they do.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-8">
                Our
                <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                In a world overflowing with information, we believe creativity shouldn't be limited by 
                the ability to organize thoughts or manage tasks. ThinkFlow was born from the frustration 
                of brilliant minds being held back by mundane processes.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're building the future of human-AI collaboration, where artificial intelligence 
                amplifies your natural creativity rather than replacing it.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
                
                
                <div className="mb-6">
                  <video
                    className="w-full h-48 object-cover rounded-2xl"
                    poster="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                    controls
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="relative">
                  <Target className="w-16 h-16 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision 2030</h3>
                  <p className="text-gray-700">
                    To become the world's most trusted AI productivity platform, 
                    empowering 100 million creators to think bigger and achieve more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Meet Our
              <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate innovators from top tech companies, united by a shared vision 
              of making AI accessible and empowering for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-cyan-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Human-Centric AI',
                description: 'Technology should amplify human potential, not replace it. We build AI that works with you, not for you.',
                icon: Brain
              },
              {
                title: 'Privacy First',
                description: 'Your thoughts and ideas are sacred. We use zero-knowledge architecture to keep your data completely private.',
                icon: Target
              },
              {
                title: 'Continuous Innovation',
                description: 'We never stop improving. Every day brings new features, optimizations, and capabilities to serve you better.',
                icon: Zap
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}

import Footer from '../components/Footer';