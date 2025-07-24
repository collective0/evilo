
import { ArrowRight, Bot, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(false);
  const rotatingTexts = ["Cut Costs", "Save Time", "Grow Sales"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setIsAnimating(false);
        setShowFadeIn(true);
        
        setTimeout(() => {
          setShowFadeIn(false);
        }, 500);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-900/40">
              <Bot className="text-blue-400" size={24} />
              <span className="text-gray-300">AI-Powered Automation</span>
              <Zap className="text-slate-400" size={24} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-slate-400 to-blue-600 bg-clip-text text-transparent">
              AI Automation
            </span>
            <span className="text-white"> to </span>
            <span 
              className={`bg-gradient-to-r from-blue-600 via-slate-400 to-blue-600 bg-clip-text text-transparent inline-block w-[400px] text-left whitespace-nowrap ${
                isAnimating ? 'animate-fade-out' : showFadeIn ? 'animate-fade-in' : ''
              }`}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock unprecedented efficiency and growth with our cutting-edge AI automation solutions. 
            We help businesses streamline operations, reduce costs, and scale effortlessly.
          </p>

          <div className="flex justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white px-8 py-4 text-lg group transition-all duration-300 hover:scale-105 glow-border border border-blue-600/50"
            >
              Book a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "95% Efficiency Boost", desc: "Average improvement" },
              { icon: Zap, title: "24/7 Operation", desc: "Never stop working" },
              { icon: Bot, title: "Smart Integration", desc: "Seamless AI adoption" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-800/20 hover:border-blue-600/40 transition-all duration-300 hover:scale-105">
                <item.icon className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
