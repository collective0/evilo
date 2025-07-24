
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingStars from "@/components/FloatingStars";
import CompanyCarousel from "@/components/CompanyCarousel";


const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingStars />
      <Navigation />
      <Hero />
      <CompanyCarousel />
      <Services />
      <Benefits />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
