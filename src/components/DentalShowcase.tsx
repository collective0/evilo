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
  const screenshots = [{
    id: 1,
    src: "/lovable-uploads/3b6e4510-edc2-4313-866e-989f60a10c1f.png",
    alt: "Dental Practice Management Dashboard - Appointment Calendar",
    title: "Smart Calendar",
    priority: 1
  }, {
    id: 2,
    src: "/lovable-uploads/1a2832b2-211d-4b83-ac13-a21857d02681.png",
    alt: "AI-Powered Chat Integration for Dental Practices",
    title: "AI Chat",
    priority: 2
  }, {
    id: 3,
    src: "/lovable-uploads/ebde0754-fca7-44fb-b523-ab4a354cf3b9.png",
    alt: "Comprehensive Patient Management System",
    title: "Patient Management",
    priority: 3
  }, {
    id: 4,
    src: "/lovable-uploads/7b52cc4f-885e-4227-9b0e-97c032577d57.png",
    alt: "Practice Analytics and Performance Dashboard",
    title: "Analytics",
    priority: 4
  }];
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
  return <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative min-h-[600px] bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 rounded-3xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-transparent"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full px-8 py-16">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                NEW
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Evilo Software™
                <br />
                <span className="text-2xl lg:text-3xl xl:text-4xl">AI Powered Automated Booking Software</span>
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
                Cut Costs, Save Time And Improve Patient Onboarding Experience With Our Integrated Chatbot Widget To Streamline And Completely Automate Booking.
              </p>
              
              
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full" onClick={handleGetStarted}>
                  Book Demo Meeting →
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full" onClick={() => {
                const servicesElement = document.getElementById('services');
                servicesElement?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  View Pricing →
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img src="/lovable-uploads/87e209c7-bcc4-4ba0-8cd0-2138900a61ad.png" alt="AI Automated Patient Booking Software Interface" className="max-w-full h-auto rounded-lg shadow-2xl" />
              </div>
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
            {features.map((feature, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center gap-2 justify-center">
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{benefit}</span>
                    </li>)}
                </ul>
              </Card>)}
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
            {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3 bg-muted/20 rounded-2xl p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>)}
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
    </section>;
};
export default DentalShowcase;