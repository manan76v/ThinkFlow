import React, { useState } from 'react';
import { Brain, Twitter, Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get exclusive AI productivity tips, feature updates, and early access to new tools.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Subscribe
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 max-w-lg mx-auto">
                <p className="text-green-400 font-semibold">🎉 Thanks for subscribing!</p>
                <p className="text-gray-300 text-sm mt-1">Check your inbox for a welcome message.</p>
              </div>
            )}
          </div>
        </div>
      </div>

  
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="ml-4 text-2xl font-bold">ThinkFlow</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mb-8">
              Your AI-powered second brain that transforms ideas into action. 
              Join thousands of creators, entrepreneurs, and professionals who think smarter and work faster.
            </p>
            
            
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'API Docs', 'Changelog', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact', 'Privacy', 'Terms', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 ThinkFlow. All rights reserved. Made with ❤️ for the future of productivity.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm mr-2">Powered by</span>
            <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Advanced AI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}