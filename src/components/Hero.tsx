
import { useEffect, useState } from "react";
import { ArrowRight, Zap, Shield, Sparkles, Star, Rocket, Brain, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFadeIn, setShowFadeIn] = useState(true);

  const rotatingTexts = [
    "AI-Powered Solutions",
    "Intelligent Automation", 
    "Smart Business Growth",
    "Digital Transformation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setShowFadeIn(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setShowFadeIn(true);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: Brain, title: "AI-Powered", description: "Advanced machine learning algorithms" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized for peak performance" },
    { icon: Shield, title: "Secure", description: "Enterprise-grade security" },
    { icon: Code, title: "Scalable", description: "Grows with your business" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Main heading with animation */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium animate-scale-in">
              <Sparkles className="h-4 w-4" />
              <span>Welcome to the Future of Business</span>
              <Star className="h-4 w-4 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <span className="block text-foreground animate-slide-in-left">Transform Your</span>
              <span className="block text-gradient animate-text-shimmer">Business with</span>
              <span 
                className={`block h-24 md:h-32 lg:h-36 ${showFadeIn ? 'animate-slide-in-right' : 'animate-fade-out'}`}
              >
                <span className="text-gradient">{rotatingTexts[currentTextIndex]}</span>
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
              Revolutionize your operations with cutting-edge artificial intelligence. 
              Unlock unprecedented efficiency, insights, and growth potential.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-scale-in" style={{ animationDelay: '400ms' }}>
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="group relative overflow-hidden bg-gradient-primary text-primary-foreground px-12 py-6 text-lg font-semibold rounded-2xl hover-lift hover-glow transition-all duration-500 animate-magnetic"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Rocket className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Book a Demo</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
            </Button>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="group glass-card p-6 text-center hover-lift transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <benefit.icon className="h-12 w-12 mx-auto text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform" />
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
