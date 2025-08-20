import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const SoftwarePage = () => {
  const handleBookDemo = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-secondary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Automated Customer Management
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Powerful AI-Driven
                <span className="text-primary block">Operations</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Evilo Software automates onboarding, scheduling, management, follow-ups, 
                and communications—all from a single platform that plugs directly into your 
                website. Focus on caring for your customers while we handle the administration.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Integrated AI assistant for seamless client interactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Customizable schedules tailored to your team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Actionable analytics and insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Easy two-way communication (email, SMS & chat)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Customer directories & appointment histories</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleBookDemo} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Login Portal
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border">
                <img
                  src="/lovable-uploads/7343a5c5-cec5-4f68-8bd9-dd4a72a7ec46.png"
                  alt="Practice management dashboard showing a daily schedule and key metrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Statistics */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-foreground">10+ hrs</CardTitle>
                <CardDescription className="text-muted-foreground">Admin work saved every week</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-foreground">$250</CardTitle>
                <CardDescription className="text-muted-foreground">Approximate weekly labour cost savings</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-foreground">$1K+</CardTitle>
                <CardDescription className="text-muted-foreground">Estimated monthly savings</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Built for Regulated & High-Velocity Work */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for Regulated & High-Velocity Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              From HIPAA to safety audits to client memberships, Evilo adapts to your requirements while keeping 
              interfaces simple.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">HIPAA & BAAs</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">EHR/CRM & CMMS</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">POS & Inventory</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Role Permissions</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">SLA & Reminders</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">Analytics API</span>
            </div>
          </div>

        </div>
      </section>
      </div>
    </div>
  );
};

export default SoftwarePage;