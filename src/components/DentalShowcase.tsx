import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Users, BarChart3, ArrowRight, Check } from "lucide-react";
const DentalShowcase = () => {
  const handleGetStarted = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const features = [{
    icon: Calendar,
    title: "Smart Appointment Scheduling",
    description: "Automated booking system that syncs with your calendar and sends confirmation emails"
  }, {
    icon: MessageCircle,
    title: "Interactive Chat Integration",
    description: "AI-powered chatbot that handles patient inquiries and booking requests 24/7"
  }, {
    icon: Users,
    title: "Patient Management",
    description: "Comprehensive patient database with treatment history and contact management"
  }, {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your practice performance and appointment trends"
  }];
  const benefits = ["Reduce no-shows by 40% with automated reminders", "Save 10+ hours per week on administrative tasks", "Increase patient satisfaction with instant responses", "Streamline operations with integrated workflows", "Boost revenue with optimized scheduling"];
  return <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">🦷 Automated Booking Software
        </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Revolutionize Your Dental Clinic</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Complete Clinic management solution with automated booking, patient management, and AI-powered chat integration to streamline your operations and grow your practice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={handleGetStarted}>
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => {
            const servicesElement = document.getElementById('services');
            servicesElement?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              View Services
            </Button>
          </div>
        </div>

        {/* Main Software Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Complete Practice Management</h2>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>)}
            </div>
          </div>
          
          {/* Main Calendar Screenshot */}
          <div className="relative">
            <Card className="card-elegant overflow-hidden">
              <img src="/lovable-uploads/3b6e4510-edc2-4313-866e-989f60a10c1f.png" alt="Dental Practice Management Dashboard - Appointment Calendar" className="w-full h-auto" />
            </Card>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Live Calendar
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => <Card key={index} className="card-elegant p-6 text-center group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary/90 transition-colors duration-300">{feature.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
            </Card>)}
        </div>

        {/* Software Screenshots Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the power of our integrated dental practice management system
            </p>
          </div>

          {/* Chat Integration */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="card-elegant overflow-hidden">
              <img src="/lovable-uploads/1a2832b2-211d-4b83-ac13-a21857d02681.png" alt="AI-Powered Chat Integration for Dental Practices" className="w-full h-auto" />
            </Card>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Chat Integration</h3>
              <p className="text-muted-foreground mb-6">
                Our intelligent chatbot handles patient inquiries, appointment requests, and provides 
                instant responses 24/7. Seamlessly integrates with your website to capture leads 
                and convert visitors into patients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">24/7 patient support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Automated appointment booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Lead capture & conversion</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Patient Management */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <Card className="overflow-hidden shadow-xl">
                <img src="/lovable-uploads/ebde0754-fca7-44fb-b523-ab4a354cf3b9.png" alt="Comprehensive Patient Management System" className="w-full h-auto" />
              </Card>
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Patient Management Made Simple</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive patient database with treatment history, contact information, 
                and appointment tracking. Easily search, filter, and manage all patient 
                interactions from one central location.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Complete patient profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Treatment history tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Advanced search & filtering</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Analytics Dashboard */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden shadow-xl">
              <img src="/lovable-uploads/7b52cc4f-885e-4227-9b0e-97c032577d57.png" alt="Practice Analytics and Performance Dashboard" className="w-full h-auto" />
            </Card>
            <div>
              <h3 className="text-2xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-muted-foreground mb-6">
                Get real-time insights into your practice performance with comprehensive 
                analytics. Track appointments, patient flow, revenue trends, and identify 
                opportunities for growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Real-time analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Revenue tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-sm">Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 mb-16">
          <Card className="p-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Clinic?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Get the edge on hundreds of other Clinics who are still falling behind in the automation game</p>
            <Button size="lg" className="text-lg px-8" onClick={handleGetStarted}>
              Schedule Your Demo Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};
export default DentalShowcase;