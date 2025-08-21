import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Shield, Users, Calendar, BarChart3 } from "lucide-react";

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
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">Login Portal</Button>
              <Button className="bg-primary hover:bg-primary/90">Book Demo Meeting</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Scheduling & Operations
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Evilo Software™
                <span className="block text-3xl md:text-4xl mt-2">Automated Booking</span>
                <span className="block text-3xl md:text-4xl text-primary">& Workflow Ops</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Designed for clinics, industrial teams, and salons. Evilo's assistant 
                plugs into your website to handle client details, scheduling, follow-ups, 
                communication, and analytics. All plugged into our custom easy to use 
                dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Demo Meeting
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Login Portal
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Data secure & hosted localy</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>One-click enterprise grade</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-card/80 backdrop-blur border-border/50 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Automated Customer Management</h3>
                  <p className="text-lg text-primary">Solutions for the Salon Industry</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Integrated AI assistant handles onboarding, scheduling, management, follow ups 
                    and communication.
                  </p>
                </div>
                
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary/10 rounded-full"></div>
                  </div>
                </div>

                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border/30 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Management Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Operations Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to automate your business operations and provide 
              exceptional customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  AI-powered appointment booking with automated conflict resolution and 
                  intelligent time slot optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Comprehensive client profiles with automated follow-ups, 
                  communication tracking, and personalized service recommendations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Real-time business intelligence with performance metrics, 
                  trend analysis, and actionable growth recommendations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join businesses already using Evilo Software to streamline their workflow 
            and enhance customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Demo Meeting
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              Login Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold">Evilo Software™</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Automated booking and workflow operations for modern businesses.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Salon Management</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Clinic Operations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Industrial Teams</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Evilo Software™. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;