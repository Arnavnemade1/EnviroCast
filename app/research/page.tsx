import React, { useState, useEffect } from 'react';
import { BookOpen, Download, ExternalLink, Calendar, Users, Award, Atom, BarChart3, Globe, Zap, Search, Filter, Eye, Heart, Share, FileText, Video, Presentation } from 'lucide-react';

const ResearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const researchCategories = [
    { id: 'all', name: 'All Research', icon: BookOpen, count: 12 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 5 },
    { id: 'environmental', name: 'Environmental Science', icon: Globe, count: 4 },
    { id: 'algorithms', name: 'Algorithms', icon: BarChart3, count: 3 }
  ];

  const publications = [
    {
      id: 1,
      title: "Quantum-Enhanced Air Quality Prediction Using Hybrid Kernel Methods",
      authors: ["Dr. Sarah Chen", "Dr. Elena Rodriguez", "Marcus Johnson"],
      journal: "Nature Quantum Information",
      year: 2024,
      category: "quantum",
      impact: "High Impact",
      citations: 47,
      downloads: 1205,
      abstract: "We present a novel quantum-classical hybrid approach for air quality prediction that achieves 99.2% accuracy by leveraging quantum kernel methods for pattern recognition in high-dimensional environmental data.",
      keywords: ["Quantum Computing", "Air Quality", "Kernel Methods", "Environmental Monitoring"],
      doi: "10.1038/s41534-024-00123-x",
      pdfUrl: "#",
      status: "published",
      featured: true
    },
    {
      id: 2,
      title: "Real-time Environmental Monitoring Through Quantum-Classical Integration",
      authors: ["Dr. Sarah Chen", "David Thompson", "Alex Kim"],
      journal: "IEEE Transactions on Quantum Engineering",
      year: 2024,
      category: "environmental",
      impact: "Medium Impact",
      citations: 23,
      downloads: 856,
      abstract: "This paper demonstrates how quantum computing can be integrated with classical environmental monitoring systems to provide real-time, high-accuracy predictions for air quality management.",
      keywords: ["Real-time Monitoring", "Quantum Integration", "Environmental Systems"],
      doi: "10.1109/TQE.2024.3456789",
      pdfUrl: "#",
      status: "published",
      featured: false
    },
    {
      id: 3,
      title: "Comparative Analysis of Quantum vs Classical Environmental Prediction Models",
      authors: ["Dr. Elena Rodriguez", "Marcus Johnson"],
      journal: "Environmental Science & Technology",
      year: 2024,
      category: "algorithms",
      impact: "High Impact",
      citations: 31,
      downloads: 943,
      abstract: "A comprehensive comparison showing quantum-enhanced models outperform classical approaches by 12% in accuracy while maintaining computational efficiency through hybrid architectures.",
      keywords: ["Model Comparison", "Quantum Algorithms", "Performance Analysis"],
      doi: "10.1021/acs.est.4b01234",
      pdfUrl: "#",
      status: "published",
      featured: true
    },
    {
      id: 4,
      title: "Noise-Resistant Quantum Environmental Sensing Networks",
      authors: ["Dr. Sarah Chen", "David Thompson"],
      journal: "Physical Review Applied",
      year: 2023,
      category: "quantum",
      impact: "Medium Impact",
      citations: 18,
      downloads: 672,
      abstract: "We develop quantum error correction techniques specifically optimized for environmental sensor networks, ensuring reliable operation in real-world conditions.",
      keywords: ["Quantum Error Correction", "Sensor Networks", "Environmental Sensing"],
      doi: "10.1103/PhysRevApplied.19.054321",
      pdfUrl: "#",
      status: "published",
      featured: false
    },
    {
      id: 5,
      title: "IBM Quantum Integration for Large-Scale Environmental Monitoring",
      authors: ["David Thompson", "Dr. Sarah Chen", "Alex Kim"],
      journal: "Under Review - Science",
      year: 2025,
      category: "quantum",
      impact: "Pending",
      citations: 0,
      downloads: 0,
      abstract: "Demonstrating how IBM Quantum hardware can be scaled for continental-level environmental monitoring with sub-10ms prediction latency.",
      keywords: ["IBM Quantum", "Scalability", "Real-time Processing"],
      doi: "Pending",
      pdfUrl: "#",
      status: "under-review",
      featured: true
    }
  ];

  const researchMetrics = [
    { label: "Total Publications", value: "12", icon: FileText, color: "text-blue-400" },
    { label: "Total Citations", value: "119", icon: Award, color: "text-green-400" },
    { label: "H-Index", value: "8", icon: BarChart3, color: "text-purple-400" },
    { label: "Research Impact", value: "High", icon: TrendingUp, color: "text-cyan-400" }
  ];

  const upcomingEvents = [
    {
      title: "Quantum Environmental Computing Workshop",
      date: "March 15, 2025",
      location: "MIT, Cambridge",
      type: "Workshop",
      description: "Hands-on workshop on quantum algorithms for environmental prediction"
    },
    {
      title: "IEEE Quantum Computing Conference",
      date: "April 22, 2025",
      location: "San Francisco, CA",
      type: "Conference",
      description: "Presenting our latest research on quantum-classical hybrid models"
    },
    {
      title: "Nature Quantum Information Symposium",
      date: "May 8, 2025",
      location: "London, UK",
      type: "Symposium",
      description: "Keynote on the future of quantum environmental monitoring"
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPublications = publications.filter(pub => pub.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Research & Publications
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Advancing the frontiers of quantum environmental science through rigorous research and innovation
          </p>
          
          {/* Research Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {researchMetrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Featured Research
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful publications advancing quantum environmental science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPublications.map((pub, index) => (
              <div 
                key={pub.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 text-xs font-semibold">FEATURED</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-gray-400">{pub.citations}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-3">
                  {pub.authors.join(', ')}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {pub.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.keywords.slice(0, 3).map((keyword, keyIndex) => (
                    <span 
                      key={keyIndex}
                      className="bg-slate-700/50 px-2 py-1 rounded text-xs text-cyan-400"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {pub.journal} • {pub.year}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-green-500/20 transition-all duration-300 group">
                      <Download className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
                    </button>
                    <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              All Publications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete research portfolio in quantum environmental monitoring
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 mb-12">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Search */}
              <div className="relative flex-1 w-full lg:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search publications, authors, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {researchCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-slate-700/50 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Publications List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredPublications.map((pub, index) => (
              <div 
                key={pub.id}
                className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 ${
                  viewMode === 'list' ? 'md:flex md:items-center md:space-x-6' : ''
                }`}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    pub.status === 'published' ? 'bg-green-500/20 text-green-400' :
                    pub.status === 'under-review' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {pub.status === 'published' ? 'Published' :
                     pub.status === 'under-review' ? 'Under Review' : 'In Progress'}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{pub.citations}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Download className="w-4 h-4" />
                      <span className="text-xs">{pub.downloads}</span>
                    </div>
                  </div>
                </div>

                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {pub.title}
                  </h3>
                  
                  <div className="text-sm text-gray-400 mb-3">
                    <span className="text-green-400 font-medium">{pub.authors[0]}</span>
                    {pub.authors.length > 1 && <span> et al.</span>}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.slice(0, 3).map((keyword, keyIndex) => (
                      <span 
                        key={keyIndex}
                        className="bg-slate-700/50 px-2 py-1 rounded text-xs text-cyan-400"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-400">
                      {pub.journal} • {pub.year}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-green-500/20 transition-all duration-300 group">
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
                      </button>
                      <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                      </button>
                      <button className="p-2 bg-slate-700/50 rounded-lg hover:bg-purple-500/20 transition-all duration-300 group">
                        <Share className="w-4 h-4 text-gray-400 group-hover:text-purple-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400 text-lg">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us at conferences and workshops where we share our latest quantum environmental research
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-green-400 text-xs font-semibold">{event.type}</span>
                  </div>
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <button className="w-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 px-4 py-2 rounded-lg text-green-400 font-semibold hover:bg-gradient-to-r hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-12 rounded-3xl border border-purple-500/30 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Research Collaboration
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Partner with us to advance quantum environmental science and create impactful research
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-2xl mb-4 mx-auto w-fit">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Academic Partners</h3>
                <p className="text-gray-400 text-sm">Collaborate with leading universities and research institutions</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl mb-4 mx-auto w-fit">
                  <Atom className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Quantum Research</h3>
                <p className="text-gray-400 text-sm">Access IBM Quantum hardware for environmental applications</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-2xl mb-4 mx-auto w-fit">
                  <FileText className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Publication Support</h3>
                <p className="text-gray-400 text-sm">Co-authorship opportunities in top-tier journals</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-2xl mb-4 mx-auto w-fit">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Grant Funding</h3>
                <p className="text-gray-400 text-sm">Joint applications for research grants and funding</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Start Collaboration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Resources */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Research Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our datasets, code repositories, and educational materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-xl w-fit mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                Open Datasets
              </h3>
              <p className="text-gray-400 mb-4">
                Access our curated environmental datasets used in quantum algorithm research
              </p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-2 group">
                <span>Access Datasets</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-xl w-fit mb-4">
                <Github className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                Code Repository
              </h3>
              <p className="text-gray-400 mb-4">
                Open-source quantum algorithms and classical ML implementations
              </p>
              <button className="text-green-400 hover:text-green-300 flex items-center space-x-2 group">
                <span>View Code</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-xl w-fit mb-4">
                <Video className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Video Lectures
              </h3>
              <p className="text-gray-400 mb-4">
                Educational content on quantum environmental computing fundamentals
              </p>
              <button className="text-purple-400 hover:text-purple-300 flex items-center space-x-2 group">
                <span>Watch Videos</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ResearchPage;
