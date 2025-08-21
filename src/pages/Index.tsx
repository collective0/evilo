import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Evilo Software™</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link to="/software" className="text-muted-foreground hover:text-foreground">
                Software
              </Link>
              <Button variant="outline" size="sm">Login Portal</Button>
              <Button size="sm">Book Demo</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Evilo Software™
          </h1>
          <p className="text-2xl text-muted-foreground mb-12">
            Business Automation Solutions
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Book Demo Meeting
            </Button>
            <Link to="/software">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                View Software →
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Evilo Software™. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;