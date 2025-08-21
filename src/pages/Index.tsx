import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/LogoCarousel";
import CompanyCarousel from "@/components/CompanyCarousel";
import DentalShowcase from "@/components/DentalShowcase";
import InteractiveVisual from "@/components/InteractiveVisual";
import FloatingChatbot from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LogoCarousel />
      <About />
      <Services />
      <DentalShowcase />
      <Benefits />
      <InteractiveVisual />
      <CompanyCarousel />
      <Testimonials />
      <Contact />
      <FloatingChatbot />
    </div>
  );
};

export default Index;