import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Monitor, Users, Calendar, MessageSquare, BarChart, Settings } from "lucide-react";

const EviloSoftware = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Monitor,
      title: "Dashboard Analytics",
      description: "Comprehensive overview of your business performance with real-time metrics and insights.",
      image: "/lovable-uploads/7db330bf-9d2e-497d-8aa4-b9df2df5085d.png"
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Streamlined client relationship management with detailed profiles and interaction history.",
      image: "/lovable-uploads/47cbd8d9-1b57-45a4-bfb2-0d24cab57bf0.png"
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Advanced scheduling system with automated reminders and calendar integration.",
      image: "/lovable-uploads/a66dfe65-8836-4b59-ae61-a96e512f424c.png"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Centralized messaging system for seamless client communication and team collaboration.",
      image: "/lovable-uploads/78463721-2bb3-484d-bf03-7dc269e1f099.png"
    },
    {
      icon: BarChart,
      title: "Service History",
      description: "Detailed tracking of all client interactions and service appointments.",
      image: "/lovable-uploads/25073dc7-267a-45c2-bc51-fe30ba2a1b7c.png"
    },
    {
      icon: Settings,
      title: "Calendar Management",
      description: "Block calendar times, manage availability, and optimize your schedule.",
      image: "/lovable-uploads/e627edb5-2966-4361-9147-207f37e20a7a.png"
    }
  ];

  const benefits = [
    "Automated appointment reminders reduce no-shows by 85%",
    "Streamlined workflows save 3+ hours daily",
    "Real-time analytics improve decision making",
    "Integrated communication enhances client satisfaction",
    "Cloud-based platform ensures 99.9% uptime",
    "Mobile-responsive design for on-the-go access"
  ];

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page with contact hash
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-primary font-medium">Evilo Software Suite</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Professional Software
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive business management software designed to streamline operations, 
              enhance client relationships, and drive growth across industries.
            </p>
            
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Powerful Features for
                <span className="block text-primary">Modern Businesses</span>
              </h2>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer transition-all duration-300 ${
                      activeFeature === index 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          activeFeature === index 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <feature.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src={features[activeFeature].image} 
                      alt={features[activeFeature].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {features[activeFeature].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why Choose Evilo Software?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            See It In Action
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/d6df0399-fbd1-402b-b4e7-5eeb12acb414.png" 
                  alt="Dental Practice Dashboard"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">Practice Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive overview for dental practices</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/6de85819-3ad6-4c86-989e-9cc5f70b8854.png" 
                  alt="Beauty Studio Management"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">Beauty Studio</h3>
                  <p className="text-sm text-muted-foreground">Specialized tools for beauty businesses</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/4737c159-6bea-4c72-98b4-bdc1f7d04c67.png" 
                  alt="Client Communication"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">AI Chat Support</h3>
                  <p className="text-sm text-muted-foreground">Intelligent client communication</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses already using Evilo Software to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGetStarted}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EviloSoftware;