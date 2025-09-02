import React, { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Zap, Globe, Users, Instagram, Github, Mail, Phone, MapPin, Star, ArrowRight, Play, CheckCircle, TrendingUp, Shield, Cpu, Cloud, Wind, Eye } from 'lucide-react';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Quantum Computing Lead",
      bio: "PhD in Quantum Physics from MIT. Expert in quantum algorithms and environmental modeling with 8+ years experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      skills: ["Quantum Algorithms", "Machine Learning", "Environmental Science"],
      linkedin: "#",
      github: "#"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Full-Stack Developer",
      bio: "Senior developer specializing in Next.js and cloud architecture. Passionate about creating scalable environmental solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Next.js", "AWS", "TypeScript"],
      linkedin: "#",
      github: "#"
    },
    {
      id: 3,
      name: "Dr. Elena Rodriguez",
      role: "Environmental Data Scientist",
      bio: "Environmental scientist with expertise in air quality monitoring and data analysis. Former NASA researcher.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["Data Science", "Environmental Monitoring", "Python"],
      linkedin: "#",
      github: "#"
    },
    {
      id: 4,
      name: "Alex Kim",
      role: "UI/UX Designer",
      bio: "Award-winning designer focused on creating intuitive interfaces for complex scientific applications.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["UI/UX Design", "Figma", "User Research"],
      linkedin: "#",
      github: "#"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure specialist ensuring our quantum-classical hybrid systems run smoothly at scale.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      skills: ["DevOps", "Kubernetes", "IBM Quantum"],
      linkedin: "#",
      github: "#"
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: "Quantum-Classical Hybrid",
      description: "Revolutionary algorithms combining quantum computing with classical ML for unprecedented accuracy"
    },
    {
      icon: TrendingUp,
      title: "Real-time Predictions",
      description: "Instant air quality forecasts using precomputed quantum models and live environmental data"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide environmental monitoring using NASA satellite data and ground-based sensors"
    },
    {
      icon: Shield,
      title: "Reliable & Stable",
      description: "Noise-resistant quantum algorithms with classical backup ensuring consistent performance"
    }
  ];

  const stats = [
    { value: "99.2%", label: "Prediction Accuracy" },
    { value: "15+", label: "Cities Monitored" },
    { value: "24/7", label: "Real-time Updates" },
    { value: "IBM", label: "Quantum Partner" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-center py-2 relative z-50">
        <div className="flex items-center justify-center space-x-2">
          <Star className="w-4 h-4 animate-spin" />
          <span className="text-sm font-medium">🎉 EnviroCast v2.0 launched with IBM Quantum integration!</span>
          <Star className="w-4 h-4 animate-spin" />
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Leaf className="w-8 h-8 text-green-400 animate-pulse" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                EnviroCast
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-green-400 transition-all duration-300 hover:scale-105">Home</a>
              <a href="#about" className="hover:text-green-400 transition-all duration-300 hover:scale-105">About</a>
              <a href="#models" className="hover:text-green-400 transition-all duration-300 hover:scale-105">Models</a>
              <a href="#team" className="hover:text-green-400 transition-all duration-300 hover:scale-105">Team</a>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              EnviroCast
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing Environmental Monitoring with 
              <span className="text-cyan-400 font-semibold"> Quantum Computing</span>
            </p>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
              Saving our planet through advanced quantum-classical hybrid algorithms that predict air quality with unprecedented accuracy
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="group bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>Explore Technology</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-green-400" />
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Environmental Crisis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our planet faces unprecedented environmental challenges that demand innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Air Pollution Crisis</h3>
                <p className="text-gray-300 leading-relaxed">
                  7 million people die annually from air pollution. PM2.5 particles, ozone, and nitrogen dioxide 
                  create a deadly cocktail that threatens human health and our planet's future.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 p-6 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Climate Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Traditional monitoring systems are reactive, not predictive. We need quantum-powered 
                  forecasting to stay ahead of environmental disasters.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-green-400 mb-6">EnviroCast Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Quantum-enhanced air quality prediction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Real-time environmental monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>Actionable insights for communities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>IBM Quantum integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Breakthrough technology that combines the power of quantum computing with environmental science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Campaign */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-12 rounded-3xl border border-pink-500/30 backdrop-blur-sm">
            <Instagram className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Movement
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow our journey on Instagram as we revolutionize environmental monitoring with quantum technology
            </p>
            <a 
              href="https://instagram.com/envirocast_tech" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span>@envirocast_tech</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brilliant minds working together to solve the world's most pressing environmental challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-400/50 group-hover:border-green-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping group-hover:animate-none"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-green-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-green-500/20 to-blue-500/20 px-3 py-1 rounded-full text-xs border border-green-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-110">
                    <Users className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-purple-400 hover:text-purple-300 transition-colors transform hover:scale-110">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-12 rounded-3xl border border-green-500/30 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dive deeper into our quantum algorithms and explore interactive environmental models
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                Explore About Page
              </button>
              <button className="border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                View Models
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">EnviroCast</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Quantum-powered environmental monitoring for a sustainable future.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Models</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">API</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Documentation</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Team</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors">Press</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@envirocast.tech</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 EnviroCast. All rights reserved. | Powered by IBM Quantum
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
