
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(false);
  const rotatingTexts = ["AI Revolution", "Future of Business", "Next Generation"];
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="eyebrow">Automated Business Excellence</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Leading the{" "}
            <span 
              className={`hero-gradient inline-block ${
                isMobile ? 'w-auto text-center' : 'w-[400px] text-left whitespace-nowrap'
              } ${isAnimating ? 'animate-fade-out' : showFadeIn ? 'animate-fade-in' : ''}`}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>

          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock unprecedented efficiency and growth with our cutting-edge AI automation solutions. 
            We help businesses streamline operations, reduce costs, and scale effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={handleGetStarted}
              className="btn-brand text-sm font-semibold px-8 py-3 group"
            >
              Book a Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              className="text-sm font-semibold px-8 py-3 border-border hover:bg-card"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "95% Efficiency Boost", desc: "Average improvement" },
              { icon: Zap, title: "24/7 Operation", desc: "Never stop working" },
              { icon: Sparkles, title: "Smart Integration", desc: "Seamless AI adoption" }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-6 interactive-tile">
                <item.icon className="text-brand mx-auto mb-4" size={32} />
                <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
