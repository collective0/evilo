import { useState } from "react";
import { Check, Clock, DollarSign, Users, Calendar, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const SoftwarePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Dashboard Analytics",
      description: "Real-time insights into your business performance with comprehensive metrics and KPIs.",
      image: "/lovable-uploads/7343a5c5-cec5-4f68-8bd9-dd4a72a7ec46.png"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Management",
      description: "Centralized client database with detailed profiles, contact information, and service history.",
      image: "/lovable-uploads/b6554760-fb35-4a9f-b5dc-52daf7c5834e.png"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Scheduling",
      description: "Advanced calendar system with booking management, time blocking, and automated reminders.",
      image: "/lovable-uploads/6448e8e7-33de-43b2-aee6-8fc8c131c7d1.png"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Client Communication",
      description: "Built-in messaging system and AI chatbot for seamless client interaction and support.",
      image: "/lovable-uploads/23b6ccef-c0fd-4e87-ac68-02f7655706ae.png"
    }
  ];

  const benefits = [
    "Reduce administrative work by 10+ hours per week",
    "Save $250+ weekly on labor costs",
    "Increase client retention by 35%",
    "Automate 90% of booking processes",
    "Improve staff productivity by 40%",
    "24/7 automated client support"
  ];

  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Evilo Business Management
              <span className="text-primary block">Software</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience the power of automated business management. Save 10+ hours weekly while increasing revenue and client satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleGetStarted} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={handleGetStarted}>
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Statistics */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Proven ROI in Numbers</h2>
            <p className="text-lg text-muted-foreground">See how Evilo transforms your business operations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">10+</CardTitle>
                <CardDescription>Hours Saved Weekly</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-green-500">$250</CardTitle>
                <CardDescription>Weekly Labor Cost Savings</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-blue-500">$1,000</CardTitle>
                <CardDescription>Monthly Cost Reduction</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-orange-500">40%</CardTitle>
                <CardDescription>Productivity Increase</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Business Management Suite</h2>
            <p className="text-lg text-muted-foreground">Everything you need to run your business efficiently</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${
                      activeFeature === index ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Image */}
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">See Evilo in Action</h2>
            <p className="text-lg text-muted-foreground">Real screenshots from actual client implementations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/lovable-uploads/8325f633-41d1-4f5c-b748-766f5384d893.png", title: "Dental Practice Dashboard" },
              { src: "/lovable-uploads/39665cc7-c2a2-4609-9b57-c5832b721a5c.png", title: "Service History Tracking" },
              { src: "/lovable-uploads/829b86d5-7a37-447e-a2be-c3de79fc6a27.png", title: "Calendar Blocking System" },
              { src: "/lovable-uploads/5247078e-153e-45ab-bf56-dc1cb6a2a2d1.png", title: "Client Communication Hub" },
              { src: "/lovable-uploads/6448e8e7-33de-43b2-aee6-8fc8c131c7d1.png", title: "Appointment Management" },
              { src: "/lovable-uploads/690abe94-d397-45e3-8ec8-78bfd0e6033d.png", title: "AI Chatbot Integration" }
            ].map((screenshot, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-center">{screenshot.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Evilo?</h2>
            <p className="text-lg text-muted-foreground">Transform your business with proven results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Save $1,000+ Monthly?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of businesses already transforming their operations with Evilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleGetStarted}
              className="bg-background text-foreground hover:bg-background/90"
            >
              Start Your Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGetStarted}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;