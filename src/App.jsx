import React, { useState, useEffect } from 'react';
import { Calendar, Users, Code, Sparkles, Github, Mail, MapPin, Clock, ExternalLink, FileText, Star, Zap, Trophy, Heart } from 'lucide-react';

const CodeXCultureWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const team2024 = [
    'Deepanshu',
    'Rishabh Gupta', 
    'Ritesh',
    'Gagan',
    'Ritesh N Das',
    'Sarvesh Kumar',
    'Hridyansh'
  ];

  const tester2024 = 'Agrim';

  const team2025 = [
    'Vishwas',
    'Suyash Kumar',
    'Kunal',
    'Karan',
    'Kanav Agarwal',
    'Dhruva Goyal',
    'Aditya Ajay',
    'Abhijeet Jain',
    'Jai',
    'Dewansh Khandelwal'
  ];

  const testers2025 = [
    'Deepanshu Soni',
    'Rachit Kansal',
    'Prateek Kumar'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Code className="h-10 w-10 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Code-X-Culture
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {['home', 'about', 'events', 'team', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      activeSection === item
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="relative z-10">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                    {activeSection !== item && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30"></div>
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            style={{
              left: mousePosition.x / 10,
              top: mousePosition.y / 10,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <Sparkles className="h-20 w-20 mx-auto text-yellow-400 animate-bounce relative z-10" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Code-X-Culture
          </h1>
          
          <div className="relative mb-8">
            <p className="text-2xl md:text-3xl text-gray-200 mb-2 font-light">
              Where Code Meets Culture
            </p>
            <p className="text-lg md:text-xl text-purple-300 font-medium">
              IIIT Allahabad's Premier Fresher Event
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3 bg-purple-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
              <Calendar className="h-6 w-6 text-purple-300" />
              <span className="text-purple-200 font-medium">Every June</span>
            </div>
            <div className="flex items-center space-x-3 bg-pink-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-500/30">
              <MapPin className="h-6 w-6 text-pink-300" />
              <span className="text-pink-200 font-medium">IIIT Allahabad</span>
            </div>
            <div className="flex items-center space-x-3 bg-cyan-900/30 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
              <Users className="h-6 w-6 text-cyan-300" />
              <span className="text-cyan-200 font-medium">By Freshers, For Everyone</span>
            </div>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/30"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore the Event</span>
              <Zap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-500/30 mb-6">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-purple-200 font-medium">About Our Event</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code-X-Culture
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A unique celebration that bridges the gap between technology and culture, 
              organized by the talented freshers of IIIT Allahabad since 2024.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/40 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-purple-600/30 rounded-xl">
                      <Code className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-purple-300">Code</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Showcasing technical prowess through coding competitions, hackathons, 
                    and innovative project demonstrations that push the boundaries of creativity.
                  </p>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-pink-900/40 to-pink-800/40 p-8 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-pink-600/30 rounded-xl">
                      <Heart className="h-8 w-8 text-pink-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-pink-300">Culture</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Celebrating diversity through music, dance, art, and cultural performances 
                    that reflect the vibrant spirit of our college community.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-600/40 shadow-2xl">
                <div className="text-center mb-8">
                  <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">Event Highlights</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: '💻', text: 'Technical workshops and coding challenges', color: 'purple' },
                    { icon: '🎭', text: 'Cultural performances and talent shows', color: 'pink' },
                    { icon: '🤝', text: 'Interactive sessions and networking', color: 'cyan' },
                    { icon: '🚀', text: 'Innovation showcases and demos', color: 'green' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-4 group">
                      <div className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section id="events" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-yellow-900/30 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-500/30 mb-6">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-200 font-medium">Event Timeline</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300">Mark your calendars for this annual celebration</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-500 rounded-full"></div>
            
            <div className="space-y-16">
              {/* 2025 Event */}
              <div className="flex items-center justify-between group">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gradient-to-br from-pink-900/60 to-pink-800/60 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/40 hover:border-pink-400/60 transition-all duration-500 relative group-hover:transform group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-pink-300 mb-3">Code-X-Culture 2025</h3>
                      <p className="text-gray-300 mb-6 text-lg">Expanding horizons with new formats and increased participation</p>
                      <div className="space-y-3 mb-4">
                        <div className="inline-block px-4 py-2 bg-pink-600/50 text-pink-200 text-sm rounded-full font-medium">
                          Coming Soon
                        </div>
                        <p className="text-sm text-pink-300">Contest links and rules will be updated soon!</p>
                      </div>
                      <div className="flex items-center justify-end mt-4 text-sm text-pink-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">June 2025</span>
                      </div>
                    </div>
                    
                    {/* 2025 Team Hover Card */}
                    <div className="absolute -top-4 -right-4 w-80 bg-gradient-to-br from-cyan-900/95 to-blue-900/95 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 z-20 pointer-events-none shadow-2xl">
                      <h4 className="text-lg font-bold text-cyan-300 mb-4">2025 Team</h4>
                      <div className="space-y-3 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Problem Setters:</h5>
                        <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
                          {team2025.map((member, idx) => (
                            <div key={idx} className="bg-cyan-800/30 px-2 py-1 rounded">{member}</div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-emerald-400">Problem Testers:</h5>
                        <div className="text-xs text-gray-300 space-y-1">
                          {testers2025.map((tester, idx) => (
                            <div key={idx} className="bg-emerald-800/30 px-2 py-1 rounded">{tester}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-pink-500/50"></div>
                <div className="w-5/12"></div>
              </div>
              
              {/* 2024 Event */}
              <div className="flex items-center justify-between group">
                <div className="w-5/12"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-purple-500/50"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-gradient-to-br from-purple-900/60 to-purple-800/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/40 hover:border-purple-400/60 transition-all duration-500 relative group-hover:transform group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-purple-300 mb-3">Code-X-Culture 2024</h3>
                      <p className="text-gray-300 mb-6 text-lg">First Code-X-Culture event launched by passionate freshers</p>
                      <div className="flex flex-col space-y-3 mb-4">
                        <a 
                          href="https://codeforces.com/contestInvitation/bb42e9d39edab441737e6db6dbdd5e60e8f77054" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm rounded-xl transition-all duration-300 font-medium group/link"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                          Contest Link
                        </a>
                        <a 
                          href="https://docs.google.com/document/d/1BaCDj5H5cg_RSYMfcCqyNj8AfkKld9IWgFbDvCtjacA/edit" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm rounded-xl transition-all duration-300 font-medium group/link"
                        >
                          <FileText className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                          Rules & Guidelines
                        </a>
                      </div>
                      <div className="flex items-center mt-4 text-sm text-purple-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">June 2024</span>
                      </div>
                    </div>
                    
                    {/* 2024 Team Hover Card */}
                    <div className="absolute -top-4 -left-4 w-80 bg-gradient-to-br from-purple-900/95 to-slate-900/95 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 z-20 pointer-events-none shadow-2xl">
                      <h4 className="text-lg font-bold text-purple-300 mb-4">2024 Founding Team</h4>
                      <div className="space-y-3 mb-4">
                        <h5 className="text-sm font-semibold text-purple-400">Organizing Team:</h5>
                        <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
                          {team2024.map((member, idx) => (
                            <div key={idx} className="bg-purple-800/30 px-2 py-1 rounded">{member}</div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-yellow-400">Problem Tester:</h5>
                        <div className="text-xs text-gray-300">
                          <div className="bg-yellow-800/30 px-2 py-1 rounded">{tester2024}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Future Legacy */}
              <div className="flex items-center justify-between group">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gradient-to-br from-yellow-900/60 to-orange-800/60 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/40 hover:border-yellow-400/60 transition-all duration-500 group-hover:transform group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-yellow-300 mb-3">Future Legacy</h3>
                      <p className="text-gray-300 text-lg">Continuing the tradition with innovative ideas and fresh perspectives</p>
                      <div className="flex items-center justify-end mt-4 text-sm text-yellow-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">June 2026+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-yellow-500/50"></div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-900/30 backdrop-blur-sm px-6 py-2 rounded-full border border-green-500/30 mb-6">
              <Users className="h-5 w-5 text-green-400" />
              <span className="text-green-200 font-medium">Meet Our Teams</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Teams
            </h2>
            <p className="text-xl text-gray-300">The passionate minds behind Code-X-Culture</p>
          </div>

          {/* 2025 Team Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                2025 Team - Problem Setters
              </h3>
              <p className="text-lg text-gray-300">Crafting challenges for the upcoming event</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
              {team2025.map((member, index) => (
                <div
                  key={member}
                  className="group relative bg-gradient-to-br from-cyan-800/40 to-blue-700/40 backdrop-blur-sm p-6 rounded-2xl border border-cyan-600/40 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-lg font-bold text-white">
                        {member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-center text-gray-200 group-hover:text-white transition-colors leading-tight">
                      {member}
                    </h4>
                    <p className="text-xs text-center text-cyan-400 mt-2 font-medium">Problem Setter</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2025 Testers Section */}
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                2025 Problem Testers
              </h4>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {testers2025.map((tester, index) => (
                <div
                  key={tester}
                  className="group relative bg-gradient-to-br from-emerald-800/40 to-teal-700/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">
                        {tester.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-center text-gray-200 group-hover:text-white transition-colors">
                      {tester}
                    </h4>
                    <p className="text-sm text-center text-emerald-400 mt-2 font-medium">Problem Tester</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2024 Founding Team Section */}
          <div className="mb-16">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2024 Founding Members
              </h3>
              <p className="text-lg text-gray-300">The visionaries who started the legacy</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {team2024.map((member, index) => (
                <div
                  key={member}
                  className="group relative bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/40 hover:border-purple-500/60 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-18 h-18 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
                      <span className="text-xl font-bold text-white">
                        {member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-center text-gray-200 group-hover:text-white transition-colors">
                      {member}
                    </h4>
                    <p className="text-sm text-center text-gray-400 mt-2 font-medium">Founding Member</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2024 Tester Section */}
            <div className="text-center mb-16">
              <h4 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                2024 Problem Tester
              </h4>
              <div className="inline-block group relative bg-gradient-to-br from-yellow-800/40 to-orange-700/40 backdrop-blur-sm p-10 rounded-2xl border border-yellow-500/40 hover:border-yellow-400/60 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {tester2024.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-center text-gray-200 group-hover:text-white transition-colors">
                    {tester2024}
                  </h4>
                  <p className="text-sm text-center text-yellow-400 mt-2 font-medium">Contest Problem Tester</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 max-w-2xl mx-auto">
              <p className="text-gray-300 italic text-lg">
                "Innovation happens when passionate minds come together"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-500/30 mb-6">
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-purple-200 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 mb-16">
              Join us in celebrating the perfect blend of code and culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm p-10 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-purple-600/30 rounded-2xl w-fit mx-auto mb-6">
                  <Mail className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Email Us</h3>
                <p className="text-gray-300 text-lg">codexculture@iiita.ac.in</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-pink-900/40 to-pink-800/40 backdrop-blur-sm p-10 rounded-2xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-pink-600/30 rounded-2xl w-fit mx-auto mb-6">
                  <Github className="h-10 w-10 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-300">Follow Updates</h3>
                <p className="text-gray-300 text-lg">Stay tuned for announcements</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm p-12 rounded-3xl border border-slate-600/40 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Ready to be part of something amazing?</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Whether you're a coder, artist, performer, or just someone who loves great events - 
              Code-X-Culture has something for everyone.
            </p>
            <div className="text-center">
              <span className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl shadow-purple-500/30">
                Coming June 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-2 bg-purple-600/30 rounded-xl">
              <Code className="h-8 w-8 text-purple-400" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code-X-Culture
            </span>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            IIIT Allahabad • Where Innovation Meets Tradition
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm text-gray-500">
            © 2024-2025 Code-X-Culture. Organized by IIITA Freshers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CodeXCultureWebsite;