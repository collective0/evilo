import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Users, BarChart3, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
const DentalShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleGetStarted = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const screenshots = [
    {
      id: 1,
      src: "/lovable-uploads/3b6e4510-edc2-4313-866e-989f60a10c1f.png",
      alt: "Dental Practice Management Dashboard - Appointment Calendar",
      title: "Smart Calendar",
      priority: 1
    },
    {
      id: 2,
      src: "/lovable-uploads/1a2832b2-211d-4b83-ac13-a21857d02681.png",
      alt: "AI-Powered Chat Integration for Dental Practices",
      title: "AI Chat",
      priority: 2
    },
    {
      id: 3,
      src: "/lovable-uploads/ebde0754-fca7-44fb-b523-ab4a354cf3b9.png",
      alt: "Comprehensive Patient Management System",
      title: "Patient Management",
      priority: 3
    },
    {
      id: 4,
      src: "/lovable-uploads/7b52cc4f-885e-4227-9b0e-97c032577d57.png",
      alt: "Practice Analytics and Performance Dashboard",
      title: "Analytics",
      priority: 4
    }
  ];

  const features = [{
    icon: Calendar,
    title: "Smart Appointment Scheduling",
    description: "Automated booking system that syncs with your calendar and sends confirmation emails",
    benefits: ["24/7 online booking", "Automated confirmations", "Calendar sync", "Reminder system"]
  }, {
    icon: MessageCircle,
    title: "Interactive Chat Integration",
    description: "AI-powered chatbot that handles patient inquiries and booking requests 24/7",
    benefits: ["24/7 patient support", "Automated appointment booking", "Lead capture & conversion", "Instant responses"]
  }, {
    icon: Users,
    title: "Patient Management",
    description: "Comprehensive patient database with treatment history and contact management",
    benefits: ["Complete patient profiles", "Treatment history tracking", "Advanced search & filtering", "Contact management"]
  }, {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your practice performance and appointment trends",
    benefits: ["Real-time analytics", "Revenue tracking", "Performance optimization", "Growth insights"]
  }];

  const benefits = ["Reduce no-shows by 40% with automated reminders", "Save 10+ hours per week on administrative tasks", "Increase patient satisfaction with instant responses", "Streamline operations with integrated workflows", "Boost revenue with optimized scheduling"];
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with rounded background */}
        <div className="text-center mb-16 bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🦷 Automated Booking Software
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Revolutionize Your Dental Clinic
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete Clinic management solution with automated booking, patient management, and AI-powered chat integration to streamline your operations and grow your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={handleGetStarted}>
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => {
              const servicesElement = document.getElementById('services');
              servicesElement?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Services
            </Button>
          </div>
        </div>

        {/* Horizontal Overlapping Cards Section */}
        <div className="relative mb-20 py-12">
          <div className="flex justify-center items-center overflow-hidden">
            <div className="flex items-center space-x-[-100px]">
              {screenshots.map((screenshot, index) => {
                const isHovered = hoveredCard === screenshot.id;
                const zIndex = screenshot.priority === 1 ? 40 : 30 - screenshot.priority;
                
                return (
                  <div
                    key={screenshot.id}
                    className={`relative transition-all duration-500 ease-out cursor-pointer ${
                      isHovered ? 'scale-110 z-50' : ''
                    }`}
                    style={{
                      zIndex: isHovered ? 50 : zIndex,
                      marginLeft: index === 0 ? '0' : '-100px'
                    }}
                    onMouseEnter={() => setHoveredCard(screenshot.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card className={`w-80 overflow-hidden transition-all duration-500 ${
                      isHovered 
                        ? 'shadow-3xl shadow-primary/20 ring-2 ring-primary/50' 
                        : index === 0 
                          ? 'shadow-2xl' 
                          : 'shadow-xl'
                    }`}>
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt} 
                        className="w-full h-48 object-cover object-top" 
                      />
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {screenshot.title}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Section with rounded backgrounds */}
        <div className="mb-20 bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Practice Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a modern dental practice efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 justify-center">
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section with rounded background */}
        <div className="mb-20 bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Clinics Choose Our Solution</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of dental practices that have transformed their operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted/20 rounded-2xl p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with rounded background */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Clinic?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the edge on hundreds of other Clinics who are still falling behind in the automation game
          </p>
          <Button size="lg" className="text-lg px-8" onClick={handleGetStarted}>
            Schedule Your Demo Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default DentalShowcase;