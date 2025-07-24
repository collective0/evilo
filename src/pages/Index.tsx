
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingStars from "@/components/FloatingStars";
import LogoCarousel from "@/components/LogoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen dark relative overflow-hidden">
      <div className="gradient-dark min-h-screen">
        <FloatingStars />
        <Navigation />
        <Hero />
        <LogoCarousel />
        <Services />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
