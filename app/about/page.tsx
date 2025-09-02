import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Database, Zap, Globe, TrendingUp, Shield, Activity, Atom, Binary, Network, BarChart3, Satellite, Wind, Brain, ChevronRight, Play, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const algorithmSteps = [
    {
      id: 1,
      title: "Smart Hybrid Algorithm",
      description: "We use a mix of quantum and classical computing to predict air quality. Quantum circuits calculate tricky similarity scores between data points, and classical algorithms turn those scores into accurate predictions.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      details: "Our hybrid approach leverages quantum advantage where it matters most while maintaining classical reliability"
    },
    {
      id: 2,
      title: "Data and Features",
      description: "Our model looks at air quality readings like PM2.5, O₃, NO₂, along with weather and NASA data. Instead of just one snapshot, we examine recent history (like the last 24 hours) to spot patterns over time.",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      details: "Multi-dimensional feature engineering captures temporal patterns and environmental correlations"
    },
    {
      id: 3,
      title: "Quantum Encoding",
      description: "Each data point is converted into quantum angles. Think of it as turning numbers into instructions for qubits. Entanglement connects qubits, letting them share information and capture complex relationships.",
      icon: Atom,
      color: "from-green-500 to-emerald-500",
      details: "Advanced quantum state preparation maximizes information density and correlation capture"
    },
    {
      id: 4,
      title: "Quantum Similarity",
      description: "The quantum kernel measures how similar two data points are. If they're very alike, the score is close to 1; if very different, close to 0. We average multiple quantum runs to make predictions stable and reliable.",
      icon: Network,
      color: "from-cyan-500 to-blue-500",
      details: "Quantum kernel methods exploit superposition for exponentially enhanced pattern recognition"
    },
    {
      id: 5,
      title: "Classical Regression",
      description: "Using these quantum similarity scores, we run a ridge regression (or XGBoost) to predict AQI or other pollutant levels. Multi-pollutant predictions are handled efficiently too.",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      details: "Ensemble methods combine quantum features with classical ML for robust predictions"
    },
    {
      id: 6,
      title: "Hybrid Boost for Stability",
      description: "Quantum circuits can be noisy. To improve accuracy, we combine quantum kernel scores with classical features and fine-tune our model to keep predictions sharp.",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      details: "Error mitigation and classical backup ensure reliability in noisy quantum environments"
    },
    {
      id: 7,
      title: "Fast & Efficient Operations",
      description: "We precompute key parts of the model, so new air quality readings can be predicted instantly—no waiting for a quantum computer! Simulators or real quantum backends can be used depending on resources.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      details: "Optimized inference pipeline delivers real-time predictions with quantum-enhanced accuracy"
    }
  ];

  const technologies = [
    { name: "IBM Quantum", icon: Cpu, description: "Quantum hardware and cloud access" },
    { name: "Qiskit", icon: Binary, description: "Quantum computing framework" },
    { name: "NASA MODIS", icon: Satellite, description: "Satellite environmental data" },
    { name: "Machine Learning", icon: Brain, description: "Classical ML algorithms" },
    { name: "Real-time APIs", icon: Activity, description: "Live data processing" },
    { name: "Cloud Computing", icon: Globe, description: "Scalable infrastructure" }
  ];

  const dataVisualization = [
    { metric: "PM2.5", value: 85, unit: "μg/m³", status: "unhealthy", color: "bg-red-500" },
    { metric: "O₃", value: 120, unit: "ppb", status: "moderate", color: "bg-yellow-500" },
    { metric: "NO₂", value: 45, unit: "ppb", status: "good", color: "bg-green-500" },
    { metric: "AQI", value: 95, unit: "", status: "moderate", color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div ref={el => sectionRefs.current[0] = el} className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              About EnviroCast
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Pioneering the future of environmental monitoring through the revolutionary combination of 
              <span className="text-cyan-400 font-semibold"> quantum computing</span> and 
              <span className="text-green-400 font-semibold"> environmental science</span>
            </p>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/30 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed">
                We're not just monitoring the environment—we're predicting its future with quantum precision. 
                Our mission is to save the environment by promoting action through cutting-edge quantum technologies 
                that provide unprecedented insights into air quality patterns and environmental trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Algorithm Visualization */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div ref={el => sectionRefs.current[1] = el} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Quantum Algorithm
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A revolutionary 7-step process that harnesses quantum mechanics for environmental prediction
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {algorithmSteps.map((step, index) => (
              <div 
                key={step.id}
                ref={el => sectionRefs.current[index + 2] = el}
                className={`group relative mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center gap-8`}
              >
                {/* Step Number */}
                <div className="absolute -left-4 top-0 md:relative md:left-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl font-bold shadow-xl`}>
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-20`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-cyan-400 font-medium">
                    {step.details}
                  </p>
                </div>

                {/* Visual Element */}
                <div className="flex-1 relative">
                  <div className={`w-full h-64 rounded-3xl bg-gradient-to-r ${step.color} bg-opacity-10 border border-slate-700/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <div className="relative">
                      <step.icon className="w-24 h-24 text-white opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${step.color} opacity-20 animate-pulse`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div ref={el => sectionRefs.current[9] = el} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering our quantum environmental monitoring system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Data Visualization */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div ref={el => sectionRefs.current[10] = el} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Live Environmental Data
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring of air quality metrics powered by our quantum algorithms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dataVisualization.map((metric, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{metric.metric}</h3>
                  <div className={`w-3 h-3 rounded-full ${metric.color} animate-pulse`}></div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {metric.value}<span className="text-lg text-gray-400">{metric.unit}</span>
                </div>
                <div className="relative bg-slate-700 rounded-full h-2 mb-3">
                  <div 
                    className={`absolute top-0 left-0 h-full ${metric.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${Math.min(metric.value / 150 * 100, 100)}%` }}
                  ></div>
                </div>
                <span className={`text-sm capitalize px-3 py-1 rounded-full ${
                  metric.status === 'good' ? 'bg-green-500/20 text-green-400' :
                  metric.status === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {metric.status}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Quantum Circuit Visualization */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Quantum Circuit Visualization</h3>
            <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 p-6 min-h-64">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-spin-slow">
                    <Binary className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">Classical Input</span>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center animate-pulse">
                      <Atom className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-sm text-gray-400">Quantum Processing</span>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-bounce">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">Prediction Output</span>
                </div>
              </div>
              
              {/* Quantum Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div ref={el => sectionRefs.current[11] = el} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We're on a mission to save our environment by promoting actionable insights and leveraging 
                revolutionary quantum technologies. Every prediction we make, every pattern we discover, 
                brings us closer to a sustainable future.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Quantum-enhanced environmental predictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Real-time actionable insights for communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Promoting sustainable technology adoption</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-8 rounded-3xl border border-green-500/30 backdrop-blur-sm">
                <Globe className="w-16 h-16 text-green-400 mx-auto mb-6 animate-spin-slow" />
                <h3 className="text-2xl font-bold text-center mb-4 text-green-400">Global Impact</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-gray-400">Cities Protected</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">1M+</div>
                    <div className="text-sm text-gray-400">Lives Impacted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">99.2%</div>
                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Technology Deep Dive */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div ref={el => sectionRefs.current[12] = el} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Technology Deep Dive
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding how we leverage quantum mechanics for environmental prediction
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quantum Encoding Visualization */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                <Atom className="w-8 h-8 mr-3" />
                Quantum Encoding
              </h3>
              <div className="relative h-48 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl"></div>
                <div className="absolute inset-4 border-2 border-purple-400/30 rounded-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center">
                    <span className="text-white font-bold">|ψ⟩</span>
                  </div>
                </div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full animate-orbit"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0',
                      animation: `orbit 4s linear infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm">
                Environmental data encoded into quantum states using angular parameters
              </p>
            </div>

            {/* Kernel Similarity */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <Network className="w-8 h-8 mr-3" />
                Quantum Similarity
              </h3>
              <div className="relative h-48 mb-4">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {[0.95, 0.73, 0.12].map((similarity, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                      <div className={`w-12 h-12 rounded-full mb-2 ${
                        similarity > 0.8 ? 'bg-green-500' : 
                        similarity > 0.5 ? 'bg-yellow-500' : 'bg-red-500'
                      } flex items-center justify-center animate-pulse`}>
                        <span className="text-xs font-bold">{similarity}</span>
                      </div>
                      <div className="text-xs text-gray-400">Data Point {i + 1}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="w-full h-full opacity-30">
                    <line x1="16.67%" y1="50%" x2="50%" y2="50%" stroke="cyan" strokeWidth="2" className="animate-pulse" />
                    <line x1="50%" y1="50%" x2="83.33%" y2="50%" stroke="cyan" strokeWidth="2" className="animate-pulse" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Quantum kernel measures data point similarities for pattern recognition
              </p>
            </div>

            {/* Classical Integration */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <BarChart3 className="w-8 h-8 mr-3" />
                Classical Regression
              </h3>
              <div className="relative h-48 mb-4">
                <div className="bg-gradient-to-t from-orange-500/10 to-transparent rounded-2xl h-full flex items-end justify-center space-x-2">
                  {[0.3, 0.7, 0.5, 0.9, 0.6, 0.8].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-orange-500 to-yellow-500 w-8 rounded-t animate-grow"
                      style={{ 
                        height: `${height * 100}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Ridge regression and XGBoost transform quantum features into predictions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IBM Quantum Partnership */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div ref={el => sectionRefs.current[13] = el} className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
              <Cpu className="w-20 h-20 text-blue-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powered by IBM Quantum
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our partnership with IBM Quantum gives us access to cutting-edge quantum computers and cloud services, 
                enabling us to run complex environmental simulations that were previously impossible.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">127</div>
                  <div className="text-gray-400">Qubits Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10ms</div>
                  <div className="text-gray-400">Prediction Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div ref={el => sectionRefs.current[14] = el}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience Quantum Environmental Monitoring
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to see our quantum algorithms in action? Explore our interactive models and simulations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <span>View Interactive Models</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Technical Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        
        @keyframes grow {
          from { height: 0%; }
          to { height: var(--target-height); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        
        .animate-grow {
          animation: grow 1.5s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default AboutPage;
