import React, { useState } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import SignupModal from './SignupModal';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: isAnnual ? "$0" : "$0",
      period: "forever",
      description: "Perfect for exploring AI productivity",
      features: [
        "10 AI prompts per day",
        "Basic task management",
        "Simple content generation",
        "Email support",
        "Mobile app access",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      icon: Crown,
      price: isAnnual ? "$16" : "$19",
      period: "per month",
      description: "For professionals and power users",
      features: [
        "Unlimited AI prompts",
        "Advanced automation",
        "Premium templates",
        "Priority support",
        "Team collaboration",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: true,
      color: "from-purple-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: isAnnual ? "$79" : "$99",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Custom AI training",
        "SSO integration",
        "Advanced security",
        "Dedicated support",
        "Custom deployment"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
       
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <span className="text-cyan-400 font-semibold text-sm">PRICING</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Power Level
              </span>
            </h2>
            
    
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-gray-600'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative group ${
                plan.popular 
                  ? 'bg-white/10 backdrop-blur-xl border-2 border-cyan-400/50 scale-105' 
                  : 'bg-white/5 backdrop-blur-xl border border-white/10'
              } rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:bg-white/15`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`bg-gradient-to-r ${plan.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setShowSignup(true)}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 shadow-lg hover:shadow-cyan-500/25'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
}