
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 z-10">
      {/* Sophisticated Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/2 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/1 to-primary/2 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 card-elegant rounded-full px-8 py-4 group relative overflow-hidden">
              <Bot className="text-primary/80" size={24} />
              <span className="text-foreground font-medium tracking-wide text-sm">AI-Powered Automation</span>
              <Zap className="text-primary/60 group-hover:text-primary transition-colors duration-300" size={20} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight font-playfair">
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
              className="relative bg-primary/10 text-foreground px-12 py-4 text-lg font-medium group overflow-hidden hover:bg-primary/20 transition-all duration-300 border border-primary/20 backdrop-blur-sm"
            >
              <span className="relative z-10">Book a Demo</span>
              <ArrowRight className="ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "95% Efficiency Boost", desc: "Average improvement", color: "text-primary" },
              { icon: Zap, title: "24/7 Operation", desc: "Never stop working", color: "text-accent" },
              { icon: Bot, title: "Smart Integration", desc: "Seamless AI adoption", color: "text-primary" }
            ].map((item, index) => (
              <div key={index} className="card-elegant rounded-xl p-6 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-all duration-300">
                      <item.icon className="text-primary/70 group-hover:text-primary transition-colors duration-300" size={28} />
                    </div>
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary/90 transition-colors duration-300 font-playfair">{item.title}</h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
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
