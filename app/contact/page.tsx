import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, Globe, Zap, CheckCircle, AlertCircle, Instagram, Github, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    interest: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeOffice, setActiveOffice] = useState(0);

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Quantum Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@envirocast.tech",
      timezone: "PST",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      isHeadquarters: true
    },
    {
      city: "London",
      country: "UK",
      address: "45 Innovation Street, London EC2A 3LT",
      phone: "+44 20 7946 0958",
      email: "london@envirocast.tech",
      timezone: "GMT",
      coordinates: { lat: 51.5074, lng: -0.1278 },
      isHeadquarters: false
    },
    {
      city: "Tokyo",
      country: "Japan",
      address: "1-1-1 Quantum Plaza, Shibuya, Tokyo 150-0002",
      phone: "+81 3-1234-5678",
      email: "tokyo@envirocast.tech",
      timezone: "JST",
      coordinates: { lat: 35.6762, lng: 139.6503 },
      isHeadquarters: false
    }
  ];

  const contactReasons = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'partnership', label: 'Partnership', icon: Globe },
    { value: 'research', label: 'Research Collaboration', icon: Zap },
    { value: 'media', label: 'Media & Press', icon: Instagram },
    { value: 'careers', label: 'Careers', icon: Users },
    { value: 'support', label: 'Technical Support', icon: AlertCircle }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/envirocast_tech', color: 'text-pink-400 hover:text-pink-300' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/envirocast', color: 'text-gray-400 hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/envirocast', color: 'text-blue-400 hover:text-blue-300' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/envirocast_tech', color: 'text-cyan-400 hover:text-cyan-300' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        interest: 'general'
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffice(prev => (prev + 1) % offices.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to revolutionize environmental monitoring with quantum technology? 
            Let's connect and explore how we can work together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div className="text-sm mt-2 text-gray-400 group-hover:text-white transition-colors">
                  {social.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="w-8 h-8 mr-3 text-cyan-400" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  >
                    {contactReasons.map(reason => (
                      <option key={reason.value} value={reason.value} className="bg-slate-800">
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-green-500 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-green-400 font-medium">
                      Message sent successfully! We'll get back to you within 24 hours.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Mail className="w-8 h-8 mr-3 text-green-400" />
                  Direct Contact
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">hello@envirocast.tech</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">
                    <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-400 group-hover:text-green-400 transition-colors">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Headquarters</div>
                      <div className="text-gray-400 group-hover:text-purple-400 transition-colors">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-yellow-400" />
                  Response Times
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">General Inquiries</span>
                    <span className="text-green-400 font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Partnership Requests</span>
                    <span className="text-blue-400 font-semibold">48 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Technical Support</span>
                    <span className="text-cyan-400 font-semibold">12 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Media Inquiries</span>
                    <span className="text-purple-400 font-semibold">6 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Global Presence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum environmental monitoring network spans across multiple continents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {offices.map((office, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  activeOffice === index 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700/50 hover:border-green-400/50'
                }`}
                onClick={() => setActiveOffice(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {office.city}
                  </h3>
                  {office.isHeadquarters && (
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
                      <span className="text-yellow-400 text-xs font-semibold">HQ</span>
                    </div>
                  )}
                </div>
                
                <div className="text-gray-400 text-sm mb-4">{office.country}</div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                    <span className="text-gray-300 text-sm">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">{office.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Timezone: {office.timezone}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-lg border border-cyan-500/20">
                  <div className="text-xs text-gray-400 mb-1">Local Time</div>
                  <div className="text-sm font-semibold text-cyan-400">
                    {new Date().toLocaleTimeString('en-US', { 
                      timeZone: office.timezone === 'PST' ? 'America/Los_Angeles' : 
                                office.timezone === 'GMT' ? 'Europe/London' : 
                                'Asia/Tokyo'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* World Map Visualization */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              EnviroCast Global Network
            </h3>
            
            <div className="relative bg-slate-900/50 rounded-2xl p-8 min-h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl"></div>
              
              {/* Simulated World Map */}
              <div className="relative h-80 flex items-center justify-center">
                <div className="relative w-full max-w-4xl">
                  {/* Continents (simplified) */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      {/* North America */}
                      <path d="M50 100 L200 80 L180 200 L80 220 Z" fill="currentColor" className="text-slate-600" />
                      {/* Europe */}
                      <path d="M300 80 L400 70 L420 150 L320 160 Z" fill="currentColor" className="text-slate-600" />
                      {/* Asia */}
                      <path d="M450 60 L650 50 L680 180 L480 190 Z" fill="currentColor" className="text-slate-600" />
                    </svg>
                  </div>
                  
                  {/* Office Markers */}
                  {offices.map((office, index) => (
                    <div
                      key={index}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                        activeOffice === index ? 'scale-150' : 'scale-100'
                      }`}
                      style={{
                        left: `${15 + index * 30}%`,
                        top: `${40 + (index % 2) * 20}%`
                      }}
                    >
                      <div className={`w-4 h-4 rounded-full animate-pulse ${
                        office.isHeadquarters ? 'bg-yellow-400' : 'bg-cyan-400'
                      }`}>
                        <div className={`absolute inset-0 rounded-full animate-ping ${
                          office.isHeadquarters ? 'bg-yellow-400/50' : 'bg-cyan-400/50'
                        }`}></div>
                      </div>
                      
                      {activeOffice === index && (
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-slate-800/90 p-2 rounded-lg border border-cyan-400/30 backdrop-blur-sm whitespace-nowrap">
                          <div className="text-sm font-semibold text-white">{office.city}</div>
                          <div className="text-xs text-cyan-400">{office.timezone}</div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.6}} />
                        <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.6}} />
                      </linearGradient>
                    </defs>
                    <line x1="15%" y1="40%" x2="45%" y2="60%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" />
                    <line x1="45%" y1="60%" x2="75%" y2="40%" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" />
                  </svg>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <div className="inline-flex items-center space-x-4 bg-slate-800/50 px-6 py-3 rounded-full">
                  <Globe className="w-5 h-5 text-cyan-400 animate-spin" />
                  <span className="text-sm text-gray-300">Global Quantum Network Active</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our quantum environmental monitoring technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How does quantum computing improve environmental predictions?",
                answer: "Quantum computing allows us to process complex environmental relationships that classical computers struggle with. Our quantum kernel methods can identify patterns in high-dimensional environmental data that would be computationally impossible with traditional approaches, leading to 12% better accuracy."
              },
              {
                question: "What makes EnviroCast different from other air quality monitors?",
                answer: "We're the first platform to integrate IBM Quantum computing with environmental monitoring. While others provide reactive data, we offer predictive insights using quantum-enhanced algorithms that forecast air quality changes before they happen."
              },
              {
                question: "How accurate are your predictions?",
                answer: "Our quantum-classical hybrid models achieve 99.2% accuracy in air quality predictions, significantly outperforming traditional models. We validate our predictions against real-world data from NASA satellites and ground-based monitoring stations."
              },
              {
                question: "Can I access your API for my research?",
                answer: "Yes! We offer API access for researchers, municipalities, and organizations. Contact us to discuss your specific needs and we'll provide documentation and access credentials."
              },
              {
                question: "Do you plan to expand to other environmental monitoring areas?",
                answer: "Absolutely. While we're currently focused on air quality, our quantum algorithms can be adapted for water quality monitoring, soil analysis, and climate pattern prediction. Stay tuned for exciting developments!"
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-12 rounded-3xl border border-green-500/30 backdrop-blur-sm text-center">
            <Globe className="w-16 h-16 text-green-400 mx-auto mb-6 animate-spin-slow" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join universities, governments, and organizations worldwide in advancing quantum environmental science
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                Explore Partnerships
              </button>
              <button className="border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Download Partnership Brief
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
