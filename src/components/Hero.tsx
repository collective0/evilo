
import { ArrowRight, Bot, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(false);
  const rotatingTexts = ["Cut Costs", "Save Time", "Grow Sales"];
  const isMobile = useIsMobile();

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 z-10 tech-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-morphing"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 glass-strong rounded-full px-8 py-4 border border-primary/30 hover-glow group relative overflow-hidden">
              <div className="scan-line"></div>
              <Bot className="text-primary animate-pulse-glow" size={28} />
              <span className="text-foreground font-medium tracking-wide">AI-Powered Automation</span>
              <Zap className="text-accent group-hover:rotate-12 transition-transform duration-500" size={28} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Transform Your Business with
            <br />
            <span className="animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:300%_300%]">
              AI Automation
            </span>
            <span className="text-foreground"> to </span>
            <span 
              className={`animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:300%_300%] inline-block ${
                isMobile ? 'w-auto text-center' : 'w-[400px] text-left whitespace-nowrap'
              } ${isAnimating ? 'animate-fade-out' : showFadeIn ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '1s' }}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Unlock unprecedented efficiency and growth with our cutting-edge AI automation solutions. 
            We help businesses <span className="text-primary font-medium">streamline operations</span>, reduce costs, and scale effortlessly.
          </p>

          <div className="flex justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground px-12 py-6 text-lg font-semibold group overflow-hidden hover-lift shadow-2xl border border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Book a Demo</span>
              <ArrowRight className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-500" size={22} />
              <div className="absolute inset-0 animate-pulse-glow rounded-md"></div>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "95% Efficiency Boost", desc: "Average improvement", color: "text-primary" },
              { icon: Zap, title: "24/7 Operation", desc: "Never stop working", color: "text-accent" },
              { icon: Bot, title: "Smart Integration", desc: "Seamless AI adoption", color: "text-primary" }
            ].map((item, index) => (
              <div key={index} className="glass-strong rounded-2xl p-8 border border-primary/20 hover-lift hover-glow group relative overflow-hidden">
                <div className="scan-line"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500">
                      <item.icon className={`${item.color} group-hover:scale-110 transition-transform duration-500`} size={36} />
                    </div>
                  </div>
                  <h3 className="text-foreground font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
