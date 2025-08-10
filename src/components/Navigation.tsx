
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGetStarted = () => {
    handleNavigation('contact');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/5473a23d-5f2b-4427-aad0-101aa58ae6eb.png" 
              alt="Evilo Business Solutions" 
              className="h-7 w-auto filter drop-shadow-lg"
              style={{filter: 'drop-shadow(0 0 20px rgba(47,124,246,0.25))'}}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => handleNavigation('home')} className="text-sm text-foreground hover:text-primary transition-colors duration-200">
              Home
            </button>
            <button onClick={() => handleNavigation('services')} className="text-sm text-foreground hover:text-primary transition-colors duration-200">
              Services
            </button>
            <button onClick={() => handleNavigation('about')} className="text-sm text-foreground hover:text-primary transition-colors duration-200">
              About
            </button>
            
            {/* Evilo Software Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                Evilo Software
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass-panel p-2 shadow-xl">
                  <Link 
                    to="/evilo-software" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-5 h-5 rounded bg-gradient-to-r from-brand to-brand-secondary shadow-sm"></div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Evilo Platform</div>
                      <div className="text-xs text-muted">Automated booking & workflow ops</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/legal-compliance" className="text-sm text-foreground hover:text-primary transition-colors duration-200">
              Legal & Compliance
            </Link>
            <button onClick={() => handleNavigation('contact')} className="text-sm text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </button>
            <Button 
              onClick={handleGetStarted}
              className="btn-brand text-sm font-semibold px-5 py-2 rounded-full"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="p-4 space-y-2 glass-panel mt-4 mb-4">
              <button
                onClick={() => {
                  handleNavigation('home');
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => {
                  handleNavigation('services');
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => {
                  handleNavigation('about');
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <Link
                to="/evilo-software"
                className="block w-full px-3 py-2 text-left text-sm text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Evilo Software
              </Link>
              <Link
                to="/legal-compliance"
                className="block w-full px-3 py-2 text-left text-sm text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Legal & Compliance
              </Link>
              <button
                onClick={() => {
                  handleNavigation('contact');
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button 
                  onClick={() => {
                    handleGetStarted();
                    setIsOpen(false);
                  }}
                  className="w-full btn-brand text-sm font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
