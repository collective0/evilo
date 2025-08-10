import { ArrowRight, Calendar, Users, BarChart3, Shield, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const EviloSoftware = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="eyebrow">Platform & Booking Operations</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 hero-gradient">
              Evilo Platform™
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-6">
              Automated Booking & Workflow Ops
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              One powerful platform for dental, industrial clients and other sectors. Automated booking 
              engine with ultra-sonic workflows and efficient operation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-brand text-sm font-semibold px-8 py-3">
                <Calendar className="w-4 h-4 mr-2" />
                View Demo
              </Button>
              <Button variant="outline" className="text-sm font-semibold px-8 py-3 border-border hover:bg-card">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Hero Media */}
          <div className="relative">
            <div className="glass-panel p-8 rounded-3xl">
              <div className="aspect-video bg-gradient-to-br from-card to-background rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-background" />
                  </div>
                  <p className="text-muted">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Operations Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Operations Management
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Everything you need to run your operations, built into one efficient platform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="glass-panel p-6 interactive-tile">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Smart Booking</h3>
              <p className="text-muted text-sm">
                Intelligent appointment scheduling with automated confirmations and reminders.
              </p>
            </div>
            
            <div className="glass-panel p-6 interactive-tile">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Client Portal & Directory</h3>
              <p className="text-muted text-sm">
                Centralized client management with profiles, history, and communication tools.
              </p>
            </div>
            
            <div className="glass-panel p-6 interactive-tile">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Real-time Analytics & Reporting</h3>
              <p className="text-muted text-sm">
                Comprehensive insights into operations, productivity, and business performance.
              </p>
            </div>
            
            <div className="glass-panel p-6 interactive-tile">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Analytics & Reporting</h3>
              <p className="text-muted text-sm">
                Advanced security protocols ensuring data protection and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Choose Evilo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Teams Choose Evilo
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Built from experience in the trenches, built into a team and designed to scale.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 interactive-tile">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Reduce time-wasted &amp; boost efficiency</h3>
              <p className="text-muted">
                Streamlined workflows eliminate manual processes and reduce administrative overhead by up to 60%.
              </p>
            </div>
            
            <div className="glass-panel p-8 interactive-tile">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Lower operating costs dramatically</h3>
              <p className="text-muted">
                Automated processes reduce staffing needs and operational expenses while maintaining service quality.
              </p>
            </div>
            
            <div className="glass-panel p-8 interactive-tile">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-secondary flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Straight-ahead to swift execution</h3>
              <p className="text-muted">
                Intuitive interface and automated workflows enable rapid deployment and immediate productivity gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key Outcomes Across Industries
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Higher Productivity</h3>
              <p className="text-muted mb-4">
                Teams are now far more effective in delivery and automated booking systems.
              </p>
              <div className="text-3xl font-bold text-brand">85%</div>
              <div className="text-sm text-muted">increase in operational efficiency</div>
            </div>
            
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Better Client Experience</h3>
              <p className="text-muted mb-4">
                User-friendly booking, clear updates, and longer response times.
              </p>
              <div className="text-3xl font-bold text-brand">92%</div>
              <div className="text-sm text-muted">client satisfaction rate</div>
            </div>
            
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">24/7 Coverage</h3>
              <p className="text-muted mb-4">
                Never miss an booking opportunity with automated booking and basic support.
              </p>
              <div className="text-3xl font-bold text-brand">100%</div>
              <div className="text-sm text-muted">uptime availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-muted mb-8">
            Get your booking and workflows frameworks integrated with many functions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-brand text-sm font-semibold px-8 py-3">
              Schedule Demo
            </Button>
            <Button variant="outline" className="text-sm font-semibold px-8 py-3 border-border hover:bg-card">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EviloSoftware;