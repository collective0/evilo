
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5473a23d-5f2b-4427-aad0-101aa58ae6eb.png" 
              alt="Evilo Business Solutions" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('home')} className="text-foreground hover:text-primary transition-colors duration-200">
              Home
            </button>
            <button onClick={() => handleNavigation('services')} className="text-foreground hover:text-primary transition-colors duration-200">
              Services
            </button>
            <button onClick={() => handleNavigation('about')} className="text-foreground hover:text-primary transition-colors duration-200">
              About
            </button>
            <div className="dropdown relative">
              <button 
                className="text-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Evilo Software
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/software"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    View Software
                  </Link>
                  <button 
                    onClick={() => {
                      handleNavigation('contact');
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Request Demo
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => handleNavigation('contact')} className="text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </button>
            <button onClick={() => handleNavigation('contact')} className="text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </button>
            <Button 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-sm rounded-lg mb-4 border border-border">
              <button
                onClick={() => {
                  handleNavigation('home');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  handleNavigation('services');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  handleNavigation('about');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                About
              </button>
              <div className="dropdown relative">
                <button 
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Evilo Software
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      to="/software"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      View Software
                    </Link>
                    <button 
                      onClick={() => {
                        handleNavigation('contact');
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Request Demo
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  handleNavigation('contact');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  handleNavigation('contact');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    handleGetStarted();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
