import React, { useState, useEffect } from 'react';
import { Calendar, Users, Code, Sparkles, Github, Mail, MapPin, Clock, ExternalLink, FileText } from 'lucide-react';

const CodeXCultureWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Code-X-Culture
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'events', 'team', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-gray-900 to-pink-900/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6">
            <Sparkles className="h-16 w-16 mx-auto text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Code-X-Culture
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Where Code Meets Culture • IIIT Allahabad's Premier Fresher Event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-purple-300">
              <Calendar className="h-5 w-5" />
              <span>Every June</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-300">
              <MapPin className="h-5 w-5" />
              <span>IIIT Allahabad</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-300">
              <Users className="h-5 w-5" />
              <span>By Freshers, For Everyone</span>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Explore the Event
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Code-X-Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A unique celebration that bridges the gap between technology and culture, 
              organized by the talented freshers of IIIT Allahabad since 2024.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20">
                <Code className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-purple-300">Code</h3>
                <p className="text-gray-300">
                  Showcasing technical prowess through coding competitions, hackathons, 
                  and innovative project demonstrations that push the boundaries of creativity.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-900/30 to-yellow-900/30 p-6 rounded-xl border border-pink-500/20">
                <Sparkles className="h-8 w-8 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-pink-300">Culture</h3>
                <p className="text-gray-300">
                  Celebrating diversity through music, dance, art, and cultural performances 
                  that reflect the vibrant spirit of our college community.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-4 text-center">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Technical workshops and coding challenges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Cultural performances and talent shows</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Interactive sessions and networking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Innovation showcases and demos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section id="events" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-300">Mark your calendars for this annual celebration</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-12">
              {/* 2025 Event - First */}
              <div className="flex items-center justify-between group">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gradient-to-r from-pink-900/40 to-pink-800/40 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 relative">
                    <h3 className="text-xl font-bold text-pink-300 mb-2">Code-X-Culture 2025</h3>
                    <p className="text-gray-300 mb-4">Expanding horizons with new formats and increased participation</p>
                    <div className="space-y-2 mb-3">
                      <div className="inline-block px-3 py-1 bg-pink-600/50 text-pink-200 text-sm rounded-full">
                        Coming Soon
                      </div>
                      <p className="text-sm text-pink-300">Contest links and rules will be updated soon!</p>
                    </div>
                    <div className="flex items-center justify-end mt-3 text-sm text-pink-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>June 2025</span>
                    </div>
                    
                    {/* 2025 Team Hover Card */}
                    <div className="absolute -top-4 -right-4 w-80 bg-gradient-to-br from-cyan-900/95 to-blue-900/95 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-20 pointer-events-none">
                      <h4 className="text-lg font-bold text-cyan-300 mb-3">2025 Team</h4>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Problem Setters:</h5>
                        <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
                          {team2025.map((member, idx) => (
                            <div key={idx}>{member}</div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-emerald-400">Problem Testers:</h5>
                        <div className="text-xs text-gray-300">
                          {testers2025.map((tester, idx) => (
                            <div key={idx}>{tester}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="w-5/12"></div>
              </div>
              
              {/* 2024 Event - Second */}
              <div className="flex items-center justify-between group">
                <div className="w-5/12"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative">
                    <h3 className="text-xl font-bold text-purple-300 mb-2">Code-X-Culture 2024</h3>
                    <p className="text-gray-300 mb-4">First Code-X-Culture event launched by passionate freshers</p>
                    <div className="flex flex-col space-y-2 mb-3">
                      <a 
                        href="https://codeforces.com/contestInvitation/bb42e9d39edab441737e6db6dbdd5e60e8f77054" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Contest Link
                      </a>
                      <a 
                        href="https://docs.google.com/document/d/1BaCDj5H5cg_RSYMfcCqyNj8AfkKld9IWgFbDvCtjacA/edit" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        Rules & Guidelines
                      </a>
                    </div>
                    <div className="flex items-center mt-3 text-sm text-purple-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>June 2024</span>
                    </div>
                    
                    {/* 2024 Team Hover Card */}
                    <div className="absolute -top-4 -left-4 w-80 bg-gradient-to-br from-purple-900/95 to-gray-900/95 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-20 pointer-events-none">
                      <h4 className="text-lg font-bold text-purple-300 mb-3">2024 Founding Team</h4>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-purple-400">Organizing Team:</h5>
                        <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
                          {team2024.map((member, idx) => (
                            <div key={idx}>{member}</div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-yellow-400">Problem Tester:</h5>
                        <div className="text-xs text-gray-300">
                          {tester2024}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Future Legacy - Third */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 p-6 rounded-xl border border-yellow-500/30">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">Future Legacy</h3>
                    <p className="text-gray-300">Continuing the tradition with innovative ideas and fresh perspectives</p>
                    <div className="flex items-center justify-end mt-3 text-sm text-yellow-400">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>June 2026+</span>
                    </div>
                  </div>
                </div>
                <div className="w-6 h-6 bg-yellow-500 rounded-full border-4 border-gray-900 z-10"></div>
                <div className="w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Teams
            </h2>
            <p className="text-xl text-gray-300">The passionate minds behind Code-X-Culture</p>
          </div>

          {/* 2025 Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                2025 Team - Problem Setters
              </h3>
              <p className="text-lg text-gray-300">Crafting challenges for the upcoming event</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
              {team2025.map((member, index) => (
                <div
                  key={member}
                  className="group relative bg-gradient-to-br from-cyan-800/50 to-blue-700/50 p-6 rounded-xl border border-cyan-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-lg font-bold text-white">
                        {member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-center text-gray-200 group-hover:text-white transition-colors leading-tight">
                      {member}
                    </h4>
                    <p className="text-xs text-center text-cyan-400 mt-2">Problem Setter</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2025 Testers Section */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                2025 Problem Testers
              </h4>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {testers2025.map((tester, index) => (
                <div
                  key={tester}
                  className="group relative bg-gradient-to-br from-emerald-800/50 to-teal-700/50 p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-lg font-bold text-white">
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

          {/* 2024 Founding Team Section - Moved to bottom */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2024 Founding Members
              </h3>
              <p className="text-lg text-gray-300">The visionaries who started the legacy</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {team2024.map((member, index) => (
                <div
                  key={member}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-6 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl font-bold text-white">
                        {member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-center text-gray-200 group-hover:text-white transition-colors">
                      {member}
                    </h4>
                    <p className="text-sm text-center text-gray-400 mt-2">Founding Member</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2024 Tester Section */}
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                2024 Problem Tester
              </h4>
              <div className="inline-block group relative bg-gradient-to-br from-yellow-800/50 to-orange-700/50 p-8 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
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
          
          <div className="text-center mt-12">
            <p className="text-gray-400 italic">
              "Innovation happens when passionate minds come together"
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join us in celebrating the perfect blend of code and culture
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-8 rounded-xl border border-purple-500/20">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-purple-300">Email Us</h3>
              <p className="text-gray-300">codexculture@iiita.ac.in</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 p-8 rounded-xl border border-pink-500/20">
              <Github className="h-8 w-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-pink-300">Follow Updates</h3>
              <p className="text-gray-300">Stay tuned for announcements</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4">Ready to be part of something amazing?</h3>
            <p className="text-gray-300 mb-6">
              Whether you're a coder, artist, performer, or just someone who loves great events - 
              Code-X-Culture has something for everyone.
            </p>
            <div className="text-center">
              <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full">
                Coming June 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-purple-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code-X-Culture
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            IIIT Allahabad • Where Innovation Meets Tradition
          </p>
          <p className="text-sm text-gray-500">
            © 2024-2025 Code-X-Culture. Organized by IIITA Freshers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CodeXCultureWebsite;