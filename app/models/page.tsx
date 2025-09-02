import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Settings, Download, Share, Cpu, Globe, Wind, Activity, BarChart3, Atom, Zap, Target, TrendingUp, Layers, Eye, MousePointer } from 'lucide-react';

const ModelsPage = () => {
  const [activeModel, setActiveModel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pollutionLevel, setPollutionLevel] = useState(75);
  const [windSpeed, setWindSpeed] = useState(15);
  const [temperature, setTemperature] = useState(22);
  const [prediction, setPrediction] = useState(null);
  const [quantumState, setQuantumState] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const models = [
    {
      id: 0,
      title: "Air Quality Prediction Model",
      description: "Real-time air quality forecasting using quantum-enhanced algorithms",
      icon: Wind,
      color: "from-blue-500 to-cyan-500",
      interactive: true
    },
    {
      id: 1,
      title: "Pollution Dispersion Simulator",
      description: "3D visualization of how pollutants spread through urban environments",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      interactive: true
    },
    {
      id: 2,
      title: "Quantum Circuit Visualizer",
      description: "Interactive quantum circuit showing our hybrid algorithm in action",
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      interactive: true
    },
    {
      id: 3,
      title: "Environmental Impact Game",
      description: "Gamified learning experience about pollution sources and effects",
      icon: Target,
      color: "from-orange-500 to-red-500",
      interactive: true
    }
  ];

  const pollutionSources = [
    { name: "Vehicle Emissions", value: 35, color: "#ef4444" },
    { name: "Industrial", value: 28, color: "#f97316" },
    { name: "Power Plants", value: 22, color: "#eab308" },
    { name: "Agriculture", value: 15, color: "#22c55e" }
  ];

  // Air Quality Prediction Logic
  useEffect(() => {
    const calculatePrediction = () => {
      // Simulate quantum-classical hybrid prediction
      const quantumFactor = Math.sin(quantumState * 0.1) * 0.2 + 0.8;
      const basePollution = pollutionLevel;
      const windFactor = Math.max(0.3, 1 - windSpeed / 50);
      const tempFactor = 1 + (temperature - 20) * 0.02;
      
      const predictedAQI = Math.round(basePollution * windFactor * tempFactor * quantumFactor);
      const confidence = Math.round((quantumFactor + 0.2) * 100);
      
      setPrediction({
        aqi: Math.max(0, Math.min(500, predictedAQI)),
        confidence: Math.max(85, Math.min(99, confidence)),
        status: predictedAQI < 50 ? 'Good' : predictedAQI < 100 ? 'Moderate' : predictedAQI < 150 ? 'Unhealthy for Sensitive' : 'Unhealthy',
        color: predictedAQI < 50 ? 'text-green-400' : predictedAQI < 100 ? 'text-yellow-400' : predictedAQI < 150 ? 'text-orange-400' : 'text-red-400'
      });
    };

    calculatePrediction();
  }, [pollutionLevel, windSpeed, temperature, quantumState]);

  // Quantum state animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setQuantumState(prev => prev + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // 3D Pollution Visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const renderAirQualityModel = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
            <Settings className="w-6 h-6 mr-3" />
            Environmental Parameters
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Base Pollution Level: {pollutionLevel}
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={pollutionLevel}
                onChange={(e) => setPollutionLevel(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Wind Speed: {windSpeed} mph
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={windSpeed}
                onChange={(e) => setWindSpeed(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Temperature: {temperature}°C
              </label>
              <input
                type="range"
                min="-10"
                max="45"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>

        {/* Prediction Results */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50">
          <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3" />
            Quantum Prediction Results
          </h3>
          
          {prediction && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {prediction.aqi}
                </div>
                <div className="text-sm text-gray-400 mb-1">Air Quality Index</div>
                <div className={`text-lg font-semibold ${prediction.color}`}>
                  {prediction.status}
                </div>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Quantum Confidence</span>
                  <span className="text-sm font-semibold text-cyan-400">{prediction.confidence}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${prediction.confidence}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 text-center">
                Powered by IBM Quantum • Updated every 10ms
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quantum State Visualization */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
          <Atom className="w-6 h-6 mr-3" />
          Quantum State Evolution
        </h3>
        
        <div className="relative h-32 bg-slate-900/50 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
              style={{ 
                transform: `translateX(${Math.sin(quantumState * 0.1) * 100}px) translateY(${Math.cos(quantumState * 0.05) * 20}px)`
              }}
            ></div>
          </div>
          
          <div className="absolute bottom-2 left-4 text-xs text-gray-400">
            Quantum State: |ψ⟩ = α|0⟩ + β|1⟩
          </div>
          <div className="absolute bottom-2 right-4 text-xs text-cyan-400">
            Step: {quantumState}
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Start'} Simulation</span>
          </button>
          <button
            onClick={() => setQuantumState(0)}
            className="border border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPollutionDispersion = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-green-500/30">
        <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center">
          <Globe className="w-6 h-6 mr-3" />
          3D Pollution Dispersion Model
        </h3>
        
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="w-full h-96 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl border border-green-500/30"
          />
          
          <div className="absolute top-4 left-4 bg-slate-900/80 p-3 rounded-lg backdrop-blur-sm">
            <div className="text-xs text-gray-400 mb-1">Simulation Status</div>
            <div className={`text-sm font-semibold ${isPlaying ? 'text-green-400' : 'text-gray-400'}`}>
              {isPlaying ? 'Running' : 'Paused'}
            </div>
          </div>
          
          <div className="absolute top-4 right-4 bg-slate-900/80 p-3 rounded-lg backdrop-blur-sm">
            <div className="text-xs text-gray-400 mb-1">Particles</div>
            <div className="text-sm font-semibold text-cyan-400">50 Active</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {pollutionSources.map((source, index) => (
            <div key={index} className="bg-slate-700/50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: source.color }}
                ></div>
                <span className="text-sm font-medium text-white">{source.name}</span>
              </div>
              <div className="text-lg font-bold text-cyan-400">{source.value}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span>{isPlaying ? 'Pause' : 'Start'} Simulation</span>
        </button>
        <button className="border border-slate-600 px-6 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center space-x-2">
          <Download className="w-5 h-5" />
          <span>Export Data</span>
        </button>
      </div>
    </div>
  );

  const renderQuantumCircuit = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
          <Atom className="w-6 h-6 mr-3" />
          Interactive Quantum Circuit
        </h3>
        
        <div className="relative bg-slate-900/50 p-8 rounded-xl min-h-64">
          {/* Qubit Lines */}
          {[0, 1, 2, 3].map((qubit) => (
            <div key={qubit} className="relative mb-8">
              <div className="flex items-center">
                <div className="w-12 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm font-bold mr-4">
                  |q{qubit}⟩
                </div>
                <div className="flex-1 h-0.5 bg-purple-400/50 relative">
                  {/* Quantum Gates */}
                  <div className="absolute top-0 left-1/4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded border-2 border-white flex items-center justify-center text-xs font-bold">
                      H
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded border-2 border-white flex items-center justify-center text-xs font-bold">
                      R
                    </div>
                  </div>
                  <div className="absolute top-0 left-3/4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded border-2 border-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Entanglement Lines */}
              {qubit < 3 && (
                <div className="absolute left-20 top-4 w-0.5 h-8 bg-gradient-to-b from-purple-400 to-pink-400 animate-pulse"></div>
              )}
            </div>
          ))}
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-4 bg-slate-800/50 px-6 py-3 rounded-full">
              <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm text-gray-300">Quantum State: Superposition Active</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-400">4</div>
            <div className="text-sm text-gray-400">Qubits</div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-cyan-400">16</div>
            <div className="text-sm text-gray-400">Quantum States</div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">1000+</div>
            <div className="text-sm text-gray-400">Operations/sec</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnvironmentalGame = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-orange-500/30">
        <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center">
          <Target className="w-6 h-6 mr-3" />
          Environmental Impact Challenge
        </h3>
        
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">
            Learn about pollution sources and their environmental impact through interactive gameplay
          </p>
          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-white mb-4">Current Challenge: Reduce City Pollution</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pollutionSources.map((source, index) => (
                <button
                  key={index}
                  className="bg-slate-700/50 hover:bg-slate-600/50 p-3 rounded-lg transition-all duration-300 group"
                  onClick={() => {
                    setPollutionLevel(prev => Math.max(0, prev - source.value * 0.3));
                  }}
                >
                  <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    -{Math.round(source.value * 0.3)}
                  </div>
                  <div className="text-xs text-gray-400">{source.name}</div>
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Click pollution sources to implement reduction strategies!
            </div>
          </div>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">A+</div>
            <div className="text-sm text-gray-400">Environmental Grade</div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-cyan-400">2.5M</div>
            <div className="text-sm text-gray-400">Lives Saved</div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-400">85%</div>
            <div className="text-sm text-gray-400">Reduction Achieved</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Models
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our quantum-powered environmental models through interactive simulations and real-time visualizations
          </p>
        </div>
      </section>

      {/* Model Navigation */}
      <section className="px-6 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {models.map((model, index) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(index)}
                className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeModel === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                <model.icon className="w-5 h-5" />
                <span>{model.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Model Display */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-8">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${models[activeModel].color} bg-opacity-20`}>
                {React.createElement(models[activeModel].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{models[activeModel].title}</h2>
                <p className="text-gray-400">{models[activeModel].description}</p>
              </div>
            </div>

            {/* Model Content */}
            <div className="min-h-96">
              {activeModel === 0 && renderAirQualityModel()}
              {activeModel === 1 && renderPollutionDispersion()}
              {activeModel === 2 && renderQuantumCircuit()}
              {activeModel === 3 && renderEnvironmentalGame()}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Learn & Explore
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dive deeper into environmental science and quantum computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <Eye className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Quantum Tutorials</h3>
              <p className="text-gray-400 mb-4">Interactive lessons on quantum computing basics and environmental applications</p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center space-x-2 group">
                <span>Start Learning</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <Activity className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Data Playground</h3>
              <p className="text-gray-400 mb-4">Experiment with real environmental datasets and see quantum algorithms in action</p>
              <button className="text-green-400 hover:text-green-300 flex items-center space-x-2 group">
                <span>Explore Data</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <BarChart3 className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Research Papers</h3>
              <p className="text-gray-400 mb-4">Access our published research on quantum environmental monitoring</p>
              <button className="text-purple-400 hover:text-purple-300 flex items-center space-x-2 group">
                <span>View Papers</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Model Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world validation results of our quantum-enhanced environmental predictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-emerald-500/30 text-center hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.2%</div>
              <div className="text-sm text-gray-400">Prediction Accuracy</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full w-[99%]"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-blue-500/30 text-center hover:scale-105 transition-transform duration-300">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/30 text-center hover:scale-105 transition-transform duration-300">
              <Layers className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">127</div>
              <div className="text-sm text-gray-400">Quantum Features</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[88%]"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-cyan-500/30 text-center hover:scale-105 transition-transform duration-300">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Global Monitoring</div>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Quantum vs Classical
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our quantum-enhanced models outperform traditional approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Classical Models</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Accuracy</span>
                  <span className="text-red-400 font-bold">87.3%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[87%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Processing Time</span>
                  <span className="text-red-400 font-bold">145ms</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[75%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pattern Recognition</span>
                  <span className="text-red-400 font-bold">Limited</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">EnviroCast Quantum</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Accuracy</span>
                  <span className="text-green-400 font-bold">99.2%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-[99%] animate-pulse"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Processing Time</span>
                  <span className="text-green-400 font-bold">10ms</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-[95%] animate-pulse"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pattern Recognition</span>
                  <span className="text-green-400 font-bold">Advanced</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 px-8 py-4 rounded-full border border-green-500/30">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="text-lg font-semibold">Quantum Advantage: 12% accuracy improvement</span>
              <Zap className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #06b6d4, #10b981);
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #06b6d4, #10b981);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
        
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

export default ModelsPage;
