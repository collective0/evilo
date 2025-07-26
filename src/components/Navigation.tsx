
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/57427081-c9e9-4056-be06-69b42902bc71.png" 
              alt="Evilo Business Solutions" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white"
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
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-sm rounded-lg mb-4">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    handleGetStarted();
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-500 hover:to-slate-400 text-white"
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
