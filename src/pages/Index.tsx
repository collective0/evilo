import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import DentalShowcase from "@/components/DentalShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <DentalShowcase />
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Contact />
    </div>
  );
};

export default Index;