import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import Footer from '../components/Footer';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Technology', 'Productivity', 'Tutorials', 'Company News'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Productivity: 5 Trends to Watch in 2025",
      excerpt: "Discover how artificial intelligence is reshaping the way we work, think, and create. From automated workflows to intelligent content generation...",
      author: "Sarah Chen",
      date: "Jan 15, 2025",
      category: "AI & Technology",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "How to Build a Second Brain with AI: A Complete Guide",
      excerpt: "Learn the methodology behind creating your digital second brain using AI tools. This comprehensive guide covers everything from setup to optimization...",
      author: "Marcus Rodriguez",
      date: "Jan 12, 2025",
      category: "Tutorials",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      readTime: "12 min read",
      featured: false
    },
    {
      id: 3,
      title: "Announcing ThinkFlow 2.0: Enhanced AI Capabilities",
      excerpt: "We're excited to announce the launch of ThinkFlow 2.0 with improved AI models, faster processing, and new collaboration features...",
      author: "Emily Johnson",
      date: "Jan 10, 2025",
      category: "Company News",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 4,
      title: "10 Productivity Hacks That Actually Work in 2025",
      excerpt: "Cut through the noise with these science-backed productivity techniques that complement AI tools perfectly. Boost your efficiency today...",
      author: "David Kim",
      date: "Jan 8, 2025",
      category: "Productivity",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of Creative Blocks and How AI Can Help",
      excerpt: "Understanding the mental barriers that prevent creative flow and how intelligent AI assistance can help you break through them...",
      author: "Sarah Chen",
      date: "Jan 5, 2025",
      category: "AI & Technology",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "Building Better Workflows: Integration Best Practices",
      excerpt: "Learn how to seamlessly integrate ThinkFlow with your existing tools and create workflows that actually save time...",
      author: "Marcus Rodriguez",
      date: "Jan 3, 2025",
      category: "Tutorials",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
      readTime: "11 min read",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            ThinkFlow
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Insights, tutorials, and updates from the world of AI-powered productivity
          </p>

         
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{featuredPost.author}</span>
                      <Calendar className="w-5 h-5 text-gray-400 ml-4" />
                      <span className="text-gray-600">{featuredPost.date}</span>
                    </div>
                    <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      <Tag className="w-3 h-3 inline mr-1" />
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights on AI, productivity, and innovation delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </>
  );
}