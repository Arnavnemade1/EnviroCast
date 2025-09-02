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
      description: "Our model looks at air quality readings like PM2.5, O₃, NO₂, along with weather and NASA data. Instead of just one snapshot, we examine recent history (like the last 24 hours) to spot patterns
