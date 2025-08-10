import React, { useState } from 'react';
import { Brain, Plus, Search, Filter, BarChart3, Calendar, CheckCircle, Clock, Star, Zap } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Ideas Generated', value: '247', change: '+12%', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { label: 'Tasks Completed', value: '89', change: '+8%', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'Content Created', value: '34', change: '+23%', icon: Star, color: 'from-blue-500 to-cyan-500' },
    { label: 'Time Saved', value: '12h', change: '+15%', icon: Clock, color: 'from-orange-500 to-red-500' }
  ];

  const recentActivities = [
    { type: 'idea', title: 'Marketing Campaign Ideas', time: '2 hours ago', status: 'completed' },
    { type: 'task', title: 'Weekly Report Draft', time: '4 hours ago', status: 'in-progress' },
    { type: 'content', title: 'Blog Post: AI Trends', time: '1 day ago', status: 'completed' },
    { type: 'idea', title: 'Product Feature Brainstorm', time: '2 days ago', status: 'completed' }
  ];

  const quickActions = [
    { title: 'Generate Ideas', description: 'Brainstorm new concepts', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { title: 'Create Content', description: 'Write articles, emails, docs', icon: Star, color: 'from-blue-500 to-cyan-500' },
    { title: 'Organize Tasks', description: 'Plan and prioritize work', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { title: 'Analyze Data', description: 'Get insights and reports', icon: BarChart3, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-white">
  
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Manan!</h1>
              <p className="text-gray-600 mt-1">Here's what's happening with your productivity today.</p>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              New Project
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button key={index} className="group p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 text-left">
                    <div className={`bg-gradient-to-r ${action.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                  </button>
                ))}
              </div>
            </div>

            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
                <div className="flex items-center space-x-3">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Search className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Q1 Marketing Strategy', progress: 85, status: 'In Progress', color: 'bg-blue-500' },
                  { name: 'Product Launch Plan', progress: 60, status: 'In Progress', color: 'bg-purple-500' },
                  { name: 'Content Calendar', progress: 100, status: 'Completed', color: 'bg-green-500' },
                  { name: 'User Research Analysis', progress: 30, status: 'Planning', color: 'bg-orange-500' }
                ].map((project, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`${project.color} h-2 rounded-full transition-all duration-300`} style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{project.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="space-y-8">
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'idea' ? 'bg-purple-100' :
                      activity.type === 'task' ? 'bg-green-100' :
                      'bg-blue-100'
                    }`}>
                      {activity.type === 'idea' ? <Brain className="w-4 h-4 text-purple-600" /> :
                       activity.type === 'task' ? <CheckCircle className="w-4 h-4 text-green-600" /> :
                       <Star className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">AI Insights</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Peak Productivity</h3>
                  <p className="text-sm text-gray-600">You're most productive between 9-11 AM. Consider scheduling important tasks during this time.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Content Suggestion</h3>
                  <p className="text-sm text-gray-600">Based on your recent work, consider creating content about "AI productivity trends".</p>
                </div>
              </div>
            </div>

           
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Upcoming Deadlines</h2>
              </div>
              <div className="space-y-3">
                {[
                  { task: 'Marketing Report', date: 'Tomorrow', urgent: true },
                  { task: 'Client Presentation', date: 'Jan 20', urgent: false },
                  { task: 'Product Review', date: 'Jan 25', urgent: false }
                ].map((deadline, index) => (
                  <div key={index} className={`p-3 rounded-lg ${deadline.urgent ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{deadline.task}</span>
                      <span className={`text-sm ${deadline.urgent ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                        {deadline.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}