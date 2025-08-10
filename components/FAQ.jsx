import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does ThinkFlow's AI actually work?",
      answer: "ThinkFlow uses advanced natural language processing and machine learning models trained on productivity patterns. Our AI understands context, learns from your preferences, and provides intelligent suggestions tailored to your workflow and goals."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption, zero-knowledge architecture, and never store or share your personal information. All data processing happens securely in isolated environments, and you maintain complete control over your content."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! ThinkFlow seamlessly integrates with 50+ popular tools including Slack, Notion, Google Workspace, Trello, Asana, and many more. Our API also enables custom integrations for enterprise users."
    },
    {
      question: "What makes ThinkFlow different from other AI tools?",
      answer: "ThinkFlow is specifically designed for productivity and creative workflows. Unlike generic AI tools, we understand the context of your work, learn your patterns, and provide actionable outputs that fit directly into your existing processes."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up for a free account and start with our guided onboarding. You'll be creating AI-powered content and organizing tasks within minutes. No technical setup required."
    },
    {
      question: "Can I cancel or change my plan anytime?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. There are no long-term commitments, hidden fees, or cancellation penalties."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-600 font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Got
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-bold text-gray-900 pr-8">{faq.question}</h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white rotate-180' 
                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}