import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Lock, User, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
   
    setTimeout(() => {
      setIsLoading(false);
      
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const passwordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = passwordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative flex gap-8 items-center max-w-5xl w-full">
        {/* Left side - Logo and Welcome */}
        <div className="flex-1 hidden lg:block mt-[-270px]">
          <div className="flex flex-col items-start space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient-xy"></div>
              <div className="relative bg-black/30 backdrop-blur-xl border-2 border-white/20 p-6 rounded-3xl transform group-hover:scale-105 transition duration-500">
                <Brain className="w-16 h-16 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-300% animate-gradient-x mb-4">
                ThinkFlow
              </h1>
              <h2 className="text-5xl font-black text-white mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">Start your journey</h2>
              <p className="text-xl text-gray-300 font-light max-w-md">Join thousands of productive creators and transform your ideas into reality</p>
            </div>
          </div>
        </div>
        
        
        <div className="lg:hidden text-center w-full mb-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient-xy"></div>
              <div className="relative bg-black/30 backdrop-blur-xl border-2 border-white/20 p-5 rounded-3xl transform group-hover:scale-105 transition duration-500">
                <Brain className="w-12 h-12 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-300% animate-gradient-x">ThinkFlow</h1>
              <h2 className="text-3xl font-black text-white mt-2">Create your account</h2>
            </div>
          </div>
        </div>

       
        <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md mt-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              
              {formData.password && (
                <div className="mt-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          strength >= level
                            ? strength === 1
                              ? 'bg-red-500'
                              : strength === 2
                              ? 'bg-yellow-500'
                              : strength === 3
                              ? 'bg-blue-500'
                              : 'bg-green-500'
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {strength === 0 && 'Very weak'}
                    {strength === 1 && 'Weak'}
                    {strength === 2 && 'Fair'}
                    {strength === 3 && 'Good'}
                    {strength === 4 && 'Strong'}
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 text-cyan-600 bg-white/10 border-white/20 rounded focus:ring-cyan-500 focus:ring-2"
                />
              </div>
              <div className="ml-3 text-sm">
                <p className="text-gray-300">
                  I agree to the{' '}
                  <Link to="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !acceptTerms || formData.password !== formData.confirmPassword}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          
          <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-2xl">
            <h3 className="text-white font-semibold mb-3">What you'll get:</h3>
            <ul className="space-y-2">
              {[
                'Unlimited AI brainstorming sessions',
                'Smart task management',
                'Content creation tools',
                'Priority email support'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}