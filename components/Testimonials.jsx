import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      company: "Figma",
      content: "ThinkFlow has completely transformed my creative process. The AI suggestions are incredibly intuitive and help me break through creative blocks instantly.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      company: "TechVenture",
      content: "As a busy entrepreneur, ThinkFlow is like having a brilliant assistant who never sleeps. It helps me organize thoughts and execute ideas faster than ever.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Content Creator",
      company: "YouTube",
      content: "The content generation features are mind-blowing. ThinkFlow understands my voice and helps me create engaging content that resonates with my audience.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-600 font-semibold text-sm">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Creators
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who've transformed their productivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-3 rounded-2xl">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              
              <div className="flex mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}