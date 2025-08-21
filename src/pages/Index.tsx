import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Evilo Software™</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/software" className="text-muted-foreground hover:text-foreground transition-colors">Software</Link>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">Login Portal</Button>
              <Button className="bg-primary hover:bg-primary/90">Book Demo Meeting</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Business Automation
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Evilo Software™
            <span className="block text-primary mt-2">Business Automation</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your business operations with intelligent automation. 
            Designed for modern companies that want to scale efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Book Demo Meeting
            </Button>
            <Link to="/software">
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 text-lg px-8 py-4 w-full">
                Explore Software
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">Evilo Software™</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/software" className="hover:text-foreground transition-colors">Software</Link>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
            © 2024 Evilo Software™. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;