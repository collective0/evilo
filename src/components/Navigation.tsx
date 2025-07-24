import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center group">
            <div className="flex items-center space-x-3 animate-scale-in">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse"></div>
              </div>
              <h1 className="text-3xl font-bold text-gradient animate-text-shimmer">
                Evilo
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-slide-in-right">
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-foreground/80 hover:text-foreground px-4 py-2 rounded-lg transition-all duration-300 hover-lift group animate-magnetic"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
            <Button
              onClick={handleGetStarted}
              className="relative overflow-hidden bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 animate-magnetic group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative glass hover-lift transition-all duration-300 group"
            >
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? 
                  <X className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" /> : 
                  <Menu className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                }
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="glass-card m-4 p-6 space-y-4">
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex items-center space-x-3 text-foreground/80 hover:text-foreground p-3 rounded-lg hover:bg-white/5 transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">{item}</span>
              </a>
            ))}
            <Button
              onClick={() => {
                handleGetStarted();
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: '400ms' }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <Sparkles className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;