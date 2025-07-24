import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const LogoCarousel = () => {
  const logos = [
    {
      name: "TechCorp",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "InnovateLab", 
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "FutureTech",
      url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "DigitalFlow",
      url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "CloudSystems",
      url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "DataStream",
      url: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "SmartCore",
      url: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "NextLevel",
      url: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=200&h=100&fit=crop&auto=format"
    }
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-slate-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-gray-300">
            Join thousands of companies already using our AI solutions
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Card className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/20 hover:border-blue-600/40 transition-all duration-300 p-6 h-24 flex items-center justify-center group">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={logo.url} 
                      alt={`${logo.name} logo`}
                      className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCarousel;